const axios = require('axios');
const { Pokemon, Type } = require('./db');

let getPokemonApi = async () => {
	let info = [];
	for (let i = 1; i <= 40; i++) {
		info.push(axios.get('https://pokeapi.co/api/v2/pokemon/' + i));
	}
	return Promise.all(info).then((response) => { //Promise.all devuelve una unica promesa cuando todas se resuelven
		const pokemones = response.map((info) => {
			return (poke = {
				name: info.data.name,
				id: info.data.id,
				img: info.data.sprites.other.dream_world.front_default,
				types: info.data.types.map((e) => e.type.name),
				attack: info.data.stats[1].base_stat,
			});
		});
		return pokemones; //[array de pokemons con esa data]
	});
};

let getPokemonDB = () => {
	let poke = Pokemon.findAll({ //consultar datos de una tabla SQL y devolver las filas de la tabla como un arreglo de objetos
		attributes: ['name', 'id', 'img', 'attack'],
		include: {
			model: Type,
		},
	})
		.then((r) => r)
		.then((poke) =>
			poke.map((p) => {
				return {
					id: p.id,
					name: p.name,
					img:
						p.img ||
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg',
					types: p.types.map((t) => t.name),
					attack: p.attack || 0,
				};
			})
		);

	return poke;
};

let pokeFilterByName = async (allPoke, name) => {
	let poke = allPoke.filter((poke) => {
		return poke.name.toLowerCase() === name.toLowerCase(); //nombres en minusculas
	});

	if (!poke.length) {
		let info = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
		info = info.data;
		return (poke = [
			{
				name: info.name,
				id: info.id,
				img: info.sprites.other.dream_world.front_default,
				hp: info.stats[0].base_stat,
				attack: info.stats[1].base_stat,
				defense: info.stats[2].base_stat,
				speed: info.stats[3].base_stat,
				types: info.types.map((t) => t.type.name),
				weight: info.weight,
				height: info.height,
			},
		]);
	}
	return poke;
};

let getPokemonDbByID = async (id) => {
	let info = await Pokemon.findAll({
		attributes: [
			'name',
			'id',
			'img',
			'hp',
			'attack',
			'defense',
			'speed',
			'weight',
			'height',
		],
		include: {
			model: Type,
		},
	});
	info = info.find((poke) => poke.id === id); //devuelve el primer elemento en un arreglo que cumple con una función proporcionada
	try {
		return (poke = {
			name: info.name,
			id: info.id,
			img: info.img,
			hp: info.hp,
			attack: info.attack,
			defense: info.defense,
			speed: info.speed,
			types: info.types.map((t) => t.name),
			weight: info.weight,
			height: info.height,
		});
	} catch {
		return res.status(404).send("There aren't pokemon with that data");
	}
};

let getPokemonApiByID = async (id) => {
	try {
		let info = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);
		info = info.data;
		return (poke = {
			name: info.name,
			id: info.id,
			img: info.sprites.other.dream_world.front_default,
			hp: info.stats[0].base_stat,
			attack: info.stats[1].base_stat,
			defense: info.stats[2].base_stat,
			speed: info.stats[3].base_stat,
			types: info.types.map((t) => t.type.name),
			weight: info.weight,
			height: info.height,
		});
	} catch {
		return res.status(404).send("There aren't pokemon with that data");
	}
};

module.exports = {
	getPokemonApi,
	getPokemonDB,
	pokeFilterByName,
	getPokemonApiByID,
	getPokemonDbByID,
};
