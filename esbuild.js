// import { build } from 'esbuild';
const { build } = require('esbuild');

build({
	entryPoints: ['src/index.ts'],
	outdir: 'dist',
	bundle: true,
	sourcemap: true,
	minify: false,
	splitting: true, // only for esm
	format: 'esm', // esm works in node+browser
	outExtension: { '.js': '.mjs' }, // .js -> .mjs (change package.json main + modules entry IF doing this)
	target: ['esnext']
})
	.catch(() => process.exit(1));