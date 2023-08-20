'use client'

import { headerNavLinks } from '@/data/data'
import Link from 'next/link'
import BtnLogin from './btns/btnLogin/BtnLogin'
import SocialIcons from './SocialIcons'
import BtnSideBar from './btns/btnSideBar/BtnSideBar'
import BtnNewLogin from './btns/btnNewLogin/BtnNewLogin'

const SideBar = ({ setIsSideBarShow, isSideBarShow }) => {
    return (
        <aside className={` py-10 bg-slate-700 fixed z-50 w-full h-[100vh] flex flex-col items-center
                        left-0  transition-all ease-in-out duration-300 justify-between
                        opacity-${isSideBarShow ? '[100%]' : '0'} 
                         top-${isSideBarShow ? '0' : '[-100%]'}
                         `

        } >
            <div className='flex flex-row-reverse px-6 w-full'>
                <button onClick={() => setIsSideBarShow(!isSideBarShow)}>
                    <BtnSideBar isSideBarShow={isSideBarShow} />
                </button>
            </div>
            <Link className='my-8 mx-auto' onClick={() => setIsSideBarShow(false)} href='/login'>
                <BtnNewLogin />
            </Link>
            {/* <Link href='/' className='text-3xl'
                onClick={() => setIsSideBarShow(false)}>
                <li className='mb-8 list-none	'>Home</li>
            </Link> */}
            <ul className='text-center'>
                {headerNavLinks.map(link => (
                    <Link href={link.linkTo} className='text-3xl' key={link.id}
                        onClick={() => setIsSideBarShow(false)}>
                        <li className='mb-8 '>{link.title}</li>
                    </Link>
                ))}
            </ul>
            <SocialIcons />
        </aside>
    )
}

export default SideBar