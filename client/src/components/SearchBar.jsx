import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsByName } from '../actions';

const SearchBar = ({ setCurrentPage }) => {
	/* 	const Input = styled.input`
		padding: 10px 20px;
		border-radius: 5px;
		border: 1px solid #7e7e7e;
		background: #1e2125;
		color: #e2dddd;
		font-size: 16px;
		margin: 10px 0 10px;

		width: 300px;
		flex-basis: 30%;
		@media (max-width: 900px) {
			& {
				width: 55vw;
			}
		}
	`; */

	const Btn = styled.button`
		font-size: 16px;
		width: 150px;
		padding: 10px 5px;
		border-radius: 5px;
		border: 1px solid #7e7e7e;
		background: #1e2125;
		color: #e2dddd;
		cursor: pointer;
		&:hover {
			background-color: #c0bbbb5e;
		}
		@media (max-width: 900px) {
			& {
				width: 20vw;
			}
		}
	`;

	const dispatch = useDispatch();
	const [pokeName, setPokeName] = useState('');

	function handleInputChange(e) {
		e.preventDefault();
		setPokeName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getPokemonsByName(pokeName.trim()));
		setCurrentPage(1);
	}

	const Btn2 = styled.button`
		font-size: 16px;
		width: 150px;
		padding: 10px 5px;
		border-radius: 5px;
		border: 1px solid #7e7e7e;

		color: #e2dddd;
		cursor: not-allowed;
		background-color: #a5a5a5ef;

		@media (max-width: 900px) {
			& {
				width: 20vw;
			}
		}
	`;

	return (
		<form>
			<input
				style={{
					padding: '10px 20px',
					borderRadius: '5px',
					border: '1px solid #7e7e7e',
					background: '#1e2125',
					color: '#e2dddd',
					fontSize: '16px',
					margin: '10px 0 10px',
					width: '300px',
					flexBasis: '30%',
				}}
				type='text'
				placeholder='Search Pokémon By Name'
				onChange={(e) => handleInputChange(e)}
			></input>
			{pokeName.trim() === '' || pokeName.trim().length < 3 ? (
				<Btn2 disabled>Buscar</Btn2>
			) : (
				<Btn
					type='submit'
					onClick={(e) => {
						handleSubmit(e);
					}}
				>
					Buscar
				</Btn>
			)}
		</form>
	);
};

export default SearchBar;
