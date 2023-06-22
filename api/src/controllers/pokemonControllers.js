const {
	getPokemonApi,
	getPokemonDB,
	pokeFilterByName,
	getPokemonApiByID,
	getPokemonDbByID,
} = require('../handlers');

const { Pokemon } = require('../db');

const getAllPokemons = async (name) => {
	const [api, db] = await Promise.all([getPokemonApi(), getPokemonDB()]);
	const allPoke = [...db, ...api];
	if (name) {
		let prueba = await pokeFilterByName(allPoke, name);
		return prueba;
	}
	return allPoke;
};

const getPokemonDetails = async (id) => {
	let poke = null;
	if (id.length < 10) {
		poke = await getPokemonApiByID(id);
	} else {
		poke = await getPokemonDbByID(id);
	}
	return poke;
};

const createPokemon = async (
	name, id, img, hp, attack, defense, speed, height, weight, types
) => {
	if (name) {
		const poke = await Pokemon.create({
			name: name.toLowerCase(),
			id,
			hp,
			img,
			attack,
			defense,
			speed,
			height,
			weight,
			types
		});
		poke.addType(types);
	} else {
		return 'error';
	}
};

/*NO IMPLEMENTADAS*/
// const deletePokemon = async (idParams) => {
// 	let poke;
// 	try {
// 		poke = await Pokemon.destroy({
// 			where: { id: idParams },
// 		});
// 	} catch {
// 		poke = null;
// 	}

// 	return poke;
// };

// const updatePokemon = async (
// 	idParams,
// 	name,
// 	hp,
// 	attack,
// 	defense,
// 	height,
// 	weight,
// 	speed,
// 	types,
// 	img
// ) => {
// let updateProfile = {
// 	name,
// 	hp,
// 	attack,
// 	defense,
// 	height,
// 	weight,
// 	speed,
// 	types,
// 	img,
// };
// let filter = {
// 	where: {
// 		id: idParams,
// 	},
// 	include: [Type],
// };

// 	Pokemon.findOne(filter).then(function (poke) {
// 		if (poke) {
// 			return poke.update(updateProfile).then(function (result) {
// 				return result;
// 			});
// 		} else {
// 			throw new Error('no such product type id exist to update');
// 		}
// 	});
// };

module.exports = {
	getAllPokemons,
	getPokemonDetails,
	createPokemon,
	//deletePokemon,
	//updatePokemon,
};