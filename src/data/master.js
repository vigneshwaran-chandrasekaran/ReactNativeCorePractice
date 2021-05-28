import json from './json';
import kural from './kural';

const chap = (p, c) => json.data[p].chapterGroup[c];

const range = (p, c, id) => {
	const { start, end } = chap(p, c).chapters.detail[id - 1];

	return kural.filter(_ => _.Number <= +end && _.Number >= +start);
};

const getKural = id => kural.filter(_ => _.Number === +id)[0];

const search = term => {
	const regex = new RegExp(term, 'gi');

	return kural.filter(_ => regex.test(_.Line1));
};

export { range, getKural, chap, search };
