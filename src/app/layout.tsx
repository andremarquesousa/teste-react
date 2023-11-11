import type { Metadata } from 'next'
import '../../public/assets/stylesheets/style.css'

export const metadata: Metadata = {
  title: 'Teste de react',
  description: 'Teste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="am-general">
          {children}
        </div>
      </body>
    </html>
  )
}
