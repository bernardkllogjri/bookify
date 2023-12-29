import './globals.css'

import CartDrawer from './(components)/cart-drawer/CartDrawer'
import Footer from './(domains)/footer'
import Header from './(domains)/header'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import ProductQuickViewModal from './(components)/product/ProductQuickViewModal'
import classnames from './utils/classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookify',
  description: 'Book online shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classnames(inter.className)}>
        <Header />
        <main className='px-4 py-20 sm:px-6 sm:py-24 lg:px-8'>
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <ProductQuickViewModal />
      </body>
    </html>
  )
}
