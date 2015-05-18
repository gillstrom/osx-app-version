'use strict';
var execFile = require('child_process').execFile;
var fs = require('fs');

module.exports = function (app, cb) {
	var cmd = 'mdls';
	var args = [
		'-name',
		'kMDItemVersion',
		app
	];

	try {
		if (!fs.statSync(app).isDirectory() || app.indexOf('.app') === -1) {
			cb(new Error(false));
			return;
		}
	} catch (e) {
		cb(e);
		return;
	}

	execFile(cmd, args, function (err, stdout, stderr) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, stdout.split('"')[1]);
	});
};
