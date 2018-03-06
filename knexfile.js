module.exports = {
	development: {
		migrations: {tableName: 'knex_migrations'},
		seeds: {tableName: './seeds' },
		client: 'mysql',
		connection: {
			host: 'localhost',
			user: 'root',
			password: 'pereira13!',
			database: 'mydb',
			charset: 'utf8',
		}
	}
};