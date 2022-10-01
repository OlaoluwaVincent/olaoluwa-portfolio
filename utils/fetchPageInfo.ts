import { PageInfo } from '../typings';

const local = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchPageInfo = async () => {
	const res = await fetch(`${local}/api/getPageInfo`);
	const data = await res.json();
	const pageInfo: PageInfo = data.pageInfo;
	return pageInfo;
};
