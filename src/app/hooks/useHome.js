import { useState, useEffect } from "react";

import useLanguageStore from "../store/languageStore";
import textES from "../../json/text-es.json";
import textEN from "../../json/text-en.json";

function useHome() {
	const { language, setLanguage } = useLanguageStore();

	const text1 = (language === "en" ? textEN : textES).home.text1;
	const letter1 = text1
		.split("")
		.map((letter) => (letter === " " ? "\u00A0" : letter));

	const text2 = (language === "en" ? textEN : textES).home.text2;
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
