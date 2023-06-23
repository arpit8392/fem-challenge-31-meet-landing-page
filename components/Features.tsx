import Gallery from './Gallery'

const Features = () => {
	return (
		<section className='flex flex-col gap-16 px-6 pt-16 md:gap-12 md:px-10 lg:gap-20 lg:px-40'>
			<Gallery />
			<div className='flex flex-col items-center justify-center gap-6 text-center md:gap-4'>
				<p className='font-black uppercase tracking-[4px] text-steelBlue'>
					Built for modern use
				</p>
				<h2 className='max-w-sm text-[32px]/9 font-black text-darkBlue md:max-w-md md:text-[40px] md:leading-[44px]'>
					Smarter meetings, all in one place
				</h2>
				<p className='max-w-sm pt-2 font-medium text-slateGray md:max-w-xl md:pt-4 lg:text-lg'>
					Send messages, share files, show your screen, and record your meetings
					— all in one workspace. Control who can join with invite-only team
					access, data encryption, and data export.
				</p>
			</div>
		</section>
	)
}
export default Features
