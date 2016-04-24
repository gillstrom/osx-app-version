'use strict';
const execFile = require('child_process').execFile;
const fs = require('fs');
const pify = require('pify');
const appPath = require('app-path');

const getVersion = path => {
	const cmd = 'mdls';
	const args = [
		'-name',
		'kMDItemVersion',
		'-raw',
		path
	];

	return pify(execFile)(cmd, args);
};

module.exports = app => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	if (typeof app !== 'string') {
		return Promise.reject(new Error('Application is required'));
	}

	return pify(fs.stat)(app)
		.then(stats => {
			if (!stats.isDirectory()) {
				return Promise.reject(new Error('Expected an application'));
			}

			return getVersion(app);
		})
		.catch(err => {
			if (err && err.code === 'ENOENT') {
				return pify(appPath)(app).then(getVersion);
			}

			throw err;
		});
};
