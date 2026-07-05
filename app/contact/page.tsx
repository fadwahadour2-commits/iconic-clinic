export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f4f1] px-6 py-20 text-center">
      <h1 className="text-4xl font-semibold text-black">Contact</h1>
      <p className="mt-6 text-lg text-zinc-700">
        Vous pouvez nous contacter pour plus d’informations ou prendre rendez-vous.
      </p>

      <a
        href="https://wa.me/212687027233"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex rounded-full bg-black px-6 py-3 text-white"
      >
        Nous contacter sur WhatsApp
      </a>
    </main>
  );
}