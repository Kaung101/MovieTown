const mysql = require("mysql2");
module.exports = async (req, res) => {
    const username = req.params.username;
    console.log(username);
    var sql = mysql.format("SELECT user_id FROM User WHERE user_name = ?", [username]);
	console.log("DEBUG: /basic/id => " + sql);
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