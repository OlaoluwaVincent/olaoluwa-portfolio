import { Experience } from '../typings';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../sanity';

type Data = {
	experiences: Experience[];
};

const query = `*[_type=='experience']{
  ...,
  technologies[]->
}`;

export default async function fetchExperience() {
	const experiences: Experience[] = await sanityClient.fetch(query);
	return experiences;
}
