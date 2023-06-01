const mysql = require("mysql2");
module.exports = async (req, res) => {
	var sql = mysql.format(
		"SELECT * FROM Movie limit 4"
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
			message: rows,
		});
	});
};