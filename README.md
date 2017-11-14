# :moneybag: Bamazon :credit_card:

Bamazon is an Amazon-like storefront which uses MySQL database to store the information about its products. The app will take in orders from customers and deplete stock from the store's inventory. 

### Getting Started 

Clone the repo to your computer. Go to your terminal and navigate to the repo folder. Then type "npm install" then enter. This command installs all the modules you need to run the program.

## Prerequisites & Installing

Bamazon is a server side node.js application, therefore you need to run it from your terminal. Depend on which OS you are using that can be different. Here is a guide about how to run a node.js app on your computer if you are using windows: http://blog.gvm-it.eu/post/20404719601/getting-started-with-nodejs-on-windows. If you are using mac that would be easier. Just go to your terminal and navigate to the Hangman-CLI folder. Then you need to download and install all the node modules that are used in this application. So type "npm install" then hit enter. That would install the needed modules based on package.json file which is availabe on the app folder.
Also because Bamazon uses Mysql database, you need to set up a database called bamazon which has a table in it called product. In order to do that you need to have mysql intalled on your computer. If you use windows you can download Mysql workbench from here: https://dev.mysql.com/downloads/workbench/. If you are a mac user you can download the Sequel pro from here: https://www.sequelpro.com/. As soon as you get the mysql database installed, you can import the schema file that I made (https://github.com/NeginNami/Bamazon/blob/master/bamazonCustomerSchema.sql) into your mysql database to get the bamazon database ready to work. 
Here are some pictures of the database structure that you should be able to see in your mysql database after importing the schema file: 
![Image of db](https://github.com/NeginNami/Bamazon/blob/master/images/dbBig.png)

 
### Running and test

As soon as you run the program from your terminal, you would see the different products information such as  

## Deployment

This application is not deployed on the web. To run this locally you need to go to your terminal and run the program from there. For more information about how to do that, read the app description, Prerequisites & Installing and Running and test section on this file. 

## Built With

* [Node.js](https://nodejs.org)
* [Mysql](https://www.mysql.com/)
