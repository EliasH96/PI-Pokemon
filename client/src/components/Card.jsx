import React from 'react';
import styled from 'styled-components';

export default function Card({ id, name, img, types }) {
	function colorPicker(mainType) {
		switch (mainType) {
			case 'grass':
				return '#109617be';
				break;
			case 'fire':
				return '#e0790add';
				break;

			case 'water':
				return '#0a79e0e1';
				break;

			case 'bug':
				return '#08410ce2';
				break;

			case 'electric':
				return '#d0c208c5';
				break;

			case 'poison':
				return '#9c40d1c7';
				break;

			case 'fairy':
				return '#d873d8e0';
				break;
			case 'normal':
				return '#b6b6b6dd';
				break;
			case 'ground':
				return '#632902c7';
				break;
			case 'ghost':
				return '#3f0e43c5';
				break;
			case 'flying':
				return '#719ab6c5';
				break;
			case 'fighting':
				return '#61041585';
				break;
			case 'rock':
				return '#2c181cc5';
				break;
			case 'steel':
				return '#3c3b3bc5';
				break;
			case 'steel':
				return '#3c3b3bc5';
				break;
			case 'psychic':
				return '#df7fe2c5';
				break;
			case 'ice':
				return '#70d7f7c5';
				break;
			case 'dragon':
				return '#3b3fffc5';
				break;
			case 'dark':
				return '#303031c5';
				break;
			case 'shadow':
				return '#0e0e37c5';
				break;
			default:
				return '#eee8e8a8';
		}
	}

	const Containercard = styled.div`
		text-transform: capitalize;
		font-family: 'Poppins';
		background-color: ${colorPicker(types[0])};
		display: flex;
		padding: 20px 10px;
		border-radius: 10px;
		justify-content: space-around;
		align-items: center;
		height: 130px;
		position: relative;
		max-width: 400px;

		&:hover {
			transform: translateY(-5px);
			transition: 0.4s ease-in-out;
		}
	`;

	const Infocard = styled.div`
		color: #fff;
		flex-basis: 60%;
		height: 120px;
	`;

	const ContainerImg = styled.div`
		flex-basis: 40%;
	`;

	const PokeImg = styled.img`
		width: 100px;
		height: 100px;
	`;

	const InfoH3 = styled.h3`
		font-size: 24px;
		text-decoration: none;
		letter-spacing: 2px;
		margin: 20px 0;
	`;

	const InfoType = styled.p`
		font-size: 14px;
		margin: 12px 5px;
		background-color: #ffffff42;
		border-radius: 15px;
		display: inline;
		padding: 5px 15px;
	`;

	const ID = styled.span`
		position: absolute;
		top: 7px;
		left: 12px;
		color: white;
		font-weight: 500;
		font-size: 16px;
		letter-spacing: 1px;
	`;

	const TypeContainer = styled.div``;

	return (
		<Containercard>
			<ID>{typeof id === 'number' ? `# ${id}` : 'CREATED'}</ID>
			<Infocard>
				<InfoH3>{name}</InfoH3>
				<TypeContainer>
					{types.map((type) => {
						type = type[0].toUpperCase() + type.slice(1);

						return <InfoType>{type}</InfoType>;
					})}
				</TypeContainer>
			</Infocard>
			<ContainerImg>
				<PokeImg src={img} alt={`Imagen de ${name}`} />
			</ContainerImg>
		</Containercard>
	);
}
