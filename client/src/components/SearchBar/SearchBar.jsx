import React from 'react';
import style from './SearchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsByName } from '../../Redux/actions';

const SearchBar = () => {

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
		setPokeName('');
	}


	return (
		<div className={style.search} >
			<form onSubmit={e => { handleSubmit(e) }}>
				<input type="text" placeholder="Buscar..." onChange={e => { handleInputChange(e) }} value={name} className={style.input} />
				<button type="submit" className={style.btn}>Buscar</button>
			</form>
		</div>
	);
};

export default SearchBar;
