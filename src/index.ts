console.log('hi');

import algosdk from 'algosdk';
// import * as CryptoJS from 'crypto-js';

export class Packers {
	someVar = 'bewm';

	// asdk;


	constructor() {
		console.log('constructing... Packers');
	}

	async test() {
		console.log('test api call');

		const asdk = algosdk;
		console.log('asdk', asdk);

		const PURESTAKE_API_TOKEN = '';

		const algodClient = new asdk.Algodv2(
			{ 'X-API-Key': PURESTAKE_API_TOKEN },
			'https://testnet-algorand.api.purestake.io/ps2',
			''
		);
		console.log('algodClient', algodClient);

		// 	BASE_SERVER: 'https://testnet-algorand.api.purestake.io/ps2',
		// 	INDEX_SERVER: 'https://testnet-algorand.api.purestake.io/idx2',
		// 	LEDGER: 'TestNet',
		// 	PORT: '',
		// 	API_TOKEN: { 'X-API-Key':  }
		// }

		// this.test(algodClient);

		// test api call

		// const bricksInfo = await algonaut.getAppInfo(49584323);

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
// const p = new Packers(); // quick test

export function hello(name: string): string {
	return `Hello ${name}`;
}


export const add = (a: number, b: number): number => a + b;
