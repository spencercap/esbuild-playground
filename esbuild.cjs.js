// import { build } from 'esbuild'; // for type:"module" pkgs
const { build } = require('esbuild');

build({
	entryPoints: ['src/index.ts'],
	outdir: 'dist',
	bundle: true,
	sourcemap: true,
	minify: false,
	target: ['esnext'],

	// esm
	// splitting: true, // only for esm
	// format: 'esm', // esm works in node+browser
	// outExtension: { '.js': '.mjs' }, // .js -> .mjs (change package.json main + modules entry IF doing this)

	// cjs
	format: 'cjs', // commonJs is for node
})
	.catch(() => process.exit(1));