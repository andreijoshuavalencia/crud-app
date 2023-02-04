exports.DELETE_user = function (req, res, _dbConnection, next) {
  deleteUser(req, res, _dbConnection, next);
};

function deleteUser(req, res, _dbConnection, next) {
  console.log(req.params);
  const id = req.params.userId;
  const query = "DELETE FROM user_tbl WHERE user_id = ? ";

  _dbConnection.query(query, [id], (err, data) => {
    console.log(query);
    if (err) return res.json(err);
    return res.json("Book has been deleted!");
  });
}
