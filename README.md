# osx-app-version

> Get an .app's version in OS X


## Install

```
$ npm install --save osx-app-version
```


## Usage

```js
var appVersion = require('osx-app-version');

appVersion('Safari', function (err, version) {
	console.log(version);
	// => 8.0.6
});

appVersion('/Applications/Safari.app', function (err, version) {
	console.log(version);
	// => 8.0.6
});

appVersion('com.apple.Safari', function (err, version) {
	console.log(version);
	// => 8.0.6
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


## License

MIT © [Andreas Gillström](https://github.com/gillstrom)
