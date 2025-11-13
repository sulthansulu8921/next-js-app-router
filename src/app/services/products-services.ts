import { cache } from "react";
import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
    static getProducts = async () => {
        const productResp = await fetch(this.getUrl('/products'),{
            cache:'no-store'
        }
        );

        const products = await productResp.json()
        
        return products;
    }


    static getProductById = async(id:number) => {
        var productResp = await fetch(this.getUrl(`/products/${id}`));
        var product = await productResp.json();
        return product;
    }

    static getProductsByCategory = async (category: string) => {
    const productResp = await fetch(this.getUrl(`/products/category/${category}`));
    const products = await productResp.json();
    return products;
}
}