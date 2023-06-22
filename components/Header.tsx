import Logo from '@/public/assets/logo.svg'
import Image from 'next/image'

const Header = () => {
	return (
		<header className='py-12 flex items-center justify-center lg:py-20'>
			<Image src={Logo} alt='Meet Logo' />
		</header>
	)
}
export default Header
