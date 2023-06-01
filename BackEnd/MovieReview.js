const mysql = require("mysql2");
module.exports = async (req, res) => {
    const movieId = req.body.movieId;
    console.log(movieId);
    const userID = req.body.userID;
    console.log(userID);
	const review = req.body.review;
    console.log(review);
	var sql = mysql.format(
		"INSERT INTO Review (review_info, created_at, updated_at, movie_id, user_id) VALUES (?, ?, ?, ?, ?)",
		[review, new Date(), new Date(), movieId, userID]
	);
    console.log("DEBUG: /review/add => " + sql);
	connection.query(sql, (err, rows) => {
		if (err) {
			console.log(err);
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		res.json({
			success: true,
			message: rows[0],
		});
	});
};