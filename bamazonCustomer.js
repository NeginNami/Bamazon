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

var newQuantity=0;
var itemPrice=0;
var itemID="";
var itemName="";

connection.connect(function(err) {
  if (err) throw err;
  console.log("\n"+"-------------------Connecting to the database----------------------" + "\n");
  showProducts();

});


function showProducts() {
  console.log("---------------------Available Products---------------------\n");
  connection.query("SELECT item_id, product_name, price FROM product", function(err, res) {
    if (err) throw err;
    //setting up a table for showing the products
    var table = new Table({
    head: ['Product ID', 'Product Name', 'Price'],
    colWidths: [20, 20, 20]
	});
    for (var i = 0; i < res.length; i++) 
    	
    	table.push([res[i].item_id,res[i].product_name,res[i].price]);
 
    console.log(table.toString());
    console.log("");
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
    	
    	
    	connection.query("SELECT item_id, product_name, price, stock_quantity FROM product WHERE ?",
    	{
    		item_id: answer.itemID
    	},
    	function (err,res) {
    		
    		if (res[0].stock_quantity>=answer.quantity) {
    			console.log("\n------------------------Transaction has been made------------------------------");
    			updateQuantity(res[0].item_id,answer.quantity);
    		}
    		else {
    			console.log("");
    			console.log("Sorry! Insufficient quantity!");
    			connection.end();
    		}
    		
    	}

    	);
    });
}

function updateQuantity(id,quantity) {
	
	connection.query("SELECT * FROM product WHERE ?",
		{
			item_id: id
		},
		function (err,res) {
			newQuantity=res[0].stock_quantity-parseInt(quantity);
			itemPrice=res[0].price;
			itemName=res[0].product_name;
			itemId=res[0].item_id;
		
			connection.query("UPDATE product SET ? WHERE ?",
			[
				{
					stock_quantity: newQuantity
				},
				{
					item_id: id
				}
			],
			function (err,res) {
				console.log("----------------------Database updated!------------------------");
			    var table = new Table({
			    head: ['Product ID', 'Product Name', 'Price','Stock Quantity'],
			    colWidths: [20, 20, 20, 20]
				});
				table.push([itemId,itemName,itemPrice,newQuantity]);
				console.log(table.toString());
				console.log("----------------------Your Receipt------------------------");
				console.log("Total: "+itemPrice*quantity);
				connection.end();
			}
			); 

		}
	);
}



