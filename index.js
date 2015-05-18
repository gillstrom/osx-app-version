'use strict';
var execFile = require('child_process').execFile;
var fs = require('fs');
var path = require('path');

module.exports = function (app, cb) {
	if (typeof app !== 'string') {
		throw new Error('Application is required');
	}

	var cmd = 'mdls';
	var args = [
		'-name',
		'kMDItemVersion',
		app
	];

	if (path.extname(app) !== '.app') {
		throw new Error('Expected an application');
	}

	fs.stat(app, function (err, stats) {
		if (err) {
			cb(err);
			return;
		}

		if (!stats.isDirectory()) {
			throw new Error('Expected an application');
		}

		execFile(cmd, args, function (err, stdout) {
			if (err) {
				cb(err);
				return;
			}

			cb(null, stdout.split('"')[1]);
		});
	});
};
