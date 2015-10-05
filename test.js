import test from 'ava';
import appVersion from './';

test('path', async t => {
	t.is(typeof await appVersion('/Applications/Safari.app'), 'string');
});

test('name', async t => {
	t.is(typeof await appVersion('Safari'), 'string');
});

test('bundle', async t => {
	t.is(typeof await appVersion('com.apple.Safari'), 'string');
});
