"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
const OrderItem_1 = require("./OrderItem");
class Drink extends OrderItem_1.OrderItem {
    constructor(price, flavor) {
        super(price);
        this._flavor = flavor;
    }
    get flavor() {
        return this._flavor;
    }
}
exports.Drink = Drink;
