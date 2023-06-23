import Divider from '@/components/Divider'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Home() {
	return (
		<main className='flex flex-col'>
			<Hero />
			<Divider legend='01' />
			<Features />
			<div>
				<div className='translate-y-8'>
					<Divider legend='02' />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</main>
	)
}
