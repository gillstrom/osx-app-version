'use strict';
var execFile = require('child_process').execFile;
var fs = require('fs');
var pify = require('pify');
var Promise = require('pinkie-promise');
var appPath = require('app-path');

function getVersion(path) {
	var cmd = 'mdls';
	var args = [
		'-name',
		'kMDItemVersion',
		'-raw',
		path
	];

	return pify(execFile, Promise)(cmd, args);
}

module.exports = function (app) {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	if (typeof app !== 'string') {
		return Promise.reject(new Error('Application is required'));
	}

	return pify(fs.stat)(app)
		.then(function (stats) {
			if (!stats.isDirectory()) {
				return Promise.reject(new Error('Expected an application'));
			}

			return getVersion(app);
		})
		.catch(function (err) {
			if (err && err.code === 'ENOENT') {
				return pify(appPath, Promise)(app).then(getVersion);
			}

			return Promise.reject(err);
		});
};
