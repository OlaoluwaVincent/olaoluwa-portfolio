import { Skill } from '../typings';

const local = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchSkills = async () => {
	const res = await fetch(`${local}/api/getSkills`);
	const data = await res.json();
	const skills: Skill[] = data.skills;
	return skills;
};
