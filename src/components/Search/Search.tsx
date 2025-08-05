import { faMagnifyingGlass } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "radix-ui";

import "./Search.scss";

interface SearchProps {
	id: string;
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	label?: string;
	className?: string;
}

const Search = ({
	id,
	value,
	onChange,
	placeholder = "Search...",
	label = "Search",
	className = "",
}: SearchProps) => {
	return (
		<div className={`search ${className}`}>
			<Label.Root className="search__label visually-hidden" htmlFor={id}>
				{label}
			</Label.Root>
			<FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
			<input
				id={id}
				className="search__input"
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	);
};

export default Search;
