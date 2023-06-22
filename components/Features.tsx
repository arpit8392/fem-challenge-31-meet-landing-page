import Gallery from './Gallery'

const Features = () => {
	return (
		<section className='px-6 flex flex-col gap-16 md:gap-12 md:px-10 lg:px-40 lg:gap-20'>
			<Gallery />
			<div className='flex flex-col gap-6 text-center justify-center items-center md:gap-4'>
				<p className='uppercase text-steelBlue font-black tracking-[4px]'>
					Built for modern use
				</p>
				<h2 className='text-darkBlue text-[32px]/9 md:text-[40px] md:leading-[44px] font-black max-w-sm md:max-w-md'>Smarter meetings, all in one place</h2>
				<p className='pt-2 md:pt-4 font-medium max-w-sm md:max-w-xl text-slateGray lg:text-lg'>
					Send messages, share files, show your screen, and record your meetings
					— all in one workspace. Control who can join with invite-only team
					access, data encryption, and data export.
				</p>
			</div>
		</section>
	)
}
export default Features
