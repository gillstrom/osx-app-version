# osx-app-version [![Build Status](https://travis-ci.org/gillstrom/osx-app-version.svg?branch=master)](https://travis-ci.org/gillstrom/osx-app-version)

> Get an .app's version in OS X systems.


## Install

```
$ npm install --save osx-app-version
```


## Usage

```js
const appVersion = require('osx-app-version');

appVersion('Safari').then(version => {
	console.log(version);
	//=> '8.0'
});

appVersion('/Applications/Safari.app').then(version => {
	console.log(version);
	//=> '8.0'
});

appVersion('com.apple.Safari').then(version => {
	console.log(version);
	//=> '8.0'
});
```


## CLI

```
$ npm install --global osx-app-version
```

```
$ osx-app-version --help

  Examples
    $ osx-app-version Safari
    $ osx-app-version /Applications/Safari.app
    $ osx-app-version com.apple.Safari
```


## Related

* [osx-app](https://github.com/gillstrom/osx-app) - Get information about an app


## License

MIT © [Andreas Gillström](https://github.com/gillstrom)
