import { Food } from "./food.js";

class Order {
    constructor() {
        this.items = [];
    }

    addItem(food) {
        if (!(food instanceof Food)) {
            throw new Error("Invalid food item");
        }

        this.items.push(food);
    }

    getFoodTotal() {
        let total = 0;

        // Loops through every item and adds its price
        for (const item of this.items) {
            total += item.getPrice();
        }

        return total;
    }

    getDeliveryTotal() {
        let total = 0;

        // Each item supplies its own delivery fee
        for (const item of this.items) {
            total += item.getDeliveryFee();
        }

        return total;
    }

    getFinalTotal() {
        // Adds food prices and delivery fees together
        return this.getFoodTotal() + this.getDeliveryTotal();
    }

    displayOrder() {
        console.log("\nFOOD DELIVERY ORDER");
        console.log("------------------------------");

        // Displays each food item and its delivery fee
        for (const item of this.items) {
            console.log(
                item.name + "(" + item.getType() + ") - R" +
                item.getPrice() + " | Delivery: R" + item.getDeliveryFee()
            );
        }

        // Displays the calculated totals
        console.log("------------------------------");
        console.log("Food total: R" +  this.getFoodTotal());
        console.log("Delivery total: R" + this.getDeliveryTotal());
        console.log("Final total: R" + this.getFinalTotal());
    }
}
// Make Order available to index.js and test.js 
export { Order };