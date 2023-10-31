import { useState, useEffect } from "react";

function useHome() {
	const text1 = "Hello, I'm Leandro Farias";
	const letter1 = text1
		.split("")
		.map((letter) => (letter === " " ? "\u00A0" : letter));

	const text2 = "Front-End Developer";
	const letter2 = text2
		.split("")
		.map((letter) => (letter === " " ? "\u00A0" : letter));

	const delayIncrement = 0.03;
	const letter2Delay = letter1.length * delayIncrement;

	const [scale, setScale] = useState(
		typeof window !== "undefined" ? (window.innerWidth >= 700 ? 5 : 2) : 2
	);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setScale(window.innerWidth >= 700 ? 5 : 2);
			window.addEventListener("resize", handleResize);
		}

		// Define la función handleResize
		function handleResize() {
			if (typeof window !== "undefined") {
				setScale(window.innerWidth >= 700 ? 5 : 2);
			}
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	const [isClicked, setIsClicked] = useState(false);

	const [isHovered, setIsHovered] = useState(false);

	const handleButtonClick = () => {
		setIsClicked(!isClicked);
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return {
		text1,
		letter1,
		text2,
		letter2,
		delayIncrement,
		letter2Delay,
		scale,
		isClicked,
		isHovered,
		handleButtonClick,
		handleMouseEnter,
		handleMouseLeave,
	};
}

export default useHome;
