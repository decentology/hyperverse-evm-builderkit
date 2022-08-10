import { useERC721 } from '../source/react';
import { useEffect, useState } from 'react';

export const GetOwnerOf = ({ ...props }: {  tokenId: string }) => {
	const erc721 = useERC721();
	const [data, setData] = useState('');

	useEffect(() => {
		if (erc721.getOwnerOf) {
			erc721.getOwnerOf(props.tokenId).then(setData);
		}
	}, [erc721.getOwnerOf]);

	const owner = () => {
		return data ? (
			<p>{JSON.stringify(data)}</p>
		) : (
			<p>{erc721.error?.message}</p>
		);
	};

	return <div className="body"> Owner of token <b>{props.tokenId}</b>: {owner()}</div>;
};
