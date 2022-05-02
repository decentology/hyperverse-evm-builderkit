import { initialize, Network, Provider } from '@decentology/hyperverse';
import { Localhost } from '@decentology/hyperverse-evm';
import { FC } from 'react';
import * as SmartModule from '../../source';

export const HyperverseProvider: FC<any> = ({ children }) => {
	const hyperverse = initialize({
		blockchain: Localhost,
		network: {
			type: Network.Testnet,
			chainId: 1337,
			name: 'localhost',
			networkUrl: 'http://localhost:6006/hyperchain'
		},
		modules: [{ bundle: SmartModule, tenantId: '0x62a7aa79a52591Ccc62B71729329A80a666fA50f' }]
	});
	return <Provider initialState={hyperverse}>{children}</Provider>;
};
