
import { products } from "./constants/data.js"

import product from "./model/product-schema.js";

const Defaultdata= async () => {
    try{
        await product.deleteMany({});        // delete all the documents in a collection
        await product.insertMany(products);
        console.log("Data Imported Successfully!!!");
    } catch(error){
        console.log("Error while inserting default data!!!", error.message);
    }
}

export default Defaultdata;