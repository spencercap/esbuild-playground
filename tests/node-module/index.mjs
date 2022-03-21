console.log('starting test');

// whole package
import pkg from 'esbuild-playground'; // imports as commonjs build, but can be used in a mjs file

const sum = pkg.add(5, 6);
// const sum = add(5, 6);
console.log('sum', sum);

// -------
// -------
// -------

// modular part of package (named export)
// either type of import work
// import { add } from './node_modules/esbuild-playground/dist/index.mjs'; // must have .js / .mjs ending + start with "./" or "../"
import { add } from 'esbuild-playground/dist/index.mjs'; // import mjs build

const sum2 = add(5, 6);
console.log('sum2', sum2);
