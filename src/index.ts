console.log('hi');

import algosdk from 'algosdk';

export class Packers {
	someVar = 'bewm';

	constructor() {
		console.log('constructing... Packers');
	}

	async test() {
		console.log('test api call');

		const asdk = algosdk;
		// console.log('asdk', asdk);

		const PURESTAKE_API_TOKEN = '';
		const algodClient = new asdk.Algodv2(
			{ 'X-API-Key': PURESTAKE_API_TOKEN },
			'https://testnet-algorand.api.purestake.io/ps2',
			''
		);
		// console.log('algodClient', algodClient);

		try {
			const bricksInfo = await algodClient.getApplicationByID(49584323).do();
			console.log(bricksInfo);
		} catch (e) {
			console.log('err', e);
		}
	}

	hello() {
		console.log('hello');
	}
}

export function hello(name: string): string {
	return `Hello ${name}`;
}

export const add = (a: number, b: number): number => a + b;
