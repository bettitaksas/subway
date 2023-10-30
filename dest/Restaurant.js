"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Restaurant {
    constructor(name) {
        this.name = name;
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
    }
    calculateIncome() {
        return this.orders.reduce((total, order) => total + order.price, 0);
    }
    listAllOrders() {
        console.log("All Orders:");
        this.orders.forEach((order, index) => {
            console.log(`Order ${index + 1}: $${order.price}`);
        });
    }
}
