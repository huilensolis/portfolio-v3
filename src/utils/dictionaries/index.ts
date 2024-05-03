import "server-only";

import { SUPPORTED_LANGS } from "../consts";

const dictionaries: Record<
  (typeof SUPPORTED_LANGS)[number],
  () => Promise<any>
> = {
  en: () => import("./en.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
