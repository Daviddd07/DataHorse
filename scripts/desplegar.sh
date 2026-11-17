#!/bin/bash
# Actualiza producción con lo último de la rama main (raíz + backend + frontend).
# Hace un backup de la base antes de actualizar.
set -euo pipefail
DIR="$(cd "$(dirname "$0")/.." && pwd)"; cd "$DIR"
DC="docker compose -f docker-compose.yml -f docker-compose.prod.yml"

"$DIR/scripts/backup.sh"
git checkout main
git pull --ff-only origin main
git submodule sync --recursive
git submodule update --init --recursive
$DC up -d --build
docker image prune -f >/dev/null   # borra imágenes viejas para no llenar el disco
$DC ps
