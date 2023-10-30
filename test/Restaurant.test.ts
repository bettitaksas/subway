import {OrderItem} from "../src/Items/OrderItem";
import {Restaurant} from "../src/Restaurant";

describe('Restaurant calculateIncome method', () => {
    const restaurant = new Restaurant('Test Restaurant');
    const order1 = new OrderItem(10);
    const order2 = new OrderItem(15);

    restaurant.addOrder(order1);
    restaurant.addOrder(order2);

    test('should calculate total income correctly', () => {
        const totalIncome = restaurant.calculateIncome();
        expect(totalIncome).toBe(25);
    });
});
