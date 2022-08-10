import { useERC721 } from '../source/react';
import { useEvm } from '@decentology/hyperverse-evm/react';
import './style.css';

export const InitializeCollection = ({
	...props
}: {
	price: number;
	maxSupply: number;
	maxPerUser: number;
}) => {
	const { initializeCollection } = useERC721();
	const { Connect } = useEvm();

	return (
		<>
			<Connect />
			<button
				type="button"
				className={['storybook-button', `storybook-button--large`].join(' ')}
				style={{ color: 'blue' }}
				onClick={() => {
					initializeCollection!(props);
				}}
			>
				Initialize Collection
			</button>
		</>
	);
};
