class Food {
    #price;

    constructor(name, price) {
        if (price < 0) {
            throw new Error("Price cannot be negative");
        }

        this.name = name;
        this.#price = price;
    }

    getPrice() {
        return this.#price;
    }
}
class Pizza extends Food {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    getType() {
        return "Pizza";
    }

    getDeliveryFee() {
        return 25;
    }
}

export { Food };