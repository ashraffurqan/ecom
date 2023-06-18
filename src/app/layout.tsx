import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asan Mart',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-mywhite '}> <div className='max-w-[90] mx-auto'><Navbar />{children}
       </div><Footer/></body>
    </html>
  )
}
