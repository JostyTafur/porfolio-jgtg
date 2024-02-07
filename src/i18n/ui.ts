import SpainFlag from "@/icons/Spain.astro";
import UnitedStatesFlag from "@/icons/UnitedStates.astro"

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.experience": "experience",
    "nav.projects": "projects",
    "nav.about-me": "about-me",
  },
  en: {
    "nav.experience": "experiencia",
    "nav.projects": "proyectos",
    "nav.about-me": "sobre-mi",
  }
} as const;

export const routes = {
  es: {
    experience: "experiencia",
    projects: "proyectos",
    aboutme: "sobre-mi",
  },
  en: {
    experience: "experience",
    projects: "projects",
    aboutme: "about-me",
  },
};
