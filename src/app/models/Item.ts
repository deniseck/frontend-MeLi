import { Price } from "./Price";

export class Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    city: string;
}