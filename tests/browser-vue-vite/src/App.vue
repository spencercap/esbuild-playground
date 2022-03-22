<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

//
// import { add } from 'esbuild-playground';
// // import pkg from 'esbuild-playground'; // works
// // import { add } from './node_modules/esbuild-playground/dist/index.mjs'; // works
// // const { add } = require('esbuild-playground');

// console.log('starting test');

// // const sum = pkg.add(5, 6);
// const sum = add(5, 6);
// console.log('sum', sum);

import { Packers } from 'esbuild-playground';
const p = new Packers();
console.log('p', p);

async function run() {
	console.log('run started');

	await p.test();

	// // test api call
	// const bricksInfo = await algonaut.getAppInfo(49584323);
	// console.log(bricksInfo);

};
run();


</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
