import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE_NAME_FULL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Rendez-vous",
  description:
    "Contactez Iconic Clinic à Mohammedia par téléphone, WhatsApp ou email pour prendre rendez-vous avec le Dr Ahmed Marzouk.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${SITE_NAME_FULL}`,
    description:
      "Contactez Iconic Clinic à Mohammedia par téléphone, WhatsApp ou email pour prendre rendez-vous avec le Dr Ahmed Marzouk.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f4f1] px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Iconic Clinic
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-black md:text-5xl">
        Contactez-nous
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-700">
        Vous pouvez nous contacter pour plus d&apos;informations ou pour
        prendre rendez-vous avec le Dr Ahmed Marzouk.
      </p>

      <div className="mx-auto mt-12 flex max-w-md flex-col gap-4">
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nous contacter sur WhatsApp"
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-4 text-base font-medium text-white transition hover:bg-zinc-800"
        >
          Nous contacter sur WhatsApp
        </a>

        <a
          href={`tel:${CONTACT.phone}`}
          aria-label={`Appeler Iconic Clinic au ${CONTACT.phoneDisplay}`}
          className="inline-flex items-center justify-center rounded-full border border-black px-6 py-4 text-base font-medium text-black transition hover:bg-black hover:text-white"
        >
          {CONTACT.phoneDisplay}
        </a>

        <a
          href={`mailto:${CONTACT.email}`}
          aria-label={`Envoyer un email à ${CONTACT.email}`}
          className="inline-flex items-center justify-center rounded-full border border-black px-6 py-4 text-base font-medium text-black transition hover:bg-black hover:text-white"
        >
          {CONTACT.email}
        </a>
      </div>

      <div className="mx-auto mt-14 max-w-xl rounded-3xl border border-black/10 bg-white p-8 text-left shadow-sm">
        <h2 className="text-xl font-semibold text-black">
          Adresse & horaires
        </h2>
        <p className="mt-3 leading-7 text-zinc-700">
          {CONTACT.streetAddress}
          <br />
          {CONTACT.addressLocality} {CONTACT.postalCode}, Maroc
        </p>
        <p className="mt-4 leading-7 text-zinc-700">
          Lundi – Vendredi : 09h30 – 19h00
          <br />
          Samedi : 09h30 – 14h00
          <br />
          Dimanche : Fermé
        </p>
        <a
          href={CONTACT.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex text-sm font-medium text-black underline underline-offset-4"
        >
          Voir sur Google Maps
        </a>
      </div>

      <Link
        href="/"
        className="mt-12 inline-flex text-sm font-medium text-zinc-600 underline underline-offset-4 hover:text-black"
      >
        ← Retour à l&apos;accueil
      </Link>
    </main>
  );
}
