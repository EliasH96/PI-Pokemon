const server = require('./src/app.js');
const { conn, Type } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
	let info = await axios.get('https://pokeapi.co/api/v2/type');
	info = info.data.results.map((p) => ({
		name: p.name,
	}));

	let prom = info.map((type) =>
		Type.findOrCreate({
			where: { name: type.name },
		})
	);

	Promise.all(prom).then((resp) => {
		console.log('Tipos Cargados...');
	});

	server.listen(3001, () => {
		console.log('%s listening at 3001'); // eslint-disable-line no-console
	});
});