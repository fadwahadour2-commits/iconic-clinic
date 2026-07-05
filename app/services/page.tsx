import Image from "next/image";
import Link from "next/link";

const serviceCategories = [
  {
    category: "Visage & Corps",
    items: [
      {
        title: "Endolift",
        text: "Technique mini-invasive utilisant l’énergie laser pour raffermir la peau, redessiner les contours et améliorer le relâchement cutané du visage ou du corps.",
      },
      {
        title: "Smart Lipo",
        text: "Solution avancée de remodelage permettant de cibler les amas graisseux localisés tout en favorisant un effet tenseur sur la peau.",
      },
      {
        title: "Soins esthétiques du visage",
        text: "Protocoles personnalisés pour hydrater, illuminer, lisser et améliorer la qualité globale de la peau selon les besoins de chaque patient.",
      },
      {
        title: "Fils tenseurs (PDO, PCL, PLA)",
        text: "Traitement visant à retendre les tissus, redéfinir l’ovale du visage et stimuler la production naturelle de collagène.",
      },
      {
        title: "Injections d’acide hyaluronique (fillers)",
        text: "Permettent de restaurer les volumes, corriger certaines rides et harmoniser les contours du visage avec un rendu naturel.",
      },
      {
        title: "Skin boosters (Profhilo, Jalupro, etc.)",
        text: "Micro-injections revitalisantes destinées à améliorer l’hydratation, l’élasticité et l’éclat de la peau en profondeur.",
      },
      {
        title: "Botox",
        text: "Traitement de référence pour lisser les rides d’expression, prévenir leur installation et adoucir les traits du visage.",
      },
    ],
  },
  {
    category: "Laser & traitements de la peau",
    items: [
      {
        title: "Laser acné",
        text: "Aide à réduire l’inflammation, améliorer l’aspect des imperfections et assainir la peau sujette à l’acné.",
      },
      {
        title: "Laser anti-taches",
        text: "Cible les taches pigmentaires pour unifier le teint et redonner plus d’éclat à la peau.",
      },
      {
        title: "Laser carbone",
        text: "Soin esthétique purifiant et illuminateur qui resserre l’apparence des pores, améliore la texture cutanée et ravive l’éclat du visage.",
      },
      {
        title: "Oxygénéo",
        text: "Traitement oxygénant et revitalisant conçu pour exfolier, nourrir et redonner fraîcheur et luminosité à la peau.",
      },
    ],
  },
  {
    category: "Silhouette",
    items: [
      {
        title: "Smart Lipo",
        text: "Permet de traiter certaines zones graisseuses localisées et de contribuer à une silhouette plus harmonieuse.",
      },
      {
        title: "Endolift",
        text: "Approche ciblée pour raffermir la peau et améliorer certaines zones relâchées du corps sans chirurgie lourde.",
      },
      {
        title: "Lipofilling",
        text: "Technique utilisant la propre graisse du patient pour restaurer ou améliorer certains volumes de manière naturelle.",
      },
      {
        title: "Filler body",
        text: "Injections destinées à corriger ou améliorer le volume de certaines zones du corps avec un résultat équilibré.",
      },
      {
        title: "Skin boosters",
        text: "Soins injectables pouvant améliorer l’hydratation et la qualité de la peau sur certaines zones corporelles.",
      },
    ],
  },
  {
    category: "Cheveux",
    items: [
      {
        title: "Skin boosters capillaires",
        text: "Protocoles revitalisants visant à améliorer la qualité du cuir chevelu et à soutenir la densité capillaire.",
      },
      {
        title: "Mésothérapie capillaire",
        text: "Micro-injections de complexes nutritifs pour stimuler le cuir chevelu et renforcer les cheveux fragilisés.",
      },
      {
        title: "PRP (plasma riche en plaquettes)",
        text: "Traitement régénératif utilisant les propres ressources biologiques du patient pour stimuler la repousse et améliorer la vitalité capillaire.",
      },
    ],
  },
  {
    category: "Épilation & autres lasers",
    items: [
      {
        title: "Épilation laser",
        text: "Solution durable pour réduire progressivement la pilosité et obtenir une peau plus nette et confortable.",
      },
      {
        title: "Laser anti-champignons",
        text: "Traitement laser ciblé utilisé dans certains cas pour accompagner la prise en charge des atteintes unguéales fongiques.",
      },
      {
        title: "Autres lasers spécifiques",
        text: "La clinique propose également des indications laser ciblées selon les besoins, incluant certains traitements spécialisés comme la prise en charge des hémorroïdes.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f3] text-zinc-900">
      <header className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/new-hero.jpg"
          alt="Iconic Clinic Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute left-0 top-0 z-20 w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                Iconic Clinic
              </p>
              <h1 className="text-lg font-semibold">Dr Ahmed Marzouk</h1>
            </div>

            <nav className="hidden gap-8 text-sm text-white/90 md:flex">
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-20 text-white">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/70">
              Médecine esthétique
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Nos prestations esthétiques
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              Découvrez l’ensemble des soins proposés par Iconic Clinic pour le
              visage, le corps, la peau, les cheveux et les traitements laser.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8 text-sm text-zinc-500">
        <p>Accueil &gt; Services &gt; Médecine esthétique</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="space-y-16">
          {serviceCategories.map((group) => (
            <section key={group.category}>
              <div className="mb-8 max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Services
                </p>
                <h3 className="mt-2 text-3xl font-semibold md:text-4xl">
                  {group.category}
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5efe7] text-lg">
                      ✦
                    </div>

                    <h4 className="text-xl font-semibold leading-snug">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Contact
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-5xl">
              Prenez rendez-vous pour une première consultation.
            </h3>
          </div>

          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </main>
  );
}