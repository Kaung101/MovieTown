const mysql = require("mysql2");
module.exports = async (req, res) => {
    const movieId = req.params.movieId;
    console.log(movieId);

    const title = req.body.title;
    const des = req.body.description;
    const movie_url = req.body.movieCover;
	var sql = mysql.format(
		"UPDATE Movie SET title = ?, description = ?, movie_cover = ? WHERE movie_id = ?", [title, des, movie_url, movieId] );

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