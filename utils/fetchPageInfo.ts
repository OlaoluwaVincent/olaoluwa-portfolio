import { PageInfo } from '../typings';
const vercel = 'https://vercel.com/olaoluwavincent/olaoluwa-portfolio';
const local = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchPageInfo = async () => {
	const res = await fetch(
		`${
			process.env.NODE_ENV === 'development' ? local : vercel
		}/api/getPageInfo`
	);
	const data = await res.json();
	const pageInfo: PageInfo = data.pageInfo;
	return pageInfo;
};
