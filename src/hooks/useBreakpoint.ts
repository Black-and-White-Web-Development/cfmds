import { useEffect, useState } from "react";

export const useBreakpoint = (breakpoint = 700) => {
	const [isWithinBreakpoint, setIsWithinBreakpoint] = useState(false);

	useEffect(() => {
		const checkBreakpoint = () => {
			setIsWithinBreakpoint(window.innerWidth <= breakpoint);
		};

		checkBreakpoint();

		window.addEventListener("resize", checkBreakpoint);

		return () => {
			window.removeEventListener("resize", checkBreakpoint);
		};
	}, [breakpoint]);

	return isWithinBreakpoint;
};
