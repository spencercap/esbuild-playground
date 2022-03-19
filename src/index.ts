//

console.log('hi');

export class Packers {
	someVar = 'bewm';

	constructor() {
		console.log('constructing... Packers');
	}

	hello() {
		console.log('hello');
	}
}

export function hello(name: string): string {
	return `Hello ${name}`;
}


export const add = (a: number, b: number): number => a + b;
