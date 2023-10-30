import {OrderItem} from "./OrderItem";

export class Drink extends OrderItem {
    private readonly _flavor: string;

    constructor(price: number, flavor: string) {
        super(price);
        this._flavor = flavor;
    }

    get flavor(): string {
        return this._flavor;
    }
}
