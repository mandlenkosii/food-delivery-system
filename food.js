class Food {
    #price;

    constructor(name, price) {
        this.name = name;
        this.#price = price;
    }

    getPrice() {
        return this.#price;
    }
}

export { Food };