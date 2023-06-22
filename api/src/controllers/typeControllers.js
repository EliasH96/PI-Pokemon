let { Type } = require('../db');

let getTypesDB = async () => {
	let types = await Type.findAll({
		attributes: ['id', 'name'],
	});
	types = types.map((t) => {
		return { id: t.id, name: t.name };
	});
	return types;
};

module.exports = { getTypesDB };