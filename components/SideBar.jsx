'use client'

import { headerNavLinks } from '@/data/data'
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
                {headerNavLinks.map(link => (
                    <Link href={link.linkTo} className='nav-link' key={link.id}
                    onClick={() => setIsSideBarShow(false)}>
                        <li>{link.title}</li>
                    </Link>
                ))}
            </ul>
        </aside>
    )
}

export default SideBar