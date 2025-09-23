import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "GoGatherly - Create Memorable Events",
    description:
        "Create unforgettable events with our platform. Connect, celebrate, and capture memories that last a lifetime.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
