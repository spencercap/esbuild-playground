console.log('starting test');

const { add } = require('esbuild-playground');

const sum = add(5, 6);
// const sum = pkg.add(5, 6);
console.log('sum', sum);
