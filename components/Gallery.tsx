import Image1 from '@/public/assets/desktop/image-woman-in-videocall.jpg'
import Image2 from '@/public/assets/desktop/image-women-videochatting.jpg'
import Image3 from '@/public/assets/desktop/image-men-in-meeting.jpg'
import Image4 from '@/public/assets/desktop/image-man-texting.jpg'
import Image from 'next/image'

const imageGallery = [Image1, Image2, Image3, Image4]

const Gallery = () => {
	return (
		<ul className='grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-3 lg:gap-8'>
			{imageGallery.map((image, index) => (
				<li key={index}>
					<Image
						src={image}
						alt=''
						className='block rounded-lg object-contain'
					/>
				</li>
			))}
		</ul>
	)
}
export default Gallery
