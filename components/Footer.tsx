import Link from 'next/link'

const Footer = () => {
	return (
		<footer>
			<div className='relative -z-50 bg-footerMobile bg-cover bg-no-repeat md:bg-footerTablet lg:bg-footerDesktop'>
				<div className='absolute inset-0 -z-10 h-full w-full bg-steelBlue opacity-90' />
				<div className='z-50 flex flex-col items-center gap-6 px-6 py-24 text-center text-offWhite md:gap-8 md:px-24 md:py-16 lg:flex-row lg:justify-around lg:gap-0 lg:px-40 lg:py-28 lg:text-left'>
					<h3 className='max-w-sm text-[32px] font-black leading-10 md:max-w-md md:text-[40px]/[44px] lg:w-1/3 lg:max-w-none'>
						Experience more together
					</h3>
					<p className='max-w-sm text-lg font-medium md:max-w-none lg:w-1/3 lg:max-w-sm'>
						Stay connected with reliable HD meetings and unlimited one-on-one
						and group video sessions.
					</p>
					<Link
						href='#'
						className='mt-2 rounded-full bg-mediumPurple px-10 py-4 font-black text-white hover:cursor-pointer hover:bg-pastelPurple lg:mt-0'>
						Download <span className='pl-1 text-lavendar'>v1.3</span>
					</Link>
				</div>
			</div>
		</footer>
	)
}
export default Footer
