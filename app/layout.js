import './globals.css'

export const metadata = {
  title: 'WASIF AFNAN MUKTO | Portfolio',
  description: 'Personal portfolio website for Wasif Afnan Mukto.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
