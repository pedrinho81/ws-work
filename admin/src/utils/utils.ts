export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol'
  })
  let formatedPrice = formatter.format(price)

  return formatedPrice
}

export const moneyMask = (value: string | number) => {

  value = String(value).replace('.', '').replace(',', '').replace(/\D/g, '')

  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat('en-US', options).format(
    parseFloat(value) / 100
  )

  console.log(result === 'NaN')

  return result === 'NaN' ? '$ 0.00' : result
}

export const errorMessage = 'Ops, algo de errado ao buscar os dados, verifique o status do servidor. ' 