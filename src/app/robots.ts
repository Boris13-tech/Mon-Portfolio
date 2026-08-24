import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "Google-Extended",
          "PerplexityBot",
          "Omgili",
          "Omgilibot",
          "FacebookBot",
          "Bytespider"
        ],
        disallow: ["/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
