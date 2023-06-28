const initialState = {
	pokemons: [],
	allPokemons: [],
	detail: [],
	types: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_POKEMONS':
			return {
				...state,
				pokemons: action.payload,
				allPokemons: action.payload,
			};

		case 'GET_POKEMONS_BY_NAME':
			return {
				...state,
				pokemons: action.payload,
			};

		case 'GET_POKEMONS_DETAIL':
			return {
				...state,
				detail: action.payload,
			};

		case 'POST_POKEMON': {
			return { ...state };
		}

		case 'GET_TYPES':
			return {
				...state,
				types: action.payload,
			};

		case 'CREATED_OR_EXIST': {
			const allPokes = state.allPokemons;
			const filterCreated =
				action.payload === 'all'
					? allPokes
					: allPokes.filter((poke) => typeof poke.id === action.payload);
			return { ...state, pokemons: filterCreated };
		}

		case 'FILTER_BY_TYPES': {
			const allPokes = state.allPokemons;
			const filterTypes =
				action.payload === 'all'
					? allPokes
					: allPokes.filter((poke) => poke.types.includes(action.payload));
			return { ...state, pokemons: filterTypes };
		}

		case 'ORDER_BY': {
			let sortPokes;
			if (action.payload === 'alf-asc') {
				sortPokes = state.pokemons.sort(function (a, b) {
					if (a.name > b.name) {
						return 1;
					}
					if (a.name < b.name) {
						return -1;
					}
					return 0;
				});
			}
			if (action.payload === 'alf-des') {
				sortPokes = state.pokemons.sort(function (a, b) {
					if (a.name > b.name) {
						return -1;
					}
					if (a.name < b.name) {
						return 1;
					}
					return 0;
				});
			}
			if (action.payload === 'att-asc') {
				sortPokes = state.pokemons.sort(function (a, b) {
					if (a.attack > b.attack) {
						return -1;
					}
					if (a.attack < b.attack) {
						return 1;
					}
					return 0;
				});
			}
			if (action.payload === 'att-des') {
				sortPokes = state.pokemons.sort(function (a, b) {
					if (a.attack > b.attack) {
						return 1;
					}
					if (a.attack < b.attack) {
						return -1;
					}
					return 0;
				});
			}

			return { ...state, pokemons: sortPokes };
		}

		default:
			return state;
	}
}

export default rootReducer;
