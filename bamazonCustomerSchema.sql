DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE product (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM product;

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (121, "khaki_tshisrt", "clothing",25,100);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (143, "basmati_rice", "food",12.50 ,120);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (111, "dishwasher", "appliances",1000,214);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (654, "fridge", "appliances",2340,40);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (908, "skirt", "clothing", 35.99,700);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (110, "stroller", "baby",600 ,500);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (436, "car_seat", "baby", 1500,27);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (673, "laptop", "electronic", 1350, 950);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (129, "printer", "office_product",399.99 , 2000);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (901, "glue", "office_product",6.99,5000);