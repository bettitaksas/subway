"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
class OrderItem {
    constructor(price) {
        this._price = price;
    }
    set price(value) {
        this._price = value;
    }
    get price() {
        return this._price;
    }
}
exports.OrderItem = OrderItem;
