'use strict';
var test = require('ava');
var appVersion = require('./');

test('path', function (t) {
	t.plan(2);

	appVersion('/Applications/Safari.app', function (err, version) {
		t.assert(!err, err);
		t.assert(/^\d\.\d$/.test(version), version);
	});
});

test('name', function (t) {
	t.plan(2);

	appVersion('Safari', function (err, version) {
		t.assert(!err, err);
		t.assert(/^\d\.\d$/.test(version), version);
	});
});

test('bundle', function (t) {
	t.plan(2);

	appVersion('com.apple.Safari', function (err, version) {
		t.assert(!err, err);
		t.assert(/^\d\.\d$/.test(version), version);
	});
});
