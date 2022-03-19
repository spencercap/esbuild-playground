const esbuild = require('esbuild');

esbuild
	.build({
		entryPoints: ['src/index.ts'],
		outdir: 'dist',
		bundle: true,
		sourcemap: true,
		minify: false,
		splitting: true, // only for esm
		format: 'esm', // esm works in node+browser
		target: ['esnext']
	})
	.catch(() => process.exit(1));