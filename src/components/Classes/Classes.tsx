import { useState, useMemo } from "react";

import Class from "@/components/Class";

import type { Class as ClassType } from "@/types/class.types";

import "./Classes.scss";

interface ClassesProps {
	classes: ClassType[];
}

const Classes = ({ classes }: ClassesProps) => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredClasses = useMemo(() => {
		return classes.filter(cls => {
			const numberMatch = cls.name.toLowerCase().includes(searchTerm);
			const nameMatch = cls.number.toLowerCase().includes(searchTerm);

			return numberMatch || nameMatch;
		});
	}, [searchTerm, classes]);

	return (
		<section className="classes">
			<h2>Classes</h2>
			<div className="classes__tools">
				<input
					type="text"
					placeholder="Search"
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value.toLowerCase())}
					className="classes__search-input"
				/>
			</div>
			<div className="classes__container">
				{filteredClasses.map(cls => (
					<Class key={cls.number} cls={cls} />
				))}
			</div>
		</section>
	);
};

export default Classes;
