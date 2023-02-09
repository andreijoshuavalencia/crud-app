const res = require("express/lib/response");

exports.PUT_user = function (req, res, _dbConnection, next) {
    // call update user
    updateUser(req, res, _dbConnection, next);
}

function updateUser (req, res, _dbConnection, next) {
    // passes req.body so we can only type body in the future
    let body = req.body;

    // initialize sqlData array
    let sqlData = [];

    // count request body
    // we need to count the body so we will know if there will be a next field to be added in the query.
    let count = 0;
    for(let prop in body) {
        if (body.hasOwnProperty(prop)){
            count++;
        }
    }

    // make the update sql query.
    let sqlQuery = `UPDATE user_tbl SET `
    if(body.user_fname) {
        sqlQuery += ` user_fname = ? `;
        sqlData.push(body.user_fname);
        // console.log(sqlData);
        if(count > 1) {
            // check if the body object we count is above 1 then we will add a comma.
            sqlQuery += `,`
            count--;
        }
    }

    if (body.user_lname) {
        sqlQuery +=  ` user_lname = ? `
        sqlData.push(body.user_lname)
    
        //check if the body object we count is above 1 then we will add a comma
        if(count >  1){
            sqlQuery +=  `,`
            count--;
        }
    }

    if (body.address) {
        sqlQuery +=  ` address = ? `
        sqlData.push(body.address)
    
        //check if the body object we count is above 1 then we will add a comma
        if(count >  1){
            sqlQuery +=  `,`
            count--;
        }
    }

    if (body.age) {
        sqlQuery +=  ` age = ? `
        sqlData.push(body.age)
    
        //check if the body object we count is above 1 then we will add a comma
        if(count >  1){
            sqlQuery +=  `,`
            count--;
        }
    }

    if (body.hobbies) {
        sqlQuery +=  ` hobbies = ? `
        sqlData.push(body.hobbies)
    
        //check if the body object we count is above 1 then we will add a comma
        // if(count >  1){
        //     sqlQuery +=  `,`
        //     count--;
        // }
    }

    // add WHERE wuery in which id we will be updating
    // req.params.userId will be fetching the userId
    sqlData.push(req.params.userId);
    sqlQuery += ` WHERE user_id = ? ` ;  
    console.log("id is " + req.params.userId); 

    _dbConnection.query(sqlQuery, sqlData, function (err, result){
        console.log(sqlQuery)
        if(err) {
            // let err = {}
            console.log('error : updateUser Err : ' + err);
            err.status = '500'
            err.message = 'Internal Server Error'
            res.send(err);
        }else {
            sqlQuery = 'SELECT * FROM user_tbl WHERE user_id = ' + req.params.userId;
            console.log(sqlQuery);
            _dbConnection.query(sqlQuery, function(err, result){
                let resp = {status: '200', user:result}
                res.send(resp);
            });
        }
    });
}

