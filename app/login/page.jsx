import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='bg-slate-800 text-white'>
      LoginPage
      <br />
      <Link href={'/'}  className=''>HOME</Link>
    </div>
  )
}

export default LoginPage