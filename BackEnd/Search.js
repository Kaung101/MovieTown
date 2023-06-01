const mysql = require("mysql2");
module.exports = async (req, res) => {
    const findWord = req.params.findWord;
    console.log(findWord);

	var sql = mysql.format(`SELECT * FROM Movie WHERE title LIKE '%${findWord}%'`);
    console.log("DEBUG: /basic/search => " + sql);
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