import { Experience } from '../typings';

const vercel = 'https://vercel.com/olaoluwavincent/olaoluwa-portfolio';
const local = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchExperiences = async () => {
	const res = await fetch(
		`${
			process.env.NODE_ENV === 'development' ? local : vercel
		}/api/getExperiences`
	);
	const data = await res.json();
	const experiences: Experience[] = data.experiences;
	return experiences;
};
