exports.GET_all_user = function(req, res, _dbConnection) {
    // initialize db connection
    dbConnection = _dbConnection;
    console.log(req.body);

    // initialize response
    let resp;

    // Call getAllUser function 
    getAllUser(function(err, allUser){
        // check server
        if(err) {
            let err = {};
            err.status = '500';
            err.message = 'Internal Server Error';
            res.send(err);
        }
        
        // check if there's fetched data
        if (allUser.length !== 0 ) {
            resp = {status:'200', allUser: allUser}
        }else {
            resp = {status:'204', message: "No Data Available"};
        }
        // send response 
        res.send(resp);
    });
}

function getAllUser(callback) {
    var sql =  'SELECT * FROM user_tbl';

	//executing sql
	dbConnection.query(sql, function(err, recordset){

		//check error on fetching
		if (err) {
			console.log(err);
			callback(err, null);
		}

		//initialize user list array
		var allUserList = [];

		//loop for each record in user table
		for (var index in recordset){
			//save each record in object
			var allUser = {
			user_id: recordset[index].user_id,
			user_fname: recordset[index].user_fname,
			user_lname: recordset[index].user_lname,
			address: recordset[index].address,
			age: recordset[index].age,
			hobbies: recordset[index].hobbies,
			};

			//push record in allUserList array
			allUserList.push(allUser);
		}
		//returns User list
		callback(null, allUserList);
	});
}