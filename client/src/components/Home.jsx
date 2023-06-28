import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getPokemons,
	getTypes,
	filterByCreatedOrExist,
	filterByTypes,
	orderBy,
} from '../actions';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//Components
import Cards from './Cards';
import BtnCreate from './BtnCreate';
import NavBar from './NavBar';
import Header from './Header';
import Paged from './Paged';
const Home = () => {
	const dispatch = useDispatch();
	const allPokemons = useSelector((state) => state.pokemons);
	const [order, setOrder] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [pokePerPage, SetPokePerPage] = useState(12);
	const lastPoke = currentPage * pokePerPage;
	const firstPoke = lastPoke - pokePerPage;
	const currentPokes = allPokemons.slice(firstPoke, lastPoke);
	const paged = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	const types = useSelector((state) => state.types);

	useEffect(() => {
		dispatch(getPokemons());
		dispatch(getTypes());
	}, [dispatch]);

	function handleClick(e) {
		e.preventDefault();
		dispatch(getPokemons());
	}

	function handleFilterCreated(e) {
		e.preventDefault();
		dispatch(filterByCreatedOrExist(e.target.value));
	}

	function handleFilterTypes(e) {
		e.preventDefault();
		dispatch(filterByTypes(e.target.value));
	}

	function handleSort(e) {
		e.preventDefault();
		dispatch(orderBy(e.target.value));
		setCurrentPage(1);
		setOrder(e.target.value);
	}

	const ContainerDiv = styled.div`
		background-color: #141414;
		color: #fff;
		height: 100vh;
		@media (max-width: 900px) {
			& {
				height: 100%;
			}
		}
	`;

	return (
		<ContainerDiv>
			<Header />
			<NavBar
				types={types}
				clearFilter={handleClick}
				filterCreated={handleFilterCreated}
				filterTypes={handleFilterTypes}
				sort={handleSort}
				setCurrentPage={setCurrentPage}
			/>
			<NavLink to='/pokemons'>
				<BtnCreate />
			</NavLink>
			<Cards allPokemons={currentPokes} />
			<Paged
				pokemonsLength={allPokemons.length}
				pokePerPage={pokePerPage}
				currentPage={currentPage}
				paged={paged}
			/>
		</ContainerDiv>
	);
};

export default Home;
