'use client'

import { useEffect } from "react"



const CryptoCoinPage = ({  params }) => {
  const { id } = params;


  return (
    <>
      <main className='page-style'>
        <section className='w-11/12 sm:w-4/5  mx-auto'>
          <div>cryptoCoinPage {id}</div>
        </section>
      </main>
    </>
  )
}

export default CryptoCoinPage


