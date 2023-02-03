const res = require("express/lib/response");

exports.GET_user = function (req, res, _dbConnection) {
  dbConnection = _dbConnection;

  var resp;

  var params = {
    userId: req.params.userId,
  };

  // call getUser fn

  getUser(params, function (err, user) {
    // if the callback returns an err, the server will display error
    if (err) {
      let err = {};
      err.status = "500";
      err.message = "Internal Server Error";
      res.send(err);
    }

    // check if there's fetched data

    if (user !== null) {
      resp = { status: "200", user: user };
    } else {
      // else if empty
      resp = { status: "204", message: "No Data Available!" };
    }

    res.send(resp);
  });

  function getUser(params, callback) {
    // declare userId
    var userId = params.userId;

    // sql
    // search for user with the id that we pass

    var sql = "SELECT * FROM user_tbl WHERE user_id = " + userId;
    
    //executing sql
    dbConnection.query(sql, function (err, recordset) {
      //check error on fetching
      if (err) {
        console.log("error: getUser Error : " + err);
        callback(err, null);
      }

      var userRes = null;

      //check if there's record
      if (recordset.length !== 0) {
        //this will save the first recordset to the userRes object
        userRes = {
          user_id: recordset[0].user_id,
          user_fname: recordset[0].user_fname,
          user_lname: recordset[0].user_lname,
          user_isdel: recordset[0].user_isdel,
        };
      }

      //return userRes object
      callback(null, userRes);
    });
  };
};
