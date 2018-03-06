
exports.seed = function(knex, Promise) {
  var tableName = 'tips';

    var rows = [

        // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
        {
			owner: 'andre01',
			description: 'Places to passby',
			price: '10',
			full_description: 'Sé, Serra do Cume'
        },
		{
			owner: 'andre02',
			description: 'Places to eat',
			price: '10',
			full_description: 'Pescador, R3'
        },

    ];
	
	return knex(tableName)
		.del()
		.then(function() {
			return knex.insert(rows).into(tableName);
		});
};
