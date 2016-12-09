#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const packageJson = require('../../package.json');

packageJson.version = fs.readFileSync(path.join(process.cwd(), '..', 'semantic-version/version')).toString();

console.log(`New version ${packageJson.version}`);

const newPackageJson = JSON.stringify(packageJson, null, 2);

console.log(`New package.json ${newPackageJson}.`);

const packageJsonPath = path.join(process.cwd(), 'package.json');

fs.writeFileSync(packageJsonPath, newPackageJson);

console.log(`Wrote to ${packageJsonPath}.`);

exec(`cp -a "." "../${process.env.OUT_DIR}"`, (err, stdout, stderr) => {
    if (err) {
        process.exit(1);
        throw err;
    }

    console.log(stdout, stderr);

    process.exit(0);
});
