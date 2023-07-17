const express = require('express');
const router = express.Router();
const {
	getAllPokemons,
	getPokemonDetails,
	createPokemon,
} = require('../controllers/pokemonControllers');

router.get('/', async (req, res) => {
	const { name } = req.query; //buscar desde la URL desps del ?
	const poke = await getAllPokemons(name);
	poke
		? res.status(200).send(poke)
		: res.status(404).send(['No existe un pokemon con el nombre: ' + name]);
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;//buscar desde la url luego de /
	let poke = await getPokemonDetails(id);
	poke
		? res.status(200).send(poke)
		: res.status(404).send('No existe un pokemon con el id: ' + id);
});

router.post('/', async (req, res) => {
	const { name, id, img, hp, attack, defense, speed, height, weight } =
		req.body; //se usa en post y se envia desde el cliente
	const result = await createPokemon(
		name, id, img, hp, attack, defense, speed, height, weight 
	);
	result === 'error'
		? res.status(400).send('El Pokemon no pudo ser creado')
		: res.status(200).send('Pokemon Creado Correctamente');
});



module.exports = router;