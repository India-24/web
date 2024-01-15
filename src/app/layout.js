import { Ubuntu_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const mono = Ubuntu_Mono({ subsets: ['latin'], weight: "400" })
import { ThemeProvider } from "./components/theme-provider"


export const metadata = {
  title: 'Catalyst',
  description: 'A hackathon for teenagers, in Bangalore, India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mono.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
