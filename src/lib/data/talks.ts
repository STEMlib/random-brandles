import type Talk from '../types/talk';

const talks: Talk[] = [
	{
		title: 'Example Title',
		link: 'https://google.com',
		event: 'Example Event Name',
		year: 2015
	},
];

talks.sort((a, b) => b.year - a.year || b.month - a.month);

export { talks };
