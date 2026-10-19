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
}

export { Order };