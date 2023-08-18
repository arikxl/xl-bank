import CryptoBanner from "@/components/CryptoBanner";
import Link from "next/link"


export const metadata = {
    title: 'Crypto World',
    description: 'Arik Alexandrov',
}


const CryptoWorld = () => {

    const id = 111;

    return (
      <>
      <main className='page-style'>
              
              <CryptoBanner />
          <section className='w-11/12 sm:w-4/5  mx-auto'>
              <br/>
              <Link href={`/crypto/${id}` }>111</Link>
              <br/>
              <Link href={`/crypto/123` }>123</Link>
              <br/>
              <Link href={`/crypto/444` }>444</Link>
              <br/>
              <Link href={`/crypto/${id}` }>111</Link>
          </section>
      </main>
      </>
  )
}

export default CryptoWorld