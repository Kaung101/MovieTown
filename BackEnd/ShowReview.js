const mysql = require("mysql2");
module.exports = async (req, res) => {
    const movieId = req.params.movieId;
    console.log(movieId);
    var sql = mysql.format("SELECT * FROM Review r JOIN User u ON r.user_id = u.user_id WHERE r.movie_id = ?", [movieId]);
	console.log("DEBUG: /basic/review => " + sql);
    connection.query(sql, (err, rows) => {
		if (err) {
			console.log(err);
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		return res.json({
			success: true,
			message: rows,
		});
	});
};