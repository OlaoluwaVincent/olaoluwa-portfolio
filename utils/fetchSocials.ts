import { Social } from '../typings';

const local = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchSocials = async () => {
	const res = await fetch(`${local}/api/getSocials`);
	const data = await res.json();
	const socials: Social[] = data.socials;
	return socials;
};
