/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
	project: Project;
	index: number;
	length: number;
};

const Project = ({ project, index, length }: Props) => {
	return (
		<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-5 md:px-40 lg:h-full mx-auto'>
			<motion.img
				initial={{ y: -300, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				src={urlFor(project?.image).url()}
				alt='image'
				className='w-[70vw] h-[30vh] md:h-[200px] md:w-[250px]'
			/>
			<div className='space-y-5 px-0 md:px-4 max-w-6xl'>
				<h4 className='text-2xl font-semibold text-center'>
					<span className='underline decoration-[#F7AB0A]/50'>
						Case Study {index + 1} of {length}:
					</span>{' '}
					{project?.title}
				</h4>
				<Link href={project?.linkToBuild}>
					<p className='font-bold text-sm text-white m-0 text-center border-b max-w-max mx-auto cursor-pointer hover:border-[#F7AB0A]/40'>
						LIVE Preview
					</p>
				</Link>

				<div className='flex flex-wrap items-center justify-around object-fill max-w-[90%] gap-2'>
					{project.technologies.map((technology) => (
						<img
							key={technology._id}
							src={urlFor(technology.image).url()}
							alt={technology.title}
							className='h-10 w-10 bg-white rounded-full object-contain max-w-[90%] mx-auto'
						/>
					))}
				</div>

				<p className='text-sm text-center md:text-lg md:text-left max-w-[90%] mx-auto'>
					{project?.summary}
				</p>
			</div>
		</div>
	);
};

export default Project;
