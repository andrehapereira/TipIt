
exports.up = function(knex, Promise) {
  return knex
		.schema
		.createTable( 'users', usersTable => {

			//primary Key
			usersTable.increments('id');

			//data
			usersTable.text('username');
      usersTable.text('name');
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
