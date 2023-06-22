import Image from 'next/image'
import HeroMobile from '@/public/assets/tablet/image-hero.png'
import Link from 'next/link'
import HeroDesktopLeft from '@/public/assets/desktop/image-hero-left.png'
import HeroDesktopRight from '@/public/assets/desktop/image-hero-right.png'

const Hero = () => {
	return (
		<section className='grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-[72px] lg:gap-[88px] '>
			<picture>
				<Image
					src={HeroMobile}
					alt=''
					className='lg:hidden w-full object-contain'
				/>
				<Image
					src={HeroDesktopLeft}
					alt=''
					className='hidden lg:block w-full object-contain'
				/>
			</picture>
			<div className='flex flex-col gap-8 justify-center items-center text-center px-6'>
				<div className='flex flex-col gap-6 lg:gap-8'>
					<h1 className='text-darkBlue text-[40px] md:text-5xl lg:text-[64px] leading-10 font-black'>
						Group Chat <br /> for Everyone
					</h1>
					<p className='text-slateGray font-medium leading-relaxed max-w-sm md:text-lg'>
						Meet makes it easy to connect with others face-to-face virtually and
						collaborate across any device.
					</p>
				</div>
				<div className='flex flex-col gap-4 items-center md:flex-row'>
					<Link
						href='#'
						className='py-4 px-10 rounded-full bg-steelBlue text-white font-black leading-relaxed hover:bg-skyBlue '>
						Download <span className='pl-1 text-lightSkyBlue'>v1.3</span>
					</Link>
					<Link
						href='#'
						className='bg-mediumPurple py-4 px-8 rounded-full text-white font-black leading-relaxed hover:bg-pastelPurple '>
						What is it?
					</Link>
				</div>
			</div>
			<picture>
				<Image
					src={HeroDesktopRight}
					alt=''
					className='hidden lg:block w-full object-contain'
				/>
			</picture>
		</section>
	)
}
export default Hero
