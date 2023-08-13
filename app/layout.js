'use client'

import AppHeader from '@/components/AppHeader'
import './globals.css'
import AppFooter from '@/components/AppFooter'
import { Rubik } from 'next/font/google'
import HeaderUserStats from '@/components/HeaderUserStats'
import { useState } from 'react'

// 
export const metadata = {
  title: 'xlBank',
  description: 'Arik Alexandrov',
}

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})




export default function RootLayout({ children }) {

  // const [showHeader, setShowHeader] = useState(false);
  const showHeader = false;

  return (
    <html lang="en" >
      <body className={`${rubik.variable}`}>
        <AppHeader showHeader={ showHeader} />

        {children}
        <AppFooter />
        </body>
    </html>
  )
}
