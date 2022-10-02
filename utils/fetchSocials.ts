import { Social } from '../typings';
import type { NextApiResponse, NextApiRequest } from 'next';
import { sanityClient } from '../sanity';

type Data = {
	socials: Social[];
};
const query = `*[_type=='social']`;

export default async function fetchSocials() {
	const socials: Social[] = await sanityClient.fetch(query);
	return socials;
}
