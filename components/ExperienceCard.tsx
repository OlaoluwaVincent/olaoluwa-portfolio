import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article className='flex flex-col items-center justify-around py-10 px-8 flex-shrink-0 max-w-full sm:min-w-0 snap-center bg-[#393939] rounded-xl sm:px-7 md:py-5 md:px-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden space-y-5'>
			<motion.img
				initial={{ y: -100 }}
				whileInView={{ y: [10, -8, 10, 0] }}
				transition={{ duration: 1.5 }}
				src={urlFor(experience.companyImage).url()}
				alt='profile picture'
				height={0}
				width={0}
				className='h-24 w-24 object-cover object-top rounded-full xl:w-[100px] xl:h-[100px] md:rounded-lg'
			/>
			<div className='px-0 md:px-5'>
				<h4 className='text-md font-light font-lobster'>
					{experience.jobTitle}
				</h4>
				<p className='text-sm font-bold mt-1'>{experience.company}</p>
				<div className='flex space-x-2 gap-3 mt-2 justify-center'>
					{experience.technologies.map((technology) => (
						<Image
							key={technology._id}
							src={urlFor(technology.image).url()}
							height={40}
							width={40}
							alt='logo'
							className='rounded-full'
						/>
					))}
				</div>
				<p className='uppercase py-3 text-sm font-light text-gray-300'>
					{new Date(experience.dateStarted).toDateString()} -{' '}
					{experience.IsCurrentlyWorkingHere
						? 'Present'
						: new Date(experience.dateEnded).toDateString()}
				</p>
				<ul className='list-disc space-y-2 ml-3 text-sm'>
					{experience.points.map((point, i) => (
						<li key={`Experience-point-${i}`}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
