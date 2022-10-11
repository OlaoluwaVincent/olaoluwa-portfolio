import { motion } from 'framer-motion';
import { Project as TProject } from '../typings';
import Project from './Project';
type Props = {
	projects: TProject[];
};

const Projects = ({ projects }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.3 }}
			className='min-h-screen relative max-w-full flex flex-col text-left justify-evenly items-center mx-auto px-5 z-0 overflow-hidden'
		>
			<h3 className='uppercase tracking-[5px] sm:tracking-[20px] text-gray-500 text-3xl'>
				Projects
			</h3>

			<motion.div className='w-full flex overflow-x-scroll snap-x snap-mandatory overflow-y-hidden z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-gray-400/20'>
				{projects.map((project, i) => (
					<Project
						key={`projects-done-${i}`}
						index={i}
						length={projects.length}
						project={project}
					/>
				))}
			</motion.div>

			<div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 l-0 h-[400px] -skew-y-12'></div>
		</motion.div>
	);
};

export default Projects;
