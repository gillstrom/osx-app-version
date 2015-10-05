import test from 'ava';
import appVersion from './';
const reg = /^\d\.\d$/;

test('path', async t => {
	t.is(reg.test(await appVersion('/Applications/Safari.app')), true);
});

test('name', async t => {
	t.is(reg.test(await appVersion('Safari')), true);
});

test('bundle', async t => {
	t.is(reg.test(await appVersion('com.apple.Safari')), true);
});
