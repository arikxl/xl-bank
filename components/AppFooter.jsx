'use client'

import Link from "next/link"
import Logo from "./Logo"
import SocialIcons from "./SocialIcons"


const AppFooter = () => {

  const moveUp = () => {
    window.scrollTo(0, 0, { behavior: 'smooth' })
  }

  return (
    <footer className='bg-slate-800 text-white text-center   w-full'>
      <button onClick={moveUp}>UP</button>
      <div className='w-1/2 sm:w-3/5 mx-auto ' >
        <div className='flex'>
          <div className='flex-1'>
            <h3>links:</h3>
            <h3>link1</h3>
            <h3>link2</h3>
            <h3>link3</h3>
            <h3>link4</h3>
          </div>

          <div className='flex-1'>
            <h3>about</h3>
            <h3>how it work</h3>
            <h3>contact</h3>
            <h3>term of service</h3>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <Link href="/">
          <Logo/>
          </Link>
          <small>all rights...</small>
          <SocialIcons/>
        </div>
      </div>
    </footer >
  )
}

export default AppFooter