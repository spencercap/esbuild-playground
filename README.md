# esbuild-playground

learnings from: https://medium.com/geekculture/build-a-library-with-esbuild-23235712f3c

* builds + bundles .ts -> js (esm) using `esbuild`
* generates types (index.d.ts) using `tsc`
* run `npm run build`

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


---

local dev

from root dir:
```
npm link
```

in another dir: (sym links the package to the project's node_modules/ folder)
```
npm link esbuild-playground
```

unlink
```
npm unlink esbuild-playground
```