/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
	const [text, count] = useTypewriter({
		words: [
			`Hi, the name is ${pageInfo?.name}`,
			'Developer',
			'Designer',
			'Creator',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className='min-h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center'>
			<BackgroundCircle />
			<img
				src={urlFor(pageInfo?.profilePicture).url()}
				alt='profile picture'
				className='relative rounded-full mx-auto object-cover object-top h-32 w-32'
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
					{pageInfo?.role}
				</h2>
				<h1 className='text-5xl lg:6xl font-semibold px-10 '>
					<span className='mr-3 text-2xl'>{text}</span>
					<Cursor cursorColor='#d7e8es' />
				</h1>
				<div className='pt-5'>
					<Link href={'#about'}>
						<button className='heroButton'>About</button>
					</Link>
					<Link href={'#experience'}>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href={'#skills'}>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href={'#projects'}>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
