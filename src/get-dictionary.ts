import "server-only";
import type { Locale } from "./i18n-config";
import { Dictionary } from "@/app/types/dictionary";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  bs: () => import("./dictionaries/bs.json").then((module) => module.default),
};

export const getDictionary: (locale: Locale) => Promise<Dictionary> = async (
  locale: Locale
) => dictionaries[locale]();
