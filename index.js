'use strict';
var execFile = require('child_process').execFile;

module.exports = function (app, cb) {
	var cmd = 'mdls';
	var args = [
		'-name',
		'kMDItemVersion',
		app
	];

	execFile(cmd, args, function (err, stdout, stderr) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, stdout.split('"')[1]);
	});
};
