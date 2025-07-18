import React from 'react'
import './styles.css'
import { HeroUIProvider } from '@heroui/react'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <HeroUIProvider>
          <main>{children}</main>
        </HeroUIProvider>
      </body>
    </html>
  )
}
