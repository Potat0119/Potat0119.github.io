export const metadata = {
  title: 'REO YOSHIOKA',
  description: 'REO YOSHIOKA Homepage',
  keywords: ['portfolio', 'developer','texture creator'],
  locale: 'ja_JP',
  type: 'website',
  viewport: 'width=device-width, initial-scale=1.0',
}

import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
