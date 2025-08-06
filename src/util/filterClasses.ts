import type { Class as ClassType } from "@/types/class.types";

export const filterClasses = (classes: ClassType[], search: string) => {
	const normalisedSearch: string = search.toLowerCase().trim();

	return classes.filter(cls => {
		const fields = [
			cls.name,
			cls.number,
			cls.award,
			`${cls.maxDuration} minutes`,
			`${cls.minGroupSize} performers`,
			`${cls.maxGroupSize} performers`,
		].map(f => f.toLowerCase());

		const ageMatches =
			cls.minAge !== undefined && cls.maxAge !== undefined
				? [`${cls.minAge}`, `${cls.maxAge}`].some(age => age === normalisedSearch) ||
				  (parseInt(normalisedSearch) >= Number(cls.minAge) &&
						parseInt(normalisedSearch) <= Number(cls.maxAge))
				: cls.minAge !== undefined
				? `${cls.minAge}` === normalisedSearch
				: cls.maxAge !== undefined
				? `${cls.maxAge}` === normalisedSearch
				: false;

		const yearMatch = normalisedSearch.match(/^year\s+(\d+)$/);
		const searchYear = yearMatch ? parseInt(yearMatch[1]) : parseInt(normalisedSearch);

		const schoolYearMatches =
			cls.minSchoolYear !== undefined && cls.maxSchoolYear !== undefined
				? [`${cls.minSchoolYear}`, `${cls.maxSchoolYear}`].some(
						year => year === normalisedSearch
				  ) ||
				  [`year ${cls.minSchoolYear}`, `year ${cls.maxSchoolYear}`].some(
						phrase => phrase === normalisedSearch
				  ) ||
				  (!isNaN(searchYear) &&
						searchYear >= Number(cls.minSchoolYear) &&
						searchYear <= Number(cls.maxSchoolYear))
				: cls.minSchoolYear !== undefined
				? `${cls.minSchoolYear}` === normalisedSearch ||
				  `year ${cls.minSchoolYear}` === normalisedSearch
				: cls.maxSchoolYear !== undefined
				? `${cls.maxSchoolYear}` === normalisedSearch ||
				  `year ${cls.maxSchoolYear}` === normalisedSearch
				: false;

		return (
			fields.some(field => field.includes(normalisedSearch)) || ageMatches || schoolYearMatches
		);
	});
};