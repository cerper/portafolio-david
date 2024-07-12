import type { Metadata } from 'next'
import { Inter, Oswald, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Portafolio - David Lovera',
  description: 'Entra y ve todos mis proyectos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${roboto.variable} w-full max-w-[1920px] bg-white text-black `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
