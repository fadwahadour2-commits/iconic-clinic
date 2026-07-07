import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site-config";

const ALBUMS: Record<
  string,
  { titleFr: string; titleAr: string; cover: string }
> = {
  "avant-apres": {
    titleFr: "Avant / Après",
    titleAr: "قبل / بعد",
    cover: "/clinic.jpg",
  },
  cabinet: {
    titleFr: "Cabinet",
    titleAr: "العيادة",
    cover: "/doctor.jpg",
  },
  "promotions-du-mois": {
    titleFr: "Promotions du mois",
    titleAr: "عروض الشهر",
    cover: "/clinic.jpg",
  },
};

export function generateStaticParams() {
  return Object.keys(ALBUMS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const album = ALBUMS[slug];

  if (!album) {
    return { title: "Album introuvable" };
  }

  const title = `${album.titleFr} | Iconic Clinic`;
  const description = `Découvrez l'album "${album.titleFr}" d'Iconic Clinic, clinique de médecine esthétique à Mohammedia.`;

  return {
    title,
    description,
    alternates: { canonical: `/albums/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/albums/${slug}`,
      images: [{ url: album.cover }],
    },
  };
}

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const album = ALBUMS[slug];

  if (!album) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f6f3] text-zinc-900">
      <header className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src={album.cover}
          alt={album.titleFr}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-10 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              Iconic Clinic — Album
            </p>
            <h1 className="mt-2 text-4xl font-semibold md:text-5xl">
              {album.titleFr}
            </h1>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8 text-sm text-zinc-500">
        <p>
          <Link href="/" className="hover:text-black">
            Accueil
          </Link>{" "}
          &gt; Albums &gt; {album.titleFr}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <p className="text-lg leading-8 text-zinc-700">
          Les photos de cet album seront bientôt disponibles. En attendant,
          contactez-nous pour en savoir plus ou prendre rendez-vous.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          Nous contacter
        </Link>
      </section>
    </main>
  );
}
