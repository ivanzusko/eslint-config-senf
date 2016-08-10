<p align="center">
  <a href="https://hellofresh.com">
    <img width="120" src="https://www.hellofresh.com/images/hellofresh-logo.svg?v=3">
  </a>
</p>

# ESLint config Senf

[ESLint](eslint.org) configuration for the Senf applications.

## How to install

To install the package:

```bash
$ npm install --save-dev eslint-config-senf@git+ssh://{accessToken}:x-oauth-basic@github.com/hellofresh/eslint-config-senf
```

Then in your `.eslinrc`:

```js
{
  "extends": "senf"
}
```

And in your `package.json`:

```js
{
  "scripts": {
    "eslint": "eslint src/",
    "lint": "npm run eslint"
  }
}
```
