const knex = require('./knex'); //THE CONNECTION
module.exports = {
	getAll() {
		return knex('users');
	}
}
