import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { PageInfo } from '../typings';

type Data = {
	pageInfo: PageInfo;
};

const query = groq`*[_type=='pageInfo'][0]`;

export default async function fetchPageInfo() {
	const pageInfo: PageInfo = await sanityClient.fetch(query);
	return pageInfo;
}
