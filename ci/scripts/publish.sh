#! /bin/sh

echo "$REGISTRY/:_authToken=$NPM_TOKEN" > ~/.npmrc
npm publish .
