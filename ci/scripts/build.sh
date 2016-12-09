#! /bin/sh

set -ex

tar -czf "$OUT_DIR/$NAME.tar.gz" -C "$IN_DIR" .

cp -a . "../$OUT_DIR"
