import { database } from '../config';
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : database.server,
  user     : database.userName,
  password : database.password,
  database : 'db_a162ae_geochat'
});

const UserController = {
	Login: Login
}

function Login(request) {
	console.log(connection);
	let user = GetUser(request.profile.email);
	
	if (user != undefined) {
		
	}
};

let GetUser = function(email) {
	if (connection.state == 'disconnected')
		OpenConnection();
	
	let user;
	
	connection.query('SELECT * FROM user WHERE user.email = email', function (error, results, fields) {
		if (error) {
			console.log(error);
			return null;
		}
		console.log(results.length);
		user = results[0];
	});
	
	console.log(user);
	
	CloseConnection();
	
	return user;
};

let OpenConnection = function() {
	connection.connect();
}

let CloseConnection = function() {
	connection.end();
}

export default UserController;