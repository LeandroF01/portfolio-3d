import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const targetRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting);
		}, options);

		const currentTarget = targetRef.current; // Copia el valor de targetRef.current
		if (currentTarget) {
			observer.observe(currentTarget);
		}

		return () => {
			if (currentTarget) {
				observer.unobserve(currentTarget);
			}
		};
	}, [options]);

	return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
