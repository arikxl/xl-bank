import Link from 'next/link'



export const metadata = {
  title: 'Crypto World',
  description: 'Arik Alexandrov',
}


const LoginPage = () => {
  return (

    <main className='page-style'>
      <section className='w-11/12 sm:w-4/5  mx-auto'>
        LoginPage
        <Link href={'/'} className=''>HOME</Link>
      </section>
    </main>
  )
}

export default LoginPage


