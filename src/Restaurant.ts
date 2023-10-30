import {OrderItem} from "./Items/OrderItem";

class Restaurant {
    private name: string;
    private orders: OrderItem[];

    constructor(name: string) {
        this.name = name;
        this.orders = [];
    }

    addOrder(order: OrderItem): void {
        this.orders.push(order);
    }

    calculateIncome(): number {
        return this.orders.reduce((total, order) => total + order.price, 0);
    }

    listAllOrders(): void {
        console.log("All Orders:");
        this.orders.forEach((order, index) => {
            console.log(`Order ${index + 1}: $${order.price}`);
        });
    }
}
