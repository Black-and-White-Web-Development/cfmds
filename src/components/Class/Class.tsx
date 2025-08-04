import { faCakeCandles } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { faPeopleGroup } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { faTicket } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { faTimer } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { faTrophy } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Class as ClassType } from "@/types/class.types";

import "./Class.scss";

interface ClassProps {
	cls: ClassType;
}

function formatMoney(value: string | number): string {
	const number = typeof value === "string" ? parseFloat(value) : value;

	if (isNaN(number)) return "£0.00";

	return new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	}).format(number);
}

const Class = ({ cls }: ClassProps) => {
	return (
		<article key={cls.number} className="class">
			<header className="class__header">
				<span className="class__number">{cls.number}</span>
				<h3 className="class__heading">{cls.name}</h3>
			</header>
			<dl className="class__description-list">
				{(cls.minAge !== "0" || cls.maxAge !== "0") && (
					<div className="class__description-list-item">
						<FontAwesomeIcon className="class__icon" icon={faCakeCandles} />
						<dt className="class__term">Ages</dt>
						<dd className="class__details">
							{cls.minAge !== "0" && cls.maxAge !== "0" && `${cls.minAge}-${cls.maxAge} years`}
							{cls.minAge !== "0" && cls.maxAge === "0" && `${cls.minAge} years and above`}
							{cls.minAge === "0" && cls.maxAge !== "0" && `${cls.maxAge} and under`}
						</dd>
					</div>
				)}
				{(cls.minGroupSize || cls.maxGroupSize) && (
					<div className="class__description-list-item">
						<FontAwesomeIcon className="class__icon" icon={faPeopleGroup} />
						<dt className="class__term">Group size</dt>
						<dd className="class__details">
							{cls.minGroupSize !== "0" &&
							cls.maxGroupSize !== "0" &&
							cls.minGroupSize !== cls.maxGroupSize
								? `${cls.minGroupSize}-${cls.maxGroupSize} performers`
								: cls.minGroupSize === cls.maxGroupSize
								? `${cls.minGroupSize} performers`
								: cls.minGroupSize !== "0" && cls.maxGroupSize
								? `${cls.minGroupSize} or more performers`
								: cls.minGroupSize && cls.maxGroupSize !== "0"
								? `${cls.maxGroupSize} or fewer performers`
								: "No limits"}
						</dd>
					</div>
				)}
				{cls.maxDuration !== "0" && (
					<div className="class__description-list-item">
						<FontAwesomeIcon className="class__icon" icon={faTimer} />
						<dt className="class__term">Time limit</dt>
						<dd className="class__details">{cls.maxDuration} minutes</dd>
					</div>
				)}
				{cls.award && (
					<div className="class__description-list-item">
						<FontAwesomeIcon className="class__icon" icon={faTrophy} />
						<dt className="class__term">Award</dt>
						<dd className="class__details">{cls.award}</dd>
					</div>
				)}
				{cls.fee !== "0" && (
					<div className="class__description-list-item">
						<FontAwesomeIcon className="class__icon" icon={faTicket} transform={{ rotate: 45 }} />
						<dt className="class__term">Entry fee</dt>
						<dd className="class__details">{formatMoney(cls.fee)}</dd>
					</div>
				)}
				{cls.groupFee !== "0" && (
					<div className="class__description-list-item">
						<FontAwesomeIcon className="class__icon" icon={faTicket} />
						<dt className="class__term">Entry fee</dt>
						<dd className="class__details">
							{formatMoney(cls.groupFee)}
							{cls.groupFeeType && ` ${cls.groupFeeType.toLowerCase()}`}
						</dd>
					</div>
				)}
			</dl>
			<p>{cls.description}</p>
		</article>
	);
};

export default Class;
