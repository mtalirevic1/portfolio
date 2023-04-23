import './globals.css'
import {Lato, Roboto} from 'next/font/google'
import {ReactNode} from 'react'

export const metadata = {
  title: 'MT | Home',
  description: 'Matej Talirevic Portfolio Homepage',
}

const mainFont = Roboto({
  variable: '--font-roboto',
  display: 'swap',
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"]
})

const accentFont = Lato({
  variable: '--font-lato',
  display: 'swap',
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${mainFont.variable} ${accentFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
