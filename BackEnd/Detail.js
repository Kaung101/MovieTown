const mysql = require("mysql2");
module.exports = async (req, res) => {
    const movieId = req.params.movieId;
    console.log(movieId);

	var sql = mysql.format(
		"SELECT * FROM Movie WHERE movie_id = ?",
        [movieId]
	);

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
			message: rows[0],
		});
	});
};