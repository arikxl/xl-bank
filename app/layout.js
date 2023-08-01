import AppHeader from '@/components/AppHeader'
import './globals.css'
import AppFooter from '@/components/AppFooter'
import { Rubik } from 'next/font/google'
import HeaderUserStats from '@/components/HeaderUserStats'

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
  return (
    <html lang="en" >
        <body  className={`${rubik.variable}`}>
        <AppHeader />
          {children}
          <AppFooter />
        </body>
    </html>
  )
}
