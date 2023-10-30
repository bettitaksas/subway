import {OrderItem} from "./OrderItem";
import {IngredientItem} from "./Ingredient";

export class Sandwich extends OrderItem {
    private readonly _ingredients: IngredientItem[];

    constructor(ingredients: IngredientItem[]) {
        const price = ingredients.reduce((total, ingredient) => total + ingredient.price, 0);
        super(price);
        this._ingredients = ingredients;
    }

    get ingredients(): IngredientItem[] {
        return this._ingredients;
    }
}
