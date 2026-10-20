
import assert from "node:assert/strict";
import { Pizza, Burger, Drink, Dessert } from "./food.js";
import { Order } from "./order.js";

// Create sample food objects for testing
const pizza = new Pizza("Pizza", 100, "Large");
const burger = new Burger("Burger", 75, false);
const drink = new Drink("Drink", 25, "500ml");
const dessert = new Dessert("Cake", 40, "Cheese");

// Check that the pizza price is correct
assert.equal(pizza.getPrice(), 100);

// Check that a negative price is rejected
assert.throws(() => new Pizza("Pizza", -10, "Large"));

// Check that every food type has the correct delivery fee
assert.equal(pizza.getDeliveryFee(), 25);
assert.equal(burger.getDeliveryFee(), 20);
assert.equal(drink.getDeliveryFee(), 10);
assert.equal(dessert.getDeliveryFee(), 15);

// Create an order and add the food objects
const order = new Order();

order.addItem(pizza);
order.addItem(burger);
order.addItem(drink);
order.addItem(dessert);

// Check the food, delivery, and final totals
assert.equal(order.getFoodTotal(), 240);
assert.equal(order.getDeliveryTotal(), 70);
assert.equal(order.getFinalTotal(), 310);

// Check that an invalid item is rejected
assert.throws(() => order.addItem("Pizza"));

// This message appears if every test passes
console.log("All tests passed!");
