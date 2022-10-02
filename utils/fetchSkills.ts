import type { NextApiRequest, NextApiResponse } from 'next';
import { Skill } from '../typings';
import { sanityClient } from '../sanity';

type Data = {
	skills: Skill[];
};

const query = `*[_type == 'skill']`;

export default async function fetchSkills() {
	const skills: Skill[] = await sanityClient.fetch(query);

	return skills;
}
