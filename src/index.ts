console.log('hi');

import algosdk from 'algosdk';

//
// FYI walletconnect 2.0 requires global = window hack in script tag
const wcProjectId = ``;
import WalletConnectClient from "@walletconnect/client";
import { CLIENT_EVENTS } from "@walletconnect/client";
import { PairingTypes } from "@walletconnect/types";
// console.log('WalletConnectClient', WalletConnectClient);

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

	async initWc() {
		console.log('initWc');

		// 1
		const client = await WalletConnectClient.init({
			projectId: wcProjectId,
			relayUrl: "wss://relay.walletconnect.com",
			metadata: {
				name: "Example Dapp",
				description: "Example Dapp",
				url: "#",
				icons: ["https://walletconnect.com/walletconnect-logo.png"],
			},
		});
		console.log('client', client);

		// 2
		client.on(
			CLIENT_EVENTS.pairing.proposal,
			async (proposal: PairingTypes.Proposal) => {
				// uri should be shared with the Wallet either through QR Code scanning or mobile deep linking
				const { uri } = proposal.signal.params;
			}
		);

		// 3
		const session = await client.connect({
			permissions: {
				blockchain: {
					chains: ["eip155:1"], // need algo chain id etc...
				},
				jsonrpc: {
					methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData"],
				},
			},
		});
		console.log('session', session);

		// 4
		// const result = await client.request({
		// 	topic: session.topic,
		// 	chainId: "eip155:1",
		// 	request: {
		// 		id: 1,
		// 		jsonrpc: "2.0",
		// 		method: "personal_sign",
		// 		params: [
		// 			"0x1d85568eEAbad713fBB5293B45ea066e552A90De",
		// 			"0x7468697320697320612074657374206d65737361676520746f206265207369676e6564",
		// 		],
		// 	} as any,
		// });
		// console.log('result', result);

	}

	hello() {
		console.log('hello');
	}
}

export function hello(name: string): string {
	return `Hello ${name}`;
}

export const add = (a: number, b: number): number => a + b;
