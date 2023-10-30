export class OrderItem {
    private _price: number;

    constructor(price: number) {
        this._price = price;
    }

    set price(value: number) {
        this._price = value;
    }

    get price(): number {
        return this._price;
    }
}
