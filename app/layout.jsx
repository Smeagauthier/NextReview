import Link from "next/link"
import  './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/reviews'>Reviews</Link></li>
                    <li><Link href='/about' prefetch={false}>About</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            footer
        </footer>
      </body>
    </html>
  )
}