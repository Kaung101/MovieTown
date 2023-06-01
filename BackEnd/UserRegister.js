const mysql = require("mysql2");
const bcrypt = require('bcrypt');
module.exports = async (req, res) => {
	const username = req.body.username;
	const password = req.body.pwd;
	const email = req.body.email;
	const ph_no = req.body.phNo;
	const salt1 = await bcrypt.genSalt(10);
	console.log("Salt #1: ", salt1);
	const hash1 = await bcrypt.hash(password, salt1);
	console.log("Hash #1: ", hash1);

	var sql = mysql.format(
		"INSERT INTO User (user_name, ph_no, email, password, hash_password, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?,?)",
		[username, ph_no, email, password, hash1, new Date(), new Date()]
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

		res.json({
			success: true,
			message: rows[0],
		});
	});
};