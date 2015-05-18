# osx-appversion

> Get an .app's version in OS X


## Install

```
$ npm install --save osx-appversion
```


## Usage

```js
var appVersion = require('osx-appversion');

appVersion('Finder.app', function (err, version) {
	console.log(version);
	// => 1.0.2
});
```


## CLI

```
$ npm install --global osx-appversion
```

```
$ osx-appversion --help

  Usage
    $ osx-app-version <path-to-app>
```


## License

MIT © [Andreas Gillström](https://github.com/gillstrom)
