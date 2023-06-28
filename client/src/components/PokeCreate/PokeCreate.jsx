import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon, getTypes } from '../../actions';

import { NavLink, useHistory } from 'react-router-dom';

import styles from './createPoke.module.css';

const PokeCreate = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const types = useSelector((state) => state.types);
	const pokemons = useSelector((state) => state.allPokemons);
	const [input, setInput] = useState({
		name: '',
		hp: 1,
		attack: 1,
		defense: 1,
		speed: 1,
		weight: 1,
		height: 1,
		types: [],
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/360.svg',
	});

	function handleChange(e) {
		e.preventDefault();
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}

	function handleCheck(e) {
		if (e.target.checked) {
			setInput({
				...input,
				types: [...input.types, parseInt(e.target.value)],
			});
		}
		if (!e.target.checked) {
			setInput({
				...input,
				types: input.types.filter((type) => type !== parseInt(e.target.value)),
			});
		}
	}

	function handleSubmit(e) {
		dispatch(postPokemon(input));
		alert('Pokémon Created');
		setInput({
			name: '',
			hp: 0,
			attack: 0,
			defense: 0,
			speed: 0,
			weight: 0,
			height: 0,
			types: [],
			img: '',
		});
		history.push('/home');
	}

	function handleChangeName(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setError(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
		if (
			pokemons.find(
				(poke) =>
					poke.name.toLowerCase() === e.target.value.toLowerCase().trim()
			)
		) {
			setError({
				...input,
				[e.target.name]: 'Pokémon duplicated',
			});
		}
	}
	const [error, setError] = useState({});

	function validate(input) {
		let errors = {};
		if (input.name === '') {
			errors.name = "The Pokémon's name is required";
		} else if (input.name.trim() < 4) {
			errors.name = '4';
		}

		return errors;
	}

	useEffect(() => {
		dispatch(getTypes());
	}, []);

	return (
		<div className={styles.container}>
			{error.name ? (
				<div className={styles.containerError}>
					<p className={styles.errTitle}>ERRORS</p>
					<ul class={styles.UlistErr}>
						<li class={styles.listErr}>{error.name}</li>
					</ul>
				</div>
			) : null}
			<NavLink to='/home' className={styles.svgBtn}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					class='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
					/>
				</svg>
			</NavLink>
			<div className={styles.containerForm}>
				<h1 className={styles.title}>Create Pokémon</h1>
				<form onSubmit={(e) => handleSubmit(e)}>
					{error.name ? (
						<input
							className={styles.inputFormError}
							type='text'
							name='name'
							placeholder='Name'
							onChange={(e) => handleChangeName(e)}
						></input>
					) : (
						<input
							className={styles.inputForm}
							type='text'
							name='name'
							placeholder='Name'
							onChange={(e) => handleChangeName(e)}
						></input>
					)}

					<input
						className={styles.inputForm}
						type='number'
						min='1'
						name='hp'
						placeholder='HP'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='1'
						name='attack'
						placeholder='Attack'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='1'
						name='defense'
						placeholder='Defense'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='1'
						name='speed'
						placeholder='Speed'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='1'
						name='weight'
						placeholder='Weight'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='1'
						name='height'
						placeholder='Height'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='text'
						name='img'
						placeholder='URL img'
						onChange={(e) => handleChange(e)}
					></input>
					<div className={styles.containerTypes}>
						{types.map((type) => {
							return (
								<div>
									<label className={styles.lbl}>
										<input
											className={styles.check}
											onChange={(e) => handleCheck(e)}
											type='checkbox'
											name='types'
											value={type.id}
										/>
										{type.name}
									</label>
								</div>
							);
						})}
					</div>
					{error.name || input.name.trim().length < 4 ? (
						<button className={styles.btnDisabled} disabled>
							Create
						</button>
					) : (
						<button className={styles.btn}>Create</button>
					)}
				</form>
			</div>
		</div>
	);
};

export default PokeCreate;
