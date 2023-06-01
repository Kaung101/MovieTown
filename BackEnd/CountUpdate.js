const mysql = require("mysql2");
module.exports = async (req, res) => {
    const movieId = req.params.movieId;
    console.log(movieId);
    const count = req.params.count;
    console.log(count);
	var sql = mysql.format(
		"UPDATE Movie SET view = ? WHERE movie_id = ?", [count, movieId] );
    console.log(sql);
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