import { useMemo, useRef, useState } from "react";

import { faMagnifyingGlass } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "radix-ui";
import { Toolbar } from "radix-ui";

import Class from "@/components/Class";

import type { Class as ClassType } from "@/types/class.types";

import "./Classes.scss";

interface ClassesProps {
	classes: ClassType[];
}

const Classes = ({ classes }: ClassesProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const filteredClasses = useMemo(() => {
		return classes.filter(cls => {
			const numberMatch = cls.name.toLowerCase().includes(searchTerm);
			const nameMatch = cls.number.toLowerCase().includes(searchTerm);

			return numberMatch || nameMatch;
		});
	}, [searchTerm, classes]);

	const handleIconClick = () => {
		inputRef.current?.focus();
	};

	return (
		<section className="classes">
			<h2>Classes</h2>
			<Toolbar.Root className="classes__tools tools">
				<div className="tools__search tool">
					<Label.Root className="tool__label" htmlFor="classes-search">
						Search
					</Label.Root>
					<div className="tool__input-container tool__input-container--search">
						<FontAwesomeIcon
							className="tool__icon"
							icon={faMagnifyingGlass}
							onClick={handleIconClick}
						/>
						<input
							id="classes-search"
							className="tool__input tool__input--search"
							ref={inputRef}
							type="text"
							placeholder=""
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value.toLowerCase())}
						/>
					</div>
				</div>
			</Toolbar.Root>
			<div className="classes__container">
				{filteredClasses.length === 0 && <p>No classes found.</p>}
				{filteredClasses.map(cls => (
					<Class key={cls.number} cls={cls} />
				))}
			</div>
		</section>
	);
};

export default Classes;
