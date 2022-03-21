# esbuild-playground

learnings from: https://medium.com/geekculture/build-a-library-with-esbuild-23235712f3c

* builds + bundles .ts -> js (esm) using `esbuild`
* generates types (index.d.ts) using `tsc`
* run `npm run build`

---

local dev

from root dir:
```
npm link
```

in another dir: (sym links the package to the project's node_modules/ folder)
```
npm link "esbuild-playground"
```

unlink
```
npm unlink "esbuild-playground"
```