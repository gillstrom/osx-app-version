import test from 'ava';
import m from './';

test('path', async t => {
	t.is(typeof await m('/Applications/Safari.app'), 'string');
});

test('name', async t => {
	t.is(typeof await m('Safari'), 'string');
});

test('bundle', async t => {
	t.is(typeof await m('com.apple.Safari'), 'string');
});
