import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/about", "/projects", "/certifications", "/speaking", "/community", "/contributions", "/contact"];
  const staticEntries = routes.map((r) => ({ url: `${site.url}${r}`, lastModified: now, changeFrequency: "monthly" as const, priority: r === "" ? 1 : 0.7 }));
  const projectEntries = projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.8 }));
  return [...staticEntries, ...projectEntries];
}
