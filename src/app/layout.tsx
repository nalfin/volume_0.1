import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

// const Satoshi = localFont({
//     src: [
//         {
//             path: '../../public/fonts/Satoshi-Bold.woff2',
//             weight: '700'
//         },
//         {
//             path: '../../public/fonts/Satoshi-Medium.woff2',
//             weight: '500'
//         }
//     ],
//     variable: '--font-satoshi'
// })

const Satoshi = localFont({
    src: [
        {
            path: '../../public/fonts/Satoshi-Variable.ttf',
            weight: '400, 500, 600, 700, 800, 900'
        }
    ],
    variable: '--font-satoshi'
})

const GeneralSans = localFont({
    src: [
        {
            path: '../../public/fonts/GeneralSans-Variable.ttf',
            weight: '400, 500, 600, 700,800,900'
        }
    ],
    variable: '--font-general-sans'
})

export const metadata: Metadata = {
    title: 'Volume.co',
    description: 'Volume.co is a platform for trading crypto assets.'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${Satoshi.variable} ${GeneralSans.variable}`} suppressHydrationWarning={true}>
                <Toaster />
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
