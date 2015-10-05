import test from 'ava';
import appVersion from './';

test('path', t => {
	t.plan(2);

	appVersion('/Applications/Safari.app', (err, version) => {
		t.assert(!err, err);
		t.assert(/^\d\.\d$/.test(version), version);
	});
});

test('name', t => {
	t.plan(2);

	appVersion('Safari', (err, version) => {
		t.assert(!err, err);
		t.assert(/^\d\.\d$/.test(version), version);
	});
});

test('bundle', t => {
	t.plan(2);

	appVersion('com.apple.Safari', (err, version) => {
		t.assert(!err, err);
		t.assert(/^\d\.\d$/.test(version), version);
	});
});
