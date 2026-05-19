import type { Metadata } from 'next'
import { Heebo, Frank_Ruhl_Libre } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-heebo',
  display: 'swap',
})

const frank = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '700'],
  variable: '--font-frank',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'טל שני - אירועים פרטיים בוטיק',
  description:
    'הפקת אירועים פרטיים עם לב, סטייל ומשמעות. ימי הולדת עגולים, בר/בת מצווה, חתונות בוטיק ועוד.',
  openGraph: {
    title: 'טל שני - אירועים פרטיים בוטיק',
    description: 'הפקת אירועים פרטיים עם לב, סטייל ומשמעות.',
    images: [{ url: '/images/tal.JPG' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${frank.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
