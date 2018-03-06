const environment = 'development';
const config = require('../knexfile');
const environmentConfig = config[environment];
const knex = require('knex');
const connection = knex(environmentConfig);

module.exports = connection;

/*export default require('knex')( {
	client: 'mysql',
	connections: {
		host: 'localhost',
		user: 'root',
		password: 'pereira13!',
		database: 'mydb',
		charset: 'utf8'
	}
});*/