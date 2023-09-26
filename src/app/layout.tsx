import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../../component/Header'
import Sidebar from '../../component/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex h-screen'>
          {/* Sidebar Start */}
          <Sidebar/>
          {/* Sidebar End */}

          {/* Content Area Start */}
          <div className='flex flex-col'>
            {/* Header Start */}
            <Header/>
            {/* Header End */}

            {/* Main Content Start */}
            <main className='w-screen'>
              {children}
            </main>
            {/* Main Content End */}
          </div>
          {/* Content Area End */}
        </div>
      </body>
    </html>
  )
}
