import './globals.css'
import { Inter } from 'next/font/google'
// import Navbar from './pages/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Cookies_handler',
  description: 'Generated by Mehedi_Hasan_Joy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    {/* <Navbar></Navbar> */}
        {children}
      </body>
    </html>
  )
}
