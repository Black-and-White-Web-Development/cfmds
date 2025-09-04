import { useEffect, useState } from "react";

import { ArrowRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useStrapiData } from "@/hooks/useStrapiData";

import "./AnnouncementBar.scss";

interface AnnouncementBarProps {
	body: string;
	link?: {
		label: string;
		href: string;
		isExternal: boolean;
	};
	isActive: boolean;
}

const AnnouncementBar = () => {
	const { data, loading, error } = useStrapiData<AnnouncementBarProps>("announcement");
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (data?.isActive) {
			setIsVisible(true);
		}
	}, [data]);

	if (loading || error || !data) {
		return null;
	}

	const handleClose = () => setIsVisible(false);

	const { body, link } = data;

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.aside
					className="announcement-bar fb-col-wrapper"
					role="status"
					initial={{ y: "-25%", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: "-25%", opacity: 0 }}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
				>
					<div className="announcement-bar__container">
						<p className="announcement-bar__body">
							{body}{" "}
							{link &&
								(link.isExternal ? (
									<a
										className="announcement-bar__link announcement-bar__link--external"
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										{link.label}
										<ArrowRightIcon className="announcement-bar__icon" />
									</a>
								) : (
									<Link to={link.href} className="announcement-bar__link" onClick={handleClose}>
										{link.label}
										<ArrowRightIcon className="announcement-bar__icon" />
									</Link>
								))}
						</p>
						<button className="announcement-bar__close-button" type="button" onClick={handleClose}>
							Dismiss
							<Cross1Icon className="announcement-bar__icon" />
						</button>
					</div>
				</motion.aside>
			)}
		</AnimatePresence>
	);
};

export default AnnouncementBar;
