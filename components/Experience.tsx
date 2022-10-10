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
			transition={{ delay: 0.3 }}
			className='min-h-screen max-w-full flex flex-col text-left overflow-hidden justify-evenly items-center mx-auto px-5'
		>
			<h3 className='uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-3xl'>
				Experience
			</h3>

			<div className='w-full flex md:flex-row  space-x-4 overflow-x-scroll justify-center snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-gray-400/20'>
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
