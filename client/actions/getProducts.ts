import { Product } from "../types/Product.types";

let baseUrl = `http://localhost:5001`;

const getProducts = async ():Promise<Product[]> => {
  try {
    const res = await (await fetch(`${baseUrl}/products`)).json()
    return res
  } catch (error) {
    throw(error)
  } 
}



export {
  getProducts,
}