import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]?.() ?? dictionaries.en();
