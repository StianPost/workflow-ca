import { Product, createProduct } from "./helpers/objectHelpers";

const newProduct: Product = createProduct(
    {
    id:12, 
    code:"d f g", 
    title:"This is the title of the product, it will be truncated"
});

console.log(newProduct);
