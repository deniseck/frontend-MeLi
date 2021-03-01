import { Author } from "./Author";
import { Item } from "./Item";

export class ItemsSearchResults {
    items: Item[];
    author: Author;
    categories: string[];
}