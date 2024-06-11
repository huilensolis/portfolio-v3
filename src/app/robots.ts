import { BASE_URL } from "@/app/sitemap";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
