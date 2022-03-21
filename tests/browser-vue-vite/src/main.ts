import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

//
console.log('!!!!');

import { add } from 'esbuild-playground';
import * as pkg from 'esbuild-playground'; // works
// import { add } from './node_modules/esbuild-playground/dist/index.mjs'; // works
// const { add } = require('esbuild-playground');

console.log(pkg);
console.log(add);

console.log('starting test');

// const sum = pkg.add(5, 6);
const sum = add(5, 6);
console.log('sum', sum);
