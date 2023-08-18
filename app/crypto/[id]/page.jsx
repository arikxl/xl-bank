'use client'

import { useEffect } from "react"
import Head from "next/head";

// let idTitle;

// export const metadata = {
//   title: `Crypto ${idTitle}`,
//   description: 'Arik Alexandrov',
// }


const CryptoCoinPage = ({ props, params }) => {
  const { id } = params;

  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta name='description' content='I hope this tutorial is helpful for you' />
      </Head> */}
    <main className='page-style'>
      <section className='w-11/12 sm:w-4/5  mx-auto'>
        <div>cryptoCoinPage { id}</div>
      </section>
    </main>
    </>
  )
  }

export default CryptoCoinPage


