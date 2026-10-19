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
// Piza gets to be inherited from Food
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
// Burger inherits from Food
class Burger extends Food {
    constructor(name, price, isVegetarian) {
        super(name, price);
        this.isVegetarian = isVegetarian; // Extra property for burger
    }

    getType() {
        return "Burger";
    }

    getDeliveryFee() {
        return 20;
    }
}

// Drink inherits from Food
class Drink extends Food {
    constructor(name, price, volume) {
        super(name, price);
        this.volume = volume; // Extra property for drink
    }

    getType() {
        return "Drink";
    }

    getDeliveryFee() {
        return 10;
    }
}

// Dessert is the additional food type
class Dessert extends Food {
    constructor(name, price, flavour) {
        super(name, price);
        this.flavour = flavour; // Extra property for dessert
    }

    getType() {
        return "Dessert";
    }

    getDeliveryFee() {
        return 15;
    }
}
export { Food };