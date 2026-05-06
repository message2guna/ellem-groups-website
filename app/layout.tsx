import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ellem Groups - Manufacturing Excellence',
  description:
    'Leading manufacturer in die casting, precision engineering, and fluid control valves. Serving clients globally with excellence.',
  keywords: 'foundry, die casting, CNC, precision engineering, fluid control valves',
  openGraph: {
    title: 'Ellem Groups - Manufacturing Excellence',
    description: 'Leading manufacturer in die casting, precision engineering, and fluid control valves',
    url: 'https://ellemgroups.com',
    siteName: 'Ellem Groups',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
