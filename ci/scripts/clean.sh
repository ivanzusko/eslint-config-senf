#! /bin/sh

set -ex

rm -Rf src/ __tests__/

cp -a . "../$OUT_DIR"
