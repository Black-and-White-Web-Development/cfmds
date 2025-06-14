import { useEffect, useState } from "react";

import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Dialog } from "radix-ui";
import { useLocation } from "react-router-dom";

import Navigation from "@/components/Navigation";
import "./NavigationDialog.scss";

const NavigationDialog = function () {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setOpen(false);
	}, [location]);

	return (
		<div className="nav-dialog">
			<Dialog.Root open={open} onOpenChange={setOpen}>
				<Dialog.Trigger asChild>
					<button
						type="button"
						className="nav-dialog__action nav-dialog__action--trigger"
						aria-label="Open navigation menu"
					>
						<HamburgerMenuIcon className="nav-dialog__icon" />
					</button>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className="nav-dialog__overlay" />
					<Dialog.Content className="nav-dialog__content">
						<header className="nav-dialog__header">
							<Dialog.Close asChild>
								<button
									type="button"
									className="nav-dialog__action nav-dialog__action--close"
									aria-label="Close navigation menu"
								>
									<Cross1Icon className="nav-dialog__icon" />
								</button>
							</Dialog.Close>
						</header>
						<Navigation />
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
};

export default NavigationDialog;
