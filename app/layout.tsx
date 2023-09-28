import './globals.css'
import type { Metadata } from 'next'
import { Oxygen } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/modal-provider'
import ToasterProvider from '@/components/toaster-provider'
import CrispProvider from '@/components/crisp-provider'

const oxygen = Oxygen({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'rectifAI',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={oxygen.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
