# esbuild-playground

how to build a ts/js package for node + browser.

operations:
* builds + bundles .ts -> js (esm + cjs) using `esbuild`
* generates types (index.d.ts) using `tsc`
* build all w: `npm run build`

---

## links
* FYI about types of built js libs: (esm, cjs, umd):
	https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
* tutorial on building/bundling for browser & node
	https://medium.com/geekculture/build-a-library-with-esbuild-23235712f3c
* es modules (esm) are the future
	https://jakearchibald.com/2017/es-modules-in-browsers/
* esbuild docs
	https://esbuild.github.io/
* esbuild note on node-only pkgs (like `path`. tldr, update "browser" field in package)
	https://esbuild.github.io/getting-started/#bundling-for-the-browser
* iffy method... the tsc build approach (extends different tsconfigs)
	https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html


---

local dev

from root dir:
```
npm link
```
or
```
npm run link
```

in test dirs: (sym links the package to the project's node_modules/ folder)
```
npm link esbuild-playground
```

unlink
```
npm unlink esbuild-playground
```
