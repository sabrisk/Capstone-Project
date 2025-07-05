// es6 (modules)
// import express from 'express';

const express = require("express");

const app = express();

app.get("/", (req, res) => {
	return res.json({ message: "Robert is awesome" });
});

app.get("/signup", (req, res) => {
	// get data from what the folks in the frontend send us

	// return a response
	return res.json({
		message: "Successfully logged in",
		jwt: "jljljfasljfljlkjljlkjl",
	});
});

app.listen(3001, function () {
	console.log("Running on port: http://localhost:3001");
});
