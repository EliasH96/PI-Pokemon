//Express y Router
const express = require('express');
const router = express.Router();

//Importaciones de rutas
const pokeRoute = require('./pokemonRoutes');
const typeRoute = require('./typeRoutes');

//Rutas
router.use('/pokemons', pokeRoute);
router.use('/types', typeRoute);

module.exports = router;