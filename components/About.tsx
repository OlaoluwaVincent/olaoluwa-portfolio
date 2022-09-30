import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 1.5 }}
			className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden'
		>
			<h3 className='absolute top-[70px] uppercase tracking-[20px] text-gray-500 text-3xl'>
				About
			</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: [0.4, 0.8, 1],
				}}
				transition={{
					duration: 0.9,
				}}
				src={urlFor(pageInfo?.heroImage).url()}
				className='-mb-20 md:mb-0 flex-shrink-0 h-32 w-32 object-cover rounded-full md:rounded-lg md:w-64 md:h-80 xl:w-[400px] xl:h-[500px]'
			/>
			<div className='space-y-5 px-0 md:px-10'>
				<h4 className='text-2xl sm:text-3xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-yellow-600/50'>
						Little
					</span>{' '}
					background
				</h4>
				<p className='text-base'>{pageInfo?.backgroundInformation}</p>
			</div>
		</motion.div>
	);
};

export default About;
