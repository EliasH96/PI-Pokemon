import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loaded from './Loaded';

const Cards = ({ allPokemons }) => {
	const Containercards = styled.div`
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		padding: 10px 80px 50px;
		grid-gap: 30px 30px;
		justify-content: center;
		@media (max-width: 900px) {
			& {
				padding-bottom: 10px;
			}
		}
	`;

	return (
		<Containercards>
			{allPokemons.length ? (
				allPokemons.map((poke) => {
					return (
						<Link
							to={`/pokemons/${poke.id}`}
							style={{ textDecoration: 'none' }}
						>
							<Card
								key={poke.id}
								id={poke.id}
								name={poke.name}
								img={poke.img}
								types={poke.types}
							/>
						</Link>
					);
				})
			) : (
				<Loaded />
			)}
		</Containercards>
	);
};

export default Cards;
