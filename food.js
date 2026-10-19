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

export { Food };