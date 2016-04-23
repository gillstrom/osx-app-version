#!/usr/bin/env node
'use strict';
const meow = require('meow');
const appVersion = require('./');

const cli = meow(`
	Example
		$ osx-app-version Safari
		$ osx-app-version /Applications/Safari.app
		$ osx-app-version com.apple.Safari
`);

if (cli.input.length === 0) {
	console.error('Application is required');
	process.exit(1);
}

appVersion(cli.input[0]).then(console.log);
