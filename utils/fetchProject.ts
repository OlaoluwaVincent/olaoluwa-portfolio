import type { NextApiRequest, NextApiResponse } from 'next';
import { Project } from '../typings';
import { sanityClient } from '../sanity';

type Data = {
	projects: Project[];
};

const query = `*[_type=='project']{
...,
  technologies[]->
}`;

export default async function fetchProjects() {
	const projects: Project[] = await sanityClient.fetch(query);
	return projects;
}
