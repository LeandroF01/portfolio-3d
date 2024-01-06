import { create } from "zustand";

const useLanguageStore = create((set) => ({
	language: localStorage.getItem("language") || "en",
	setLanguage: (newLanguage) => {
		set({ language: newLanguage });
		localStorage.setItem("language", newLanguage);
	},
}));

export default useLanguageStore;
