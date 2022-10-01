import { Skill } from '../typings';
const vercel =
	'https://vercel.com/olaoluwa-portfolio-mbqh6m7gk-olaoluwavincent.vercel.app';
const local = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchSkills = async () => {
	const res = await fetch(
		`${
			process.env.NODE_ENV === 'development' ? local : vercel
		}/api/getSkills`
	);
	const data = await res.json();
	const skills: Skill[] = data.skills;
	return skills;
};
