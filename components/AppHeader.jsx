'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import SideBar from "./SideBar"
import Logo from "./Logo"
import { headerNavLinks } from "@/data/data"
import BtnPrm from "./btns/btnLogin/BtnLogin"
import HeaderUserStats from "./HeaderUserStats"
import BtnLogin from "./btns/btnLogin/BtnLogin"





const AppHeader = ({ showHeader }) => {

  const [isSideBarShow, setIsSideBarShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [section, setSection] = useState(0);

  const[user] = useState(true)

  useEffect(() => {

    const changeNav = () => {
      if (window.scrollY > 100) setIsScroll(true);
      else setIsScroll(false)
    }
    window.addEventListener('scroll', changeNav);
  }, [isScroll, showHeader]);


  useEffect(() => {

    const checkScreenHeight = () => {
      // 563
      if (window.scrollY + 100 < window.innerHeight) {
        setSection(0);
      } else {
        setSection(Math.round(window.scrollY / window.innerHeight + (100 * section)))
      }
    }
    window.addEventListener('scroll', checkScreenHeight);

  }, [])






  return (
    <>
      <header className={` flex flex-col    h-12   sticky  top-0 z-50
            
    `}>
        <div className={`flex font-bold items-center py-2 ease-out transform duration-500
        ${isScroll || showHeader ? ' bg-slate-900 text-cyan-400' : 'text-white bg-transparent'}
  
        `}>

          {isSideBarShow && (<SideBar setIsSideBarShow={setIsSideBarShow} isSideBarShow={isSideBarShow} />)}
          <nav className='flex md:w-4/5 w-11/12 justify-between items-center mx-auto text-lg'>
            <Link href='/'>
              <Logo />
            </Link>
            <ul className='hidden sm:flex h-full text-center items-center justify-between w-3/5'>
              {headerNavLinks.map((link, index) => (
                <Link href={link.linkTo} key={link.id}
                  className={`nav-link ${section === index + 1 ? 'border-b-2' : ''} `}>
                  <li>{link.title}</li>
                </Link>
              ))}
            </ul>
            <Link href='/login'>
              {/* <button className='hidden sm:block'> */}
              <BtnLogin text='Login'/>
              {/* </button> */}
            </Link>
            <button className='sm:hidden' onClick={() => setIsSideBarShow(true)}>
              X
            </button>

          </nav >
        </div>
        {user && (<HeaderUserStats showHeader={showHeader} isScroll={isScroll} />)}
     

      </header>

    </>
  )
}

export default AppHeader