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

export const addProduct = async (data: BodyInit) => {
  try {
    console.log(data)
    const response = await (await fetch(`${baseUrl}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },  
      body: data
    })).json()
    console.log(response)
    return response
  } catch (err) {
    alert('Error')
    return false;
  }
};  
const deleteProduct = async (id:number) => {
  try {      
    const response = await (await fetch(`${baseUrl}/products/${id}`, {
      method: 'DELETE',
    })).json()
    console.log(response)
    return response
  } catch (error) {
    throw(error)
  }

}
const editProduct = async (id:number, data: BodyInit) => {
  try {      
    const response = await (await fetch(`${baseUrl}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },  
      body: data
    })).json()
    console.log(response)
    return response
  } catch (error) {
    throw(error)
  }

}

export const api = {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct
}