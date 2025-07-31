export const formatDate = (dateStr: string) => {
	return new Intl.DateTimeFormat("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	})
		.format(new Date(dateStr))
		.replace(/^(\w+)(\s)/, "$1,$2");
};

export const formatDateShort = (dateStr: string) => {
	return new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(dateStr));
};
