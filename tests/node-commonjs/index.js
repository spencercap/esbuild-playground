console.log('starting test');

const { add, Packers } = require('esbuild-playground');

const sum = add(5, 6);
// const sum = pkg.add(5, 6);
console.log('sum', sum);

const p = new Packers();
console.log('p', p);

async function run() {
	console.log('run started');

	await p.test();
};
run();

