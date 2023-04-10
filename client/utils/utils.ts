import { Product } from "@/types/Product.types"

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol'
  })
  let formatedPrice = formatter.format(price)
  return formatedPrice
}
export const valuesBetweenPenultimateAndLast = (products:Product[]) =>  {
  if (products.length <= 2) {
    // Se o array tiver 2 elementos ou menos, não há valores entre o primeiro e o penúltimo
    return [];
  }

  // Retorna o array, excluindo o primeiro e o último elemento
  return products.slice(1, -2);
}
export const firstProduct = (products: Product[]) => {
  return products[0]
}
export const penultimateProduct = (products: Product[]) => {
  return products[products.length -2]
}
export const lastProduct = (products: Product[]) => {
  return products[products.length -1]
}