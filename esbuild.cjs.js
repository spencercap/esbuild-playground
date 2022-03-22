// import { build } from 'esbuild'; // for type:"module" pkgs
const { build } = require('esbuild');

build({
	entryPoints: ['src/index.ts'],
	outdir: 'dist',
	bundle: true,
	sourcemap: true,
	minify: false,
	target: ['esnext'],

	// NODE build
	platform: 'node',
	format: 'cjs', // commonJs is for node
})
	.catch(() => process.exit(1));