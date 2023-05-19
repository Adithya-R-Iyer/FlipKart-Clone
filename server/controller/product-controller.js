
import product from "../model/product-schema.js"

export const getProducts = async (request, response)=> {

    try{
        const products = await product.find({});
        response.staus(200).json(products);
    }catch(error) {
        response.staus(500).json({message: error.message});
    }

}
