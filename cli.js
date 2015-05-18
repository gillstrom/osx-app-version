#!/usr/bin/env node
'use strict';
var meow = require('meow');
var appVersion = require('./');

var cli = meow({
	help: [
		'Usage',
		'	$ osx-app-version <path-to-app>'
	].join('\n')
});

if (!cli.input.length) {
	console.error('Application is required');
	process.exit(1);
}

appVersion(cli.input[0], function (err, version) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(version);
});
