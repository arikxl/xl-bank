import CryptoBanner from "@/components/CryptoBanner";
import CryptoCoinsTable from "@/components/CryptoCoinsTable";
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
                    <CryptoCoinsTable />
                </section>
            </main>
        </>
    )
}

export default CryptoWorld