import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Audiophile is an all in one stop to fulfill your audio needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div>
            {children}    
        </div>
  )
}
