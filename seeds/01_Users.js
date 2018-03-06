
exports.seed = function(knex, Promise) {
	var tableName = 'users';

    var rows = [

        // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
        {
            username: 'andre01',
            password: 'andre',
            email: 'andre@andre.com',
            picurl: 'images/profile.jpg',
			description: 'I am Andre, nice to meet you!',
        },
		{
            username: 'andre02',
            password: 'andre',
            email: 'andre@andre.com',
            picurl: 'images/profile.jpg',
			description: 'I am Andre, nice to meet you!',
        },

    ];
	
	return knex(tableName)
		.del()
		.then(function() {
			return knex.insert(rows).into(tableName);
		});
};
