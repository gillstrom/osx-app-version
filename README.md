# osx-appversion

> Get an .app's version in OS X


## Install

```
$ npm install --save osx-appversion
```


## Usage

```js
var appVersion = require('osx-appversion');

appVersion('Safari', function (err, version) {
	console.log(version);
	// => 8.0.6
});

appVersion('/Applications/Safari.app', function (err, version) {
	console.log(version);
	// => 8.0.6
});
```


## CLI

```
$ npm install --global osx-appversion
```

```
$ osx-appversion --help

  Examples
    $ osx-appversion Safari
    $ osx-app-version /Applications/Safari.app
```


## License

MIT © [Andreas Gillström](https://github.com/gillstrom)
