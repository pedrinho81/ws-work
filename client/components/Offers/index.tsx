import * as O from './styles'
import { Product } from "@/types/Product.types";
import {
  formatPrice,
  firstProduct,
  lastProduct,
  penultimateProduct,
  valuesBetweenPenultimateAndLast
} from "@/utils/utils";
import { Caroussel } from "../Caroussel";
type OffersProps = {
  products: Product[]
}
const messageErrorOnEmptyValue = "Não há items, adicione para que seja renderizado nesta seção :)"
const Offers: React.FC<OffersProps> = ({ products }) => {
  return (
    <>
      <O.Container>
        <O.Banner>
          {firstProduct(products) ? (
            <>
              <img
                src={firstProduct(products)?.image}
                width={500}
                height={220}
                alt={`imagem do produto ${firstProduct(products)?.name}`} />
              <div>
                <h1>{formatPrice(firstProduct(products)?.price)}</h1>
                <p>{firstProduct(products)?.description}</p>
                <button>Buy</button>
              </div>
              <hr />
            </>
          )
            : <h1>{messageErrorOnEmptyValue}</h1>}

        </O.Banner>
        <hr />
        <Caroussel products={valuesBetweenPenultimateAndLast(products)} />
        <O.LastOffers className="lastOffers">
          {penultimateProduct(products) ? (
            <>
              <div className='wrapper'>
                <div >
                  <img
                    src={penultimateProduct(products)?.image}
                    width={300}
                    height={220}
                    alt={`imagem do produto ${penultimateProduct(products)?.name}`} />
                  <div className='left'>
                    <p>Only {penultimateProduct(products)?.price}</p>
                    <span>{penultimateProduct(products)?.name}</span>
                    <span>Most Healthy for u</span>
                    <p>{penultimateProduct(products)?.description}</p>
                  </div>
                </div>
                <button>BUY NOW</button>
              </div>
              <hr className='mobile' />
            </>
          )
            : <h1>{messageErrorOnEmptyValue}</h1>}

          <O.VerticalLine className='vertical-line' />
          {lastProduct(products) ? (
            <div className='wrapper'>
              <div>
                <img
                  src={lastProduct(products)?.image}
                  width={110}
                  height={220}
                  alt={`imagem do produto ${lastProduct(products)?.name}`} />
                <div className='right'>
                  <h4>{lastProduct(products)?.description}</h4>
                  <button>{lastProduct(products)?.price === 0 ? 'For free' : lastProduct(products)?.price}</button>
                  <p>{lastProduct(products)?.name}</p>
                </div>
              </div>
              <a>Click here and join us with these magical benefits</a>
            </div>
          ) : <h1>{messageErrorOnEmptyValue}</h1>}


        </O.LastOffers>
      </O.Container >
    </>
  )
}

export { Offers }