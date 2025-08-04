import { useMemo, useRef, useState } from "react";

import { faList } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { faGrid2 } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { faMagnifyingGlass } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { Label } from "radix-ui";
import { ToggleGroup } from "radix-ui";
import { Toolbar } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import Class from "@/components/Class";

import type { Class as ClassType } from "@/types/class.types";

import "./Classes.scss";

interface ClassesProps {
	classes: ClassType[];
}

const Classes = ({ classes }: ClassesProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [view, setView] = useState("grid");

	const isTablet = useBreakpoint();
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
				{!isTablet && (
					<div className="tools__display tool">
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
					{filteredClasses.length === 0 && <p>No classes found.</p>}
					{filteredClasses.map(cls => (
						<Class key={cls.number} cls={cls} />
					))}
				</motion.div>
			</AnimatePresence>
		</section>
	);
};

export default Classes;
