var mysql = require('mysql');

database  = {
	user: 'root',
	password: 'andreijoshua',
	server: '127.0.0.1',
	database: 'test',
	port: 3306
}

/**
* Initialize database connection
*/
exports.init  =  function (connect_callback) {
	console.log("Initialising module db-mysql");
	initializeConnection(connect_callback);
};

// Function call for database connection
function  initializeConnection(connect_callback/*(connection)*/) {
	// displays your config in the terminal
	console.log(database);
	console.log('Connecting to mysql');
	console.log(' host='  +  database.server);
	console.log(' database='  +  database.database);
	console.log(' user='  +  database.user);
	console.log(' options='  +  database.options);
	console.log('');
	console.log("Initialising module connection");

	// creating connection
	var connection =  mysql.createConnection({
		user: database.user,
		password: database.password,
		host: database.server,
		database: database.database,
		port: database.port,
		options: database.options
	});
	connection.connect(function(err){
		if(err) {
			console.log('error connecting ' + err.stack)
			return;
		}
	});
	connect_callback(connection);
}