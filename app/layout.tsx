import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Rate Limit Usage Forecaster',
  description: 'Predicts when you will hit API rate limits. Monitor usage patterns and get actionable optimization recommendations before breaches happen.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="02054973-4fcb-4df7-8fd3-1088085d14a3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
