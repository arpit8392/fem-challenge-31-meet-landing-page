import Image from 'next/image'
import HeroMobile from '@/public/assets/tablet/image-hero.png'
import Link from 'next/link'
import HeroDesktopLeft from '@/public/assets/desktop/image-hero-left.png'
import HeroDesktopRight from '@/public/assets/desktop/image-hero-right.png'

const Hero = () => {
	return (
		<section className='grid grid-cols-1 gap-12 md:gap-[72px] lg:grid-cols-3 lg:gap-0'>
			<picture className='lg:justify-self-start'>
				<Image
					src={HeroMobile}
					alt=''
					className='w-full object-contain lg:hidden'
				/>
				<Image
					src={HeroDesktopLeft}
					alt=''
					className='hidden lg:block'
				/>
			</picture>
			<div className='flex flex-col items-center justify-center gap-8 px-6 text-center lg:px-0'>
				<div className='flex flex-col gap-6 lg:gap-8'>
					<h1 className='text-[40px] font-black leading-10 text-darkBlue md:text-5xl lg:text-[64px]'>
						Group Chat <br /> for Everyone
					</h1>
					<p className='max-w-sm font-medium text-slateGray md:max-w-lg md:text-lg '>
						Meet makes it easy to connect with others face-to-face virtually and
						collaborate across any device.
					</p>
				</div>
				<div className='flex flex-col items-center gap-4 md:flex-row'>
					<Link
						href='#'
						className='rounded-full bg-steelBlue px-10 py-4 font-black text-white hover:bg-skyBlue '>
						Download <span className='pl-1 text-lightSkyBlue'>v1.3</span>
					</Link>
					<Link
						href='#'
						className='rounded-full bg-mediumPurple px-8 py-4 font-black text-white hover:bg-pastelPurple '>
						What is it?
					</Link>
				</div>
			</div>
			<picture className='lg:justify-self-end'>
				<Image src={HeroDesktopRight} alt='' className='hidden lg:block' />
			</picture>
		</section>
	)
}
export default Hero
