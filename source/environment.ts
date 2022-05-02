import {
	Blockchain,
	isEvm,
	BlockchainEvm,
	EvmEnvironment,
	NetworkConfig,
} from '@decentology/hyperverse';
import Factory from '../artifacts/contracts/ModuleFactory.sol/ModuleFactory.json';
import Contract from '../artifacts/contracts/Module.sol/Module.json';
import Contracts from '../contracts.json';
export const ContractABI = Contract.abi;
export const FactoryABI = Factory.abi;

const environment = Contracts as EvmEnvironment;

function getEnvironment(blockchainName: Blockchain, network: NetworkConfig) {
	if (blockchainName == null) {
		throw new Error('Blockchain is not set');
	}
	if (!isEvm(blockchainName)) {
		throw new Error('Blockchain is not EVM compatible');
	}

	const chain = environment[blockchainName as BlockchainEvm];
	if (!chain) {
		throw new Error('Blockchain is not supported');
	}
	const env = chain[network.type];
	return {
		...env,
		ContractABI,
		FactoryABI,
	};
}

export { environment, getEnvironment };

