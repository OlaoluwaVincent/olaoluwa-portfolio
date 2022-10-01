import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { Project } from '../../typings';

type Data = {
	projects: Project[];
};

const query = `*[_type=='project']{
...,
  technologies[]->
}`;

export default async function getProjects(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const projects: Project[] = await sanityClient.fetch(query);
	res.status(200).json({ projects });
}
