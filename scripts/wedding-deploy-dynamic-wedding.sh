#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="${1:-}"
DEST_DIR="/var/www/wedding"

if [[ -z "$SRC_DIR" ]]; then
  echo "Usage: wedding-deploy-dynamic-wedding.sh <source_dir>" >&2
  exit 2
fi

if [[ ! -d "$SRC_DIR" ]]; then
  echo "Source directory not found: $SRC_DIR" >&2
  exit 2
fi

mkdir -p "$DEST_DIR"
rsync -av --delete "$SRC_DIR"/ "$DEST_DIR"/
find "$DEST_DIR" -type d -exec chmod 755 {} \;
find "$DEST_DIR" -type f -exec chmod 644 {} \;
