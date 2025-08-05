import { useMemo, useState } from "react";

import {
	faList,
	faGrid2,
	faFaceDisappointed,
} from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { ToggleGroup } from "radix-ui";
import { Toolbar } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import Class from "@/components/Class";
import Search from "@/components/Search";

import type { Class as ClassType } from "@/types/class.types";

import { filterClasses } from "@/util/filterClasses";

import "./Classes.scss";

interface ClassesProps {
	classes: ClassType[];
}

const Classes = ({ classes }: ClassesProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [view, setView] = useState("grid");

	const isTablet = useBreakpoint();

	const filteredClasses = useMemo(() => {
		return filterClasses(classes, searchTerm);
	}, [classes, searchTerm]);

	const searchPlaceholder = isTablet
		? "Search for a class"
		: "Search for a class by name, number, age, school year, time limit or award";

	return (
		<section className="classes">
			<h2>Classes</h2>
			<Toolbar.Root className="classes__toolbar toolbar">
				<Search
					id="classes-search"
					value={searchTerm}
					onChange={setSearchTerm}
					placeholder={searchPlaceholder}
					label="Search"
					className="toolbar__search"
				/>
				{!isTablet && (
					<div className="toolbar__display tool">
						<ToggleGroup.Root
							className="tool__toggle-group toggle-group"
							type="single"
							defaultValue="grid"
							value={view}
							onValueChange={value => value && setView(value)}
							aria-label="Display options"
						>
							<ToggleGroup.Item className="toggle-group__item" value="grid" aria-label="Grid view">
								<FontAwesomeIcon className="toggle-group__icon" icon={faGrid2} />
								Grid
							</ToggleGroup.Item>
							<ToggleGroup.Item className="toggle-group__item" value="list" aria-label="List view">
								<FontAwesomeIcon className="toggle-group__icon" icon={faList} />
								List
							</ToggleGroup.Item>
						</ToggleGroup.Root>
					</div>
				)}
			</Toolbar.Root>
			<AnimatePresence mode="wait">
				<motion.div
					key={view}
					className={clsx("classes__container", {
						"classes__container--grid": view === "grid",
						"classes__container--list": view === "list" && !isTablet,
					})}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
				>
					{filteredClasses.length === 0 && (
						<div className="classes__no-results">
							<p className="classes__no-results-message">No classes match that search term...</p>
							<FontAwesomeIcon className="classes__no-results-icon" icon={faFaceDisappointed} />
						</div>
					)}
					{filteredClasses.map(cls => (
						<Class key={cls.number} cls={cls} />
					))}
				</motion.div>
			</AnimatePresence>
		</section>
	);
};

export default Classes;
