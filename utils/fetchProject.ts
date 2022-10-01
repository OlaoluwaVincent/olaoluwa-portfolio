import { Project } from '../typings';
const local = process.env.NEXT_PUBLIC_BASE_URL;
export const fetchProjects = async () => {
	const res = await fetch(`${local}/api/getProjects`);
	const data = await res.json();
	const projects: Project[] = data.projects;
	return projects;
};
