'use client'

import Link from 'next/link'

const SideBar = ({ setIsSideBarShow, isSideBarShow }) => {
    return (
        <aside className={` bg-slate-700 fixed z-50 w-full flex flex-col items-center
                        left-0 h-full transition-all ease-in-out duration-300 
                        opacity-${isSideBarShow ? '[100%]' : '0'} 
                         top-${isSideBarShow ? '0' : '[-100%]'}
                         `
            
        } >
            <button onClick={() => setIsSideBarShow(false)}>O</button>
            <ul>
                <Link href='/' className='nav-link'>
                    <li>credit</li>
                </Link>
                <Link href='/' className='nav-link'>
                    <li>crypto</li>
                </Link>
                <Link href='/' className='nav-link' >
                    <li>records</li>
                </Link>
            </ul>
        </aside>
    )
}

export default SideBar