'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import SideBar from "./SideBar"

const AppHeader = () => {

  const [isSideBarShow, setIsSideBarShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [section, setSection] = useState(0)
  
  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY > 100) setIsScroll(true);
      else setIsScroll(false)
    }
    window.addEventListener('scroll', changeNav);
  }, [isScroll])
  
  useEffect(() => {
    const checkScreenHeight=() => {
      // 563
      if (window.scrollY+100 < window.innerHeight) { 
        setSection(0);
      } else  {
        setSection(Math.round(window.scrollY / window.innerHeight + (100 * section)))
      }
    }
    window.addEventListener('scroll', checkScreenHeight);
    
  },[])

  return (
    <header className={` flex sticky  top-0 z-10 h-24 items-center font-bold ease-out transform duration-500
            ${isScroll ? ' bg-slate-900 text-cyan-400' : 'text-white bg-transparent'}
    `}>
      {isSideBarShow && (<SideBar setIsSideBarShow={setIsSideBarShow} isSideBarShow={isSideBarShow} />)}
      <nav className='flex w-4/5 justify-between items-center mx-auto h-full
                    text-lg		'>
        <Link href='/'>
          <h1>xlBank</h1>
        </Link>
        <ul className='hidden sm:flex gap-4 h-full items-center justify-between'>

          <Link href='#crypto' className={`nav-link ${section===1 ? 'border-b-2' : ''} `}>
            <li>crypto</li>
          </Link>
          <Link href='#credit' className={`nav-link ${section === 2 ? 'border-b-2' : ''}`}>
            <li>credit</li>
          </Link>

          <Link href='#loan' className={`nav-link ${section === 3 ? 'border-b-2' : ''}`} >
            <li>loan</li>
          </Link>
          <Link href='#about' className={`nav-link ${section === 4 ? 'border-b-2' : ''}`} >
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