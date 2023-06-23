type Props = {
	legend: string
}
const Divider = ({ legend }: Props) => {
	return (
		<div className='flex flex-col items-center justify-center pt-16 md:pt-20 lg:pt-28'>
			<div className='h-24 w-[1px] bg-slateGray bg-opacity-25' />
			<div className='flex h-14 w-14 items-center justify-center rounded-full border border-slateGray border-opacity-25 font-black text-slateGray bg-offWhite'>
				{legend}
			</div>
		</div>
	)
}
export default Divider
