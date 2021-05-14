require('dotenv').config()

const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,  //npm pack...dotenv
    dabtabase: process.env.DB_DATABASE

});

// initialize
connection.connect();

//handle promise with Async/Await
// https://irian.to/blogs/using-promisify-to-avoid-javascript-callback-spaghetti/

connection.query = util.promisify(connection.query);

module.export = connection; 