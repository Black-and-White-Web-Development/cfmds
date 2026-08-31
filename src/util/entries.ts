import { formatDate, formatDateShort } from "@/util/formateDate";

// Entries run from 1 September to 30 November inclusive (0-indexed months).
const OPENING_MONTH = 8;
const CLOSING_MONTH = 10;

// The 1st festival was held in 1955, so the festival entered in year Y is the (Y - 1954)th.
const FIRST_FESTIVAL_YEAR = 1954;

const ordinal = (n: number) => {
	const remainderOfTen = n % 10;
	const remainderOfHundred = n % 100;

	if (remainderOfTen === 1 && remainderOfHundred !== 11) return `${n}st`;
	if (remainderOfTen === 2 && remainderOfHundred !== 12) return `${n}nd`;
	if (remainderOfTen === 3 && remainderOfHundred !== 13) return `${n}rd`;

	return `${n}th`;
};

export const areEntriesOpen = (now: Date = new Date()) => {
	const month = now.getMonth();

	return month >= OPENING_MONTH && month <= CLOSING_MONTH;
};

export const getEntryDetails = (now: Date = new Date()) => {
	const year = now.getFullYear();
	const beforeOpening = now.getMonth() < OPENING_MONTH;

	// Outside the entry window we look back to the last festival and forward to the next one.
	const closedYear = beforeOpening ? year - 1 : year;
	const openingYear = beforeOpening ? year : year + 1;

	return {
		year,
		festival: ordinal(year - FIRST_FESTIVAL_YEAR),
		closedFestival: ordinal(closedYear - FIRST_FESTIVAL_YEAR),
		openingFestival: ordinal(openingYear - FIRST_FESTIVAL_YEAR),
		closedOn: formatDate(`${closedYear}-11-30T00:00:00`),
		opensOn: formatDateShort(`${openingYear}-09-01T00:00:00`),
	};
};
