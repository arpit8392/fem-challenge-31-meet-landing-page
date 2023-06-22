import Features from '@/components/Features'
import Hero from '@/components/Hero'

export default function Home() {
	return (
		<main className='min-h-screen flex flex-col gap-16'>
			<Hero />
			<Features />
		</main>
	)
}
