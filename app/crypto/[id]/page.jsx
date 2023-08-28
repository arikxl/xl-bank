'use client'

import CoinLeft from "@/components/CoinLeft";
import CoinRight from "@/components/CoinRight";
import { SingleCoin } from "@/lib/api/apiCoins";
import axios from "axios";
import { useEffect, useState } from "react"



const CryptoCoinPage = ({ params }) => {
  const { id } = params;
  const [coin, setCoin] = useState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data)
  }

  useEffect(() => {

    fetchCoin()
  }, [])


  return (
    <>
      {/* <div>cryptoCoinPage {id}</div> */}
      <main className='page-style '>
        <section className='w-11/12 md:w-4/5  mx-auto py-6 flex flex-col md:flex-row items-center '>
          <CoinLeft coin={coin} />
          <CoinRight coin={coin} />
        </section>
      </main>
    </>
  )
}

export default CryptoCoinPage


