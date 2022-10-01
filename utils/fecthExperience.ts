import { Experience } from '../typings';

const local = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchExperiences = async () => {
	const res = await fetch(`${local}/api/getExperiences`);
	const data = await res.json();
	const experiences: Experience[] = data.experiences;
	return experiences;
};
