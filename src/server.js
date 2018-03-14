import Hapi from 'hapi';
import Knex from './knex';
const queries = require('./queries');

const server = new Hapi.Server();

server.connection( {
	host: 'localhost',
	port: 8800,
	routes: { cors: true }
});


server.start(err => {
	if(err) {
		console.error('Error was handled!');
		console.log(err);
	}
	console.log('Server started at ' + server.info.uri);
});

//GETS -----------------------------------------------------------
server.route({
	path: '/api/users',
	method: 'GET',
	handler: (request, reply) => {
		 const getUsers = Knex('users').then((results) => {

			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No users found',
				});
			}
			reply(results);
		 }).catch((err) => {
			 reply('server error');
		});
	}
});

server.route({
	path: '/api/users/name/{name}',
	method: 'GET',
	handler: (request, reply) => {
		var name = request.params.name;
		 const getUsers = Knex('users').where({username:name}).then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No users found',
				});
			}
			reply(results);
		 }).catch((err) => {
			 reply('server error');
		});
	}
});

server.route({
	path: '/api/users/id/{id}',
	method: 'GET',
	handler: (request, reply) => {
		var userID = parseInt(request.params.id);
		 const getUsers = Knex('users').where({id:userID}).then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No users found',
				});
			}
			reply(results);
		 }).catch((err) => {
			 reply('server error');
		});
	}
});

server.route({
	path: '/api/tips',
	method: 'GET',
	handler: (request, reply) => {
		 const getTips = Knex('tips').then((results) => {

			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No tips found',
				});
			}
			reply(results);
		 }).catch((err) => {
			 reply('server error');
		});
	}
});

server.route({
	path: '/api/tips/owner/{name}',
	method: 'GET',
	handler: (request, reply) => {
		var name = request.params.name;
		 const getTips = Knex('tips').where({owner:name}).then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No tips found',
				});
			}
			reply(results);
		 }).catch((err) => {
			 reply('server error');
		});
	}
});

server.route({
	path: '/api/tips/id/{id}',
	method: 'GET',
	handler: (request, reply) => {
		var tipID = parseInt(request.params.id);
		 const getTips = Knex('tips').where({id:tipID}).then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No tips found',
				});
			}
			reply(results);
		 }).catch((err) => {
			 reply('server error');
		});
	}
});

//POSTS ----------------------------------------------------------------

server.route({
	path: '/api/users/register',
	method: 'POST',
	handler: (request, reply) => {
		const newUsername = request.payload.username;
		const newName = request.payload.name;
		const newPassword = request.payload.password;
		const newEmail = request.payload.email;
		const newPicurl = request.payload.picurl;
		const newDesc = request.payload.description;
		 const regUser = Knex('users').insert({username:newUsername, name:newName, password:newPassword, email:newEmail, picurl:newPicurl, description:newDesc}).then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No valid user',
				});
			}
			console.log('Added');
			reply(results);
		 }).catch((err) => {
			 reply('Erro no server');
		});
	}
});

server.route({
	path: '/api/tips/register',
	method: 'POST',
	handler: (request, reply) => {
		console.log('TIP POST');
		const newOwner = request.payload.owner;
		const newDesc = request.payload.description;
		const newPrice = request.payload.price;
		const newFullDescription = request.payload.full_description;
		 const regTip = Knex('tips').insert({owner:newOwner, description:newDesc, price:newPrice, full_description:newFullDescription}).then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No valid user',
				});
			}
			reply(results);
		 }).catch((err) => {
			 reply('Erro no server');
		});
	}
});

//PUT -------------------------------------------
server.route({
	path: '/api/users/update/{id}',
	method: 'PUT',
	handler: (request, reply) => {
		const userID = parseInt(request.params.id);
		const newUsername = request.payload.username;
		const newPassword = request.payload.password;
		const newEmail = request.payload.email;
		const newPicurl = request.payload.picurl;
		const newDesc = request.payload.description;
		 const regTip = Knex('users').where('id', userID).update({
			username: newUsername,
			password: newPassword,
			email: newEmail,
			picurl: newPicurl,
			description: newDesc,
		 }).then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No valid user',
				});
			}
			reply({
				updated: true,
				message: 'Updated user '  + userID});
		 }).catch((err) => {
			 reply('Erro no server');
		});
	}
});

server.route({
	path: '/api/tips/update/{id}',
	method: 'PUT',
	handler: (request, reply) => {
		const tipID = parseInt(request.params.id);
		const newOwner = request.payload.owner;
		const newDesc = request.payload.description;
		const newPrice = request.payload.price;
		const newFullDescription = request.payload.full_description;
		const regTip = Knex('tips').where('id', tipID).update({
			owner: newOwner,
			description: newDesc,
			price: newPrice,
			full_description: newFullDescription,
		 }).then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No valid user',
				});
			}
			console.log('updated tip');
			reply({
				updated: true,
				message: 'Updated tip '  + tipID});
		 }).catch((err) => {
			 reply('Erro no server');
		});
	}
});

//DELETE--------------------------------
server.route({
	path: '/api/tips/delete/{id}',
	method: 'DELETE',
	handler: (request, reply) => {
		const tipID = parseInt(request.params.id);
		 const regTip = Knex('tips').where('id', tipID).del().then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No valid user',
				});
			}
			reply({
				deleted: true,
				message: 'Deleted tip '  + tipID});
		 }).catch((err) => {
			 reply('Erro no server');
		});
	}
});

server.route({
	path: '/api/users/delete/{id}',
	method: 'DELETE',
	handler: (request, reply) => {
		const userID = parseInt(request.params.id);
		 const regTip = Knex('tips').where('id', userID).del().then((results) => {
			if(!results || results.length === 0) {
				reply({
					error: true,
					errMessage: 'No valid user',
				});
			}
			reply({
				deleted: true,
				message: 'Deleted user '  + tipID});
		 }).catch((err) => {
			 reply('Erro no server');
		});
	}
});
