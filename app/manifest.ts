import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_NAME_FULL } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME_FULL,
    short_name: SITE_NAME,
    description:
      "Clinique de médecine esthétique à Mohammedia — Dr Ahmed Marzouk.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f6f3",
    theme_color: "#111111",
    lang: "fr",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
