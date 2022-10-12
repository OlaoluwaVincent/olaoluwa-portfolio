import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
	socials: Social[];
};

const Header = ({ socials }: Props) => {
	return (
		<header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 md:items-center p-2'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex items-center'
			>
				{/* Social Icons
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor='gray'
						bgColor='transparent'
					/>
				))} */}

				<a
					href='../olaoluwa.pdf'
					download
					className='bg-[#393939] px-4 py-2 hover:bg-gray-800/50'
				>
					Download CV
				</a>
			</motion.div>

			<Link href={'/#contact'}>
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.3,
					}}
					className='flex flex-row items-center text-gray-300 cursor-pointer'
				>
					<SocialIcon
						className='cursor-pointer'
						network='email'
						fgColor='gray'
						bgColor='transparent'
					/>
					<p className='hidden md:inline-flex text-sm text-gray-500 uppercase'>
						Get in touch
					</p>
				</motion.div>
			</Link>
		</header>
	);
};

export default Header;
