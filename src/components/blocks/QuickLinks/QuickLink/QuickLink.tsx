import { Link } from "react-router-dom";

import { formatDate } from "@/util/formateDate";

import "./QuickLink.scss";

interface QuickLinkProps {
	href: string;
	label: string;
	imageUrl: string;
	dates: {
		id: number;
		startDate: string;
		endDate?: string;
	}[];
	classes: number;
}

const QuickLink = ({ href, label, imageUrl, dates, classes }: QuickLinkProps) => {
	return (
		<Link className="quick-link" to={href}>
			<div className="quick-link__label">
				<h3 className="quick-link__title">
					{label}
					<span className="quick-link__classes">{classes} classes</span>
				</h3>
				<div className="quick-link__dates">
					{dates &&
						dates.map(date => (
							<time className="quick-link__date" key={date.id}>
								{formatDate(date.startDate)}
								{date.endDate && ` - ${formatDate(date.endDate)}`}
							</time>
						))}
				</div>
			</div>
			<img className="quick-link__image" aria-hidden src={imageUrl} alt="" />
		</Link>
	);
};

export default QuickLink;
