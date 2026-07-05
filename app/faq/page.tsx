import Link from "next/link";

export default function FaqIndexPage() {
  return (
    <main className="min-h-screen bg-[#f6f4f1] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-4xl font-semibold text-black md:text-5xl">
          Foire aux questions
        </h1>

        <p className="mt-6 text-center text-lg text-zinc-700">
          Choisissez une catégorie pour consulter les questions fréquentes.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/faq/epilation-laser"
            className="rounded-[1.5rem] border border-black/10 bg-white p-6 text-xl font-medium transition hover:-translate-y-1"
          >
            FAQ épilation laser
          </Link>

          <Link
            href="/faq/medecine-esthetique"
            className="rounded-[1.5rem] border border-black/10 bg-white p-6 text-xl font-medium transition hover:-translate-y-1"
          >
            FAQ médecine esthétique
          </Link>

          <Link
            href="/faq/peau"
            className="rounded-[1.5rem] border border-black/10 bg-white p-6 text-xl font-medium transition hover:-translate-y-1"
          >
            FAQ peau
          </Link>

          <Link
            href="/faq/cheveux"
            className="rounded-[1.5rem] border border-black/10 bg-white p-6 text-xl font-medium transition hover:-translate-y-1"
          >
            FAQ cheveux
          </Link>

          <Link
            href="/faq/silhouette"
            className="rounded-[1.5rem] border border-black/10 bg-white p-6 text-xl font-medium transition hover:-translate-y-1 md:col-span-2"
          >
            FAQ silhouette
          </Link>
        </div>
      </div>
    </main>
  );
}