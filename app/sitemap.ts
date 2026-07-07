import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
    {
      path: "/faq/medecine-esthetique",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    { path: "/faq/peau", changeFrequency: "monthly" as const, priority: 0.6 },
    {
      path: "/faq/cheveux",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      path: "/faq/silhouette",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      path: "/faq/epilation-laser",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      path: "/albums/avant-apres",
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      path: "/albums/cabinet",
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      path: "/albums/promotions-du-mois",
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
