import Navbar from './components/modules/Navbar'
import './globals.css'
import { Outfit, Source_Sans_Pro } from 'next/font/google'

const outfit = Outfit({
	subsets: ['latin-ext'],
	variable: '--font-outfit'
})

const sourceSansPro = Source_Sans_Pro({
	display: 'swap',
	subsets: ['latin-ext'],
	weight: ['400', '600', '700'],
	variable: '--font-source-sans-pro'
})

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${outfit.variable} ${sourceSansPro.variable}`}>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
