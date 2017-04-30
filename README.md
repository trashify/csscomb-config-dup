<h1 align="center">csscomb-config-dup</h1>
<div align="center">
  <strong>My CSScomb config as a module</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/csscomb-config-dup">
    <img src="https://img.shields.io/npm/v/csscomb-config-dup.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/csscomb-config-dup">
  <img src="https://img.shields.io/npm/dm/csscomb-config-dup.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/csscomb-config-dup">
    <img src="https://img.shields.io/travis/tiaanduplessis/csscomb-config-dup.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fcsscomb-config-dup">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fcsscomb-config-dup.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/csscomb-config-dup">
    <img src="https://dependencyci.com/github/tiaanduplessis/csscomb-config-dup/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/csscomb-config-dup/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/csscomb-config-dup.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/csscomb-config-dup/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/csscomb-config-dup.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/csscomb-config-dup/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/csscomb-config-dup.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20csscomb-config-dup!%20https://github.com/tiaanduplessis/csscomb-config-dup%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/csscomb-config-dup.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/csscomb-config-dup/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install --save-dev csscomb-config-dup
# OR
$ yarn add --dev csscomb-config-dup
```

## Usage

Module is intended to be used as a `npm script` along with the [`csscomb`](https://github.com/csscomb/csscomb.js) module.

```js

{
	"scripts": {
		"lint:css": "csscomb --config node_modules/csscomb-config-dup/index.js"
	}
}

```

## CLI

```sh
$ npm install --global csscomb-config-dup
# OR
$ yarn global add csscomb-config-dup
```

Then run:

```sh
$ csscomb-config-dup
```

This will create a `.csscomb.json` in the current directory.

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
