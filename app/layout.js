import AppHeader from '@/components/AppHeader'
import './globals.css'
import AppFooter from '@/components/AppFooter'


export const metadata = {
  title: 'xlBank project',
  description: 'Arik Alexandrov',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body >
          <AppHeader />
          {children}
          <AppFooter />
        </body>
    </html>
  )
}
