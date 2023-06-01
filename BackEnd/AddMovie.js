const mysql = require("mysql2");
module.exports = async (req, res) => {
	const title = req.body.title;
	const img_path = req.body.movieCover;
	const des = req.body.description;
    console.log(img_path);
	var sql = mysql.format(
		"INSERT INTO Movie (title, description, movie_cover, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
		[title, des, img_path, new Date(), new Date()]
	);
    console.log("DEBUG: /basic/add => " + sql);
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