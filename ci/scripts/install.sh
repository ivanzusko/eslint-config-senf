#! /bin/sh

set -ex

npm install
npm run compile

cp -a . "../$OUT_DIR"
