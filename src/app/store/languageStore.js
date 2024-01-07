import { create } from "zustand";

const useLanguageStore = create((set) => ({
	language:
		typeof window !== "undefined"
			? localStorage.getItem("language") || "en"
			: "en",
	setLanguage: (newLanguage) => {
		set({ language: newLanguage });
		if (typeof window !== "undefined") {
			localStorage.setItem("language", newLanguage);
		}
	},
}));

export default useLanguageStore;
