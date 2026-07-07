import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { SITE_NAME_FULL, SITE_DESCRIPTION_FR } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${SITE_NAME_FULL} | Médecine Esthétique à Mohammedia`,
  description: SITE_DESCRIPTION_FR,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME_FULL} | Médecine Esthétique à Mohammedia`,
    description: SITE_DESCRIPTION_FR,
    url: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
