import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='bg-blue-800 text-white mt-[3rem]  pt-12'>
      LoginPage
      <br />
      <Link href={'/'}  className=''>HOME</Link>
    </div>
  )
}

export default LoginPage