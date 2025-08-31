import { useEffect, useMemo, useState } from "react";

import {
	faFaceDisappointed,
	faGrid2,
	faList,
} from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { ToggleGroup } from "radix-ui";
import { Toolbar } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import Class from "@/components/Class";
import Search from "@/components/Search";
import Select from "@/components/Select";

import type { Class as ClassType } from "@/types/class.types";
import type { SetTest as SetTestType } from "@/types/set-test.types";

import { filterClasses } from "@/util/filterClasses";

import "./Classes.scss";

interface ClassesProps {
	classes: ClassType[];
	setTests?: SetTestType[];
}

const Classes = ({ classes, setTests }: ClassesProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [view, setView] = useState("grid");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState<number | "All">(24);

	useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const isTablet = useBreakpoint();
	const isMobile = useBreakpoint(519.98);

	const filteredClasses = useMemo(() => {
		return filterClasses(classes, searchTerm);
	}, [classes, searchTerm]);

	const startIndex = itemsPerPage === "All" ? 0 : (currentPage - 1) * itemsPerPage;
	const endIndex = itemsPerPage === "All" ? filteredClasses.length : startIndex + itemsPerPage;

	const paginatedClasses = useMemo(() => {
		if (itemsPerPage === "All") return filteredClasses;
		return filteredClasses.slice(startIndex, endIndex);
	}, [filteredClasses, startIndex, endIndex, itemsPerPage]);

	const totalPages = itemsPerPage === "All" ? 1 : Math.ceil(filteredClasses.length / itemsPerPage);

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
				<motion.ul
					key={`${view}-${currentPage}`}
					className={clsx("classes__list", {
						"classes__list--grid": view === "grid",
						"classes__list--list": view === "list" && !isTablet,
					})}
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={{
						hidden: { opacity: 0, y: 10 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								staggerChildren: 0.05,
							},
						},
					}}
				>
					{paginatedClasses.length === 0 && (
						<div className="classes__no-results">
							<p className="classes__no-results-message">No classes match that search term...</p>
							<FontAwesomeIcon className="classes__no-results-icon" icon={faFaceDisappointed} />
						</div>
					)}
					{paginatedClasses.map(cls => {
						const setTest = setTests?.find(st => st.classNumber === cls.number);

						return (
							<motion.li
								className="classes__list-item"
								key={cls.number}
								variants={{
									hidden: { opacity: 0, y: 10 },
									visible: { opacity: 1, y: 0 },
								}}
							>
								<Class cls={cls} setTest={setTest} />
							</motion.li>
						);
					})}
				</motion.ul>
			</AnimatePresence>
			<div className="pagination">
				{totalPages > 1 && (
					<div className="classes__pagination-controls pagination-controls">
						<button
							type="button"
							className={clsx("pagination-controls__control", {
								"pagination-controls__control--inactive": currentPage === 1,
							})}
							onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
							disabled={currentPage === 1}
						>
							Previous
						</button>
						<div className="pagination-controls__page-numbers">
							{isMobile ? (
								<button
									type="button"
									className="pagination-controls__page-number pagination-controls__page-number--active"
								>
									{`Page ${currentPage} of ${totalPages}`}
								</button>
							) : (
								Array.from({ length: totalPages }, (_, i) => (
									<button
										type="button"
										key={i}
										onClick={() => setCurrentPage(i + 1)}
										className={clsx("pagination-controls__page-number", {
											"pagination-controls__page-number--active": currentPage === i + 1,
										})}
									>
										{i + 1}
									</button>
								))
							)}
						</div>
						<button
							type="button"
							className={clsx("pagination-controls__control", {
								"pagination-controls__control--inactive": currentPage === totalPages,
							})}
							onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
							disabled={currentPage === totalPages}
						>
							Next
						</button>
					</div>
				)}
				<div>
					<Select
						id="results-per-page"
						label="Results per page"
						value={String(itemsPerPage)}
						onValueChange={v => (v === "All" ? setItemsPerPage("All") : setItemsPerPage(Number(v)))}
						options={[
							{ value: "12", label: "12" },
							{ value: "24", label: "24" },
							{ value: "36", label: "36" },
							{ value: "48", label: "48" },
							{ value: "60", label: "60" },
							{ value: "All", label: "All" },
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default Classes;
