const server = require('./src/app.js');
const { conn, Type } = require('./src/db.js');
require('dotenv').config();
const { PORT } = process.env.PORT

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
	let prom = info.map((type) =>
		Type.findOrCreate({
			where: { name: type.name },
		})
	);

	Promise.all(prom).then((resp) => {
		console.log('Tipos Cargados...');
	});

	server.listen(PORT, () => {
		console.log('%s listening at ', PORT); // eslint-disable-line no-console
	});
});