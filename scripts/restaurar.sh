#!/bin/bash
# Restaura la base de datos desde un backup de S3. ¡REEMPLAZA los datos actuales!
#   scripts/restaurar.sh               -> lista los backups disponibles
#   scripts/restaurar.sh <archivo>     -> restaura ese backup (pide confirmación)
# Antes de restaurar hace un backup del estado actual, por si hay que volver atrás.
set -euo pipefail
export AWS_DEFAULT_REGION=us-east-2
DIR="$(cd "$(dirname "$0")/.." && pwd)"
BUCKET="${BACKUP_BUCKET:-datahorse-backups-301414341321}"
DC="docker compose -f $DIR/docker-compose.yml -f $DIR/docker-compose.prod.yml"

if [ $# -eq 0 ]; then aws s3 ls "s3://$BUCKET/db/"; exit 0; fi

read -r -p "Esto REEMPLAZA la base actual con '$1'. Escribe SI para continuar: " r
[ "$r" = "SI" ] || { echo "Cancelado."; exit 1; }

TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"; $DC start backend >/dev/null' EXIT
aws s3 cp "s3://$BUCKET/db/$1" "$TMP/b.sql.gz" --only-show-errors
gzip -t "$TMP/b.sql.gz"

"$DIR/scripts/backup.sh"          # respaldo del estado actual antes de reemplazarlo
$DC stop backend                  # que nadie escriba mientras se restaura
zcat "$TMP/b.sql.gz" | $DC exec -T db sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE"' 2>/dev/null
echo "OK: base restaurada desde $1 (el backend se vuelve a encender)"
