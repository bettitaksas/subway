"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sandwich = void 0;
const OrderItem_1 = require("./OrderItem");
class Sandwich extends OrderItem_1.OrderItem {
    constructor(ingredients) {
        const price = ingredients.reduce((total, ingredient) => total + ingredient.price, 0);
        super(price);
        this._ingredients = ingredients;
    }
    get ingredients() {
        return this._ingredients;
    }
}
exports.Sandwich = Sandwich;
