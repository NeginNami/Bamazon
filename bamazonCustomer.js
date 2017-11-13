var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "ali123",
  database: "bamazon"
});

var flag=false;

connection.connect(function(err) {
  if (err) throw err;
  console.log("\n"+"-------------------Connecting to the database----------------------" + "\n");
  showProducts();

});




function showProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT item_id, product_name, price FROM product", function(err, res) {
    if (err) throw err;
    //setting up a table for showing the products
    var table = new Table({
    head: ['Product ID', 'Product Name', 'Price'],
    colWidths: [20, 20, 20]
	});
    for (var i = 0; i < res.length; i++) {
    	//console.log("item_id: "+res[i].item_id)
    	table.push([res[i].item_id,res[i].product_name,res[i].price]);
    	//console.log(res[i].item_id+res[i].product_name+res[i].price);
    }
    console.log(table.toString());
    console.log("");
    flag=true;

    //console.log(res);
    connection.end();
    buyProducts();
  });
 
}

function buyProducts() {
  inquirer
    .prompt([
      {
        name: "itemID",
        type: "input",
        message: "What is the item ID you would like to purchase?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units would you like to buy of this product?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    
    ])
    .then(function(answer) {

      console.log(answer);
    });
}
