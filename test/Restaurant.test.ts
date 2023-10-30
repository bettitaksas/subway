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

describe('Restaurant listAllOrders method', () => {
    const restaurant = new Restaurant('Test Restaurant');
    const order1 = new OrderItem(10);
    const order2 = new OrderItem(15);

    restaurant.addOrder(order1);
    restaurant.addOrder(order2);

    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    test('should list all orders', () => {
        restaurant.listAllOrders();
        expect(consoleLogSpy).toHaveBeenCalledWith('All Orders:');
        expect(consoleLogSpy).toHaveBeenCalledWith('Order 1: $10');
        expect(consoleLogSpy).toHaveBeenCalledWith('Order 2: $15');
    });

    // Restore console.log
    afterAll(() => {
        consoleLogSpy.mockRestore();
    });
});
