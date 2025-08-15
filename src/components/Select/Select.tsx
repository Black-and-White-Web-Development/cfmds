import { faChevronDown } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select as SelectPrimitive } from "radix-ui";

import "./Select.scss";

interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

interface SelectProps {
	id: string;
	label?: string;
	value: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
	options: SelectOption[];
	"aria-label"?: string;
	ref?: React.Ref<HTMLButtonElement>;
}

const Select = ({
	id,
	label,
	value,
	defaultValue,
	onValueChange,
	options,
	"aria-label": ariaLabel,
	ref,
}: SelectProps) => {
	const selectId = id || `select-${Math.random()}`;

	return (
		<div className="select">
			{label && (
				<label className="select__label" htmlFor={selectId}>
					{label}
				</label>
			)}
			<SelectPrimitive.Root value={value} onValueChange={onValueChange} defaultValue={defaultValue}>
				<SelectPrimitive.Trigger
					ref={ref}
					className="select__trigger"
					aria-label={ariaLabel || label}
					id={selectId}
				>
					<SelectPrimitive.Value placeholder={value} />
					<SelectPrimitive.Icon className="select__icon">
						<FontAwesomeIcon icon={faChevronDown} />
					</SelectPrimitive.Icon>
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Content className="select__content">
						<SelectPrimitive.Viewport className="select__viewport">
							{options.map(option => (
								<SelectPrimitive.Item
									key={option.value}
									className="select__item"
									value={option.value}
									disabled={option.disabled}
								>
									<SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</SelectPrimitive.Portal>
			</SelectPrimitive.Root>
		</div>
	);
};

export default Select;
