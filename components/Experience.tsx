import { motion } from 'framer-motion';
import { Experience } from '../typings';
import ExperienceCard from './ExperienceCard';

type Props = {
	experiences: Experience[];
};

const Experience = ({ experiences }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 1.5 }}
			className='h-screen relative max-w-full flex flex-col text-left overflow-hidden justify-evenly items-center mx-auto md:flex-row px-5 '
		>
			<h3 className='absolute top-[70px] uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-3xl'>
				Experience
			</h3>

			<div className='w-full flex space-x-4 overflow-x-scroll justify-center snap-x snap-mandatory lg:mt-[50px] scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-gray-400/20'>
				{experiences.map((experience) => (
					<ExperienceCard
						key={experience._id}
						experience={experience}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default Experience;
