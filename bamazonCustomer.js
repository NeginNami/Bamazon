var mysql = require("mysql");
var inquirer = require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "ali123",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("\n"+"-------------------Connecting to the database----------------------" + "\n");
  readProducts();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT item_id, product_name, price FROM product", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
