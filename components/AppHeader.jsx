'use client'

import Link from "next/link"
import { useState } from "react"
import SideBar from "./SideBar"

const AppHeader = () => {

  const [isSideBarShow, setIsSideBarShow] = useState(false);

  return (
    <header className='bg-slate-900 text-cyan-400 h-24 items-center
                       flex sticky  top-0 z-10 '>
      {isSideBarShow && (<SideBar setIsSideBarShow={setIsSideBarShow} isSideBarShow={isSideBarShow} />)}
      <nav className='flex w-4/5 justify-between items-center mx-auto h-full
                    text-lg		'>
        <Link href='/'>
          <h1>xlBank</h1>
        </Link>
        <ul className='hidden sm:flex gap-2 h-full items-center'>
       
          <Link href='#crypto' className='nav-link'>
            <li>crypto</li>
          </Link>
          <Link href='#credit' className='nav-link'>
            <li>credit</li>
          </Link>
      
          <Link href='#loan' className='nav-link' >
            <li>loan</li>
          </Link>
          <Link href='#about' className='nav-link' >
            <li>about</li>
          </Link>
        </ul>
        <Link href='/login'>
        <button className='hidden sm:block'>login</button>
        </Link>
        <button className='sm:hidden' onClick={() => setIsSideBarShow(true)}>
          X
        </button>

      </nav >
    </header>
  )
}

export default AppHeader