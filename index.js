
import { Pizza, Burger, Drink, Dessert } from "./food.js";
import { Order } from "./order.js";

// Creating a new, empty order
const order = new Order();

// Creating objects using the different food classes
const pizza = new Pizza("Margherita Pizza", 100, "Large");
const burger = new Burger("Cheese Burger", 75, false);
const drink = new Drink("Craneberry Juice", 25, "500ml");
const dessert = new Dessert("Cheese Cake", 40, "Chocolate");

// Adding each food object to the order
order.addItem(pizza);
order.addItem(burger);
order.addItem(drink);
order.addItem(dessert);

// Displaying the order summary and final total
order.displayOrder();
