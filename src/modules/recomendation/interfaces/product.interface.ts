import {Image} from "./image.interface";

export interface Product {
    price: number;
    discount: number;
    discount_price: number;
    images: Image[];
    code: string;
    shortDescription: string;
    product_code: string;
    search_url: string;
    name: string;
    price_currency: string;
    rate: string;
}