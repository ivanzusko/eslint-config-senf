#! /bin/sh

set -ex

cp -a . "../tmp-git-dir"

cd ../tmp-git-dir

git checkout master

git add package.json

git config --global user.email "$GIT_EMAIL"
git config --global user.name "$GIT_NAME"

git commit -m "[skip ci]: Update package.json"
git push origin master

cd ..

rm -Rf tmp-git-dir
