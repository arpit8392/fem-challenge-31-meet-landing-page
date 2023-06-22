import Header from '@/components/Header'
import './globals.css'
import { Red_Hat_Display } from 'next/font/google'
import Footer from '@/components/Footer'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'] })

export const metadata = {
	title: 'Meet Landing Page',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed in Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${red_hat_display.className} bg-neutral-50`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
