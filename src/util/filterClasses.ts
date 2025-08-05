import type { Class as ClassType } from "@/types/class.types";

export const filterClasses = (classes: ClassType[], search: string) => {
	const normalizedSearch = search.toLowerCase().trim();

	const matchPartialPhrase = (phrase: string) => phrase.toLowerCase().startsWith(normalizedSearch);

	const ageSearch = (() => {
		const match = normalizedSearch.match(/^(\d+)(\s*years?)?$/);
		if (!match) return null;
		const num = parseInt(match[1]);
		return isNaN(num) ? null : num;
	})();

	return classes.filter(cls => {
		const fields = [
			cls.name,
			cls.number,
			cls.award,
			`${cls.maxDuration} minutes`,
			`${cls.minGroupSize} performers`,
			`${cls.maxGroupSize} performers`,
		].map(f => f.toLowerCase());

		const ageMatches = [`${cls.minAge} years`, `${cls.maxAge} years`];
		const schoolYearMatches = [`year ${cls.minSchoolYear}`, `year ${cls.maxSchoolYear}`];

		const partialMatches = [...ageMatches, ...schoolYearMatches];

		const ageOver18Match =
			ageSearch && ageSearch >= 18 && (Number(cls.minAge) >= 18 || Number(cls.maxAge) >= 18);

		return (
			fields.some(field => field.includes(normalizedSearch)) ||
			partialMatches.some(phrase => matchPartialPhrase(phrase)) ||
			ageOver18Match
		);
	});
};
