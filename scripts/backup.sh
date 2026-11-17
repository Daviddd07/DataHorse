#!/bin/bash
# Backup de la base de datos de producción a S3 (s3://<bucket>/db/). Lo ejecuta cron a diario.
# No contiene secretos: la contraseña se lee DENTRO del contenedor de MySQL (MYSQL_ROOT_PASSWORD).
set -euo pipefail
export AWS_DEFAULT_REGION=us-east-2
DIR="$(cd "$(dirname "$0")/.." && pwd)"
BUCKET="${BACKUP_BUCKET:-datahorse-backups-301414341321}"
DC="docker compose -f $DIR/docker-compose.yml -f $DIR/docker-compose.prod.yml"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
ARCHIVO="$TMP/datahorse_$(date +%Y-%m-%d_%H%M).sql.gz"

$DC exec -T db sh -c 'exec mysqldump -uroot -p"$MYSQL_ROOT_PASSWORD" --single-transaction --routines --triggers --events --set-gtid-purged=OFF "$MYSQL_DATABASE"' 2>/dev/null | gzip -9 > "$ARCHIVO"

# Verificar que el volcado está completo antes de subirlo
gzip -t "$ARCHIVO"
zcat "$ARCHIVO" | tail -1 | grep -q "Dump completed" || { echo "$(date '+%F %T') ERROR: volcado incompleto" >&2; exit 1; }

aws s3 cp "$ARCHIVO" "s3://$BUCKET/db/$(basename "$ARCHIVO")" --only-show-errors
echo "$(date '+%F %T') OK backup subido: db/$(basename "$ARCHIVO") ($(du -h "$ARCHIVO" | cut -f1))"
