import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { PageInfo } from '../../typings';

type Data = {
	pageInfo: PageInfo;
};

const query = `*[_type=='pageInfo'][0]`;

export default async function getPageInfo(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const pageInfo: PageInfo = await sanityClient.fetch(query);
	res.status(200).json({ pageInfo });
}
