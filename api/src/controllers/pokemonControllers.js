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
	name, id, img, hp, attack, defense, speed, height, weight, types, color
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
			types,
			color
		});
		poke.addType(types);
	} else {
		return 'error';
	}
};



module.exports = {
	getAllPokemons,
	getPokemonDetails,
	createPokemon
};