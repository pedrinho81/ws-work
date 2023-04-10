import Head from 'next/head';
import { useQuery } from "react-query";
import { getProducts } from '@/actions/getProducts';
import { Layout } from '@/components/Layout';
import { Offers } from '@/components/Offers';

export default function Home() {
  const { data, isLoading, error } = useQuery('products', getProducts)

  return (
    <>
      <Head>
        <title>Cliente</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div >
          {isLoading ? (
            <h1 className='center-msg'>carregando...</h1>
          ) : error ? <h1 className='center-msg'>Ops, algo de errado ao buscar os dados, verifique o status do servidor</h1>
            : data &&  <Offers  products={data}/>
              }
          <hr />
        </div>
        
      </Layout>
    </>
  )
}
