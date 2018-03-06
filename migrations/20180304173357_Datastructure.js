
exports.up = function(knex, Promise) {
  return knex
		.schema
		.createTable( 'users', usersTable => {
			
			//primary Key
			usersTable.increments('id');
			
			//data
			/*usersTable.string('username', 50).notNullable().unique();
			usersTable.string('password', 50).notNullable();
			usersTable.string('email', 250).notNullable();
			usersTable.string('picurl', 250).notNullable();
			usersTable.string('description', 2000).notNullable();*/
			
			//data
			usersTable.text('username');
			usersTable.text('password');
			usersTable.text('email');
			usersTable.text('picurl');
			usersTable.text('description');
			
			//timestamp
			usersTable.timestamp('created_at');
		})
		.createTable( 'tips', tipsTable => {
			
			//primary Key
			tipsTable.increments('id');
			tipsTable.text('owner');
			
			//data
			/*tipsTable.string('description', 500).notNullable();
			tipsTable.float('price', 30).notNullable();
			tipsTable.string('full_description', 5000).notNullable();*/
			tipsTable.text('description');
			tipsTable.float('price');
			tipsTable.text('full_description');
			
			//timestamp
			tipsTable.timestamp('created_at');
		})
};

exports.down = function(knex, Promise) {
  return knex
        .schema
            .dropTableIfExists( 'tips' )
            .dropTableIfExists( 'users' );
};
