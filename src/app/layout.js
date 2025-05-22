import './globals.css'

export const metadata = {
  title: 'Avoenga Lavish',
  description:
    'Discover the benefits of pure and organic avocado oil for your skin, hair, and cooking.',
  keywords: [
    'avocado oil',
    'organic',
    'skin care',
    'hair care',
    'cooking oil',
    'Avoenga Lavish',
    'cold-pressed',
    'healthy fats',
    'Kenya',
  ],
  authors: [{ name: 'ReuelO' }],
  openGraph: {
    title: 'Avoenga Lavish',
    description: 'Pure & Organic Avoenga Lavish Avocado Oil',
    url: 'https://avoenga-lavish.com',
    siteName: 'Avoenga Lavish',
    images: [
      {
        url: '/images/cover-1.jpg',
        width: 1200,
        height: 630,
        alt: 'AVOENGA Lavish Avocado Cooking Oil',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100'>
        {children}
      </body>
    </html>
  )
}
