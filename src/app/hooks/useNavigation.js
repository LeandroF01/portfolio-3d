import { useState, useEffect } from "react";

function useNavigation(LINKS) {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	const [isScreenSmall, setIsScreenSmall] = useState(false);

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			// Verificar qué sección está visible en el scroll
			const activeLink = LINKS?.find(({ route }) => {
				const sectionId = route.substring(2); // Eliminar los primeros dos caracteres de la ruta ("/#")
				const element = document.getElementById(sectionId);

				if (element) {
					const offsetTop = element.offsetTop - 200; // Ajusta el valor para compensar el tamaño de la barra de navegación
					const offsetBottom = offsetTop + element.offsetHeight;
					return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
				}
				return false;
			});

			if (activeLink) {
				setActiveSection(activeLink.route);
			} else {
				setActiveSection("");
			}

			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		// Agregar el listener para el evento scroll
		window.addEventListener("scroll", handleScroll);

		// Limpiar el listener cuando el componente se desmonta
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsScreenSmall(window.innerWidth < 1000);

			const handleScreenResize = () => {
				setIsScreenSmall(window.innerWidth < 1000);
			};

			window.addEventListener("resize", handleScreenResize);

			return () => {
				window.removeEventListener("resize", handleScreenResize);
			};
		}
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const handleScreenResize = () => {
		setIsScreenSmall(window.innerWidth < 1000);
	};

	return {
		isMenuOpen,
		activeSection,
		isScreenSmall,
		scrolled,
		toggleMenu,
	};
}

export default useNavigation;
