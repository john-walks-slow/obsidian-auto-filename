const fs = require("fs");

fs.copyFile("main.js", "./release/main.js", (err) => {
	if (err) throw err;
	console.log("main.js updated successfully!");
});

fs.copyFile(
	"manifest.json",
	"./release/manifest.json",
	(err) => {
		if (err) throw err;
		console.log("manifest.json updated successfully!");
	}
);
