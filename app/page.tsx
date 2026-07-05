"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const services = {
  fr: [
    {
      title: "Médecine esthétique",
      text: "Des soins personnalisés pour sublimer le visage tout en respectant l’harmonie naturelle.",
    },
    {
      title: "Soins de la peau",
      text: "Protocoles experts pour améliorer l’éclat, la texture et la qualité de la peau.",
    },
    {
      title: "Silhouette",
      text: "Approches modernes pour affiner, raffermir et harmoniser certaines zones du corps.",
    },
    {
      title: "Cheveux",
      text: "Solutions ciblées pour améliorer l’apparence et la densité capillaire.",
    },
  ],
  ar: [
    {
      title: "الطب التجميلي",
      text: "علاجات مخصصة لإبراز جمال الوجه مع الحفاظ على التناسق الطبيعي.",
    },
    {
      title: "العناية بالبشرة",
      text: "بروتوكولات متخصصة لتحسين إشراقة البشرة وملمسها وجودتها.",
    },
    {
      title: "القوام",
      text: "حلول حديثة لنحت الجسم وشد المناطق وتحسين التناسق.",
    },
    {
      title: "الشعر",
      text: "حلول موجهة لتحسين مظهر الشعر وكثافته.",
    },
  ],
};

const bookingServices = {
  fr: [
    "Médecine esthétique",
    "Soins de la peau",
    "Silhouette",
    "Cheveux",
  ],
  ar: [
    "الطب التجميلي",
    "العناية بالبشرة",
    "القوام",
    "الشعر",
  ],
};

const faqs = {
  fr: [
    {
      q: "Comment prendre rendez-vous ?",
      a: "Vous pouvez nous contacter par WhatsApp ou remplir le formulaire de rendez-vous ci-dessous.",
    },
    {
      q: "Le diagnostic est-il personnalisé ?",
      a: "Oui, chaque patient bénéficie d’une évaluation personnalisée selon ses besoins et ses attentes.",
    },
    {
      q: "Les résultats sont-ils naturels ?",
      a: "Notre approche privilégie toujours l’harmonie du visage et du corps avec des résultats élégants et naturels.",
    },
  ],
  ar: [
    {
      q: "كيف يمكنني حجز موعد؟",
      a: "يمكنك التواصل معنا عبر واتساب أو ملء استمارة حجز الموعد أسفل الصفحة.",
    },
    {
      q: "هل التشخيص شخصي؟",
      a: "نعم، كل مريض يستفيد من تشخيص مخصص حسب حاجياته وتطلعاته.",
    },
    {
      q: "هل النتائج طبيعية؟",
      a: "مقاربتنا تعتمد دائماً على التوازن الجمالي والنتائج الطبيعية والأنيقة.",
    },
  ],
};

const albums = {
  fr: [
    {
      slug: "avant-apres",
      title: "Avant / Après",
      cover: "/clinic.jpg",
    },
    {
      slug: "cabinet",
      title: "Cabinet",
      cover: "/doctor.jpg",
    },
    {
      slug: "promotions-du-mois",
      title: "Promotions du mois",
      cover: "/clinic.jpg",
    },
  ],
  ar: [
    {
      slug: "avant-apres",
      title: "قبل / بعد",
      cover: "/clinic.jpg",
    },
    {
      slug: "cabinet",
      title: "العيادة",
      cover: "/doctor.jpg",
    },
    {
      slug: "promotions-du-mois",
      title: "عروض الشهر",
      cover: "/clinic.jpg",
    },
  ],
};

export default function Home() {
  const [lang, setLang] = useState<"fr" | "ar">("fr");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);

  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    phone: "",
    question: "",
  });

  const isArabic = lang === "ar";

  const openBookingModal = () => {
    setShowBookingModal(true);
    setBookingStep(1);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
  };

  const handleBookingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setBookingData((prev) => ({
      ...prev,
      date: newDate,
      time: "",
    }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = bookingData.date;
    const selectedTime = e.target.value;

    if (!selectedDate) {
      alert(isArabic ? "اختاري التاريخ أولاً" : "Choisissez la date d’abord");
      return;
    }

    const day = new Date(selectedDate).getDay();

    let min = "09:30";
    let max = "19:00";

    if (day === 6) {
      max = "14:00";
    }

    if (day === 0) {
      alert(isArabic ? "الأحد مغلق" : "Dimanche fermé");
      return;
    }

    if (selectedTime < min || selectedTime > max) {
      alert(
        isArabic
          ? `الوقت غير متاح (${min} - ${max})`
          : `Heure invalide (${min} - ${max})`
      );
      return;
    }

    setBookingData((prev) => ({ ...prev, time: selectedTime }));
  };

  const getWorkingHoursLabel = () => {
    if (!bookingData.date) {
      return isArabic
        ? "من الإثنين إلى الجمعة: 09:30 - 19:00 | السبت: 09:30 - 14:00 | الأحد مغلق"
        : "Lundi au vendredi : 09:30 - 19:00 | Samedi : 09:30 - 14:00 | Dimanche fermé";
    }

    const day = new Date(bookingData.date).getDay();

    if (day === 0) {
      return isArabic ? "الأحد: مغلق" : "Dimanche : fermé";
    }

    if (day === 6) {
      return isArabic ? "السبت: 09:30 - 14:00" : "Samedi : 09:30 - 14:00";
    }

    return isArabic
      ? "من الإثنين إلى الجمعة: 09:30 - 19:00"
      : "Lundi au vendredi : 09:30 - 19:00";
  };

  const submitBookingToWhatsApp = () => {
    const message = isArabic
      ? `مرحبا، أريد حجز موعد.
الخدمة: ${bookingData.service}
التاريخ: ${bookingData.date}
الساعة: ${bookingData.time}
الاسم: ${bookingData.firstName}
النسب: ${bookingData.lastName}
الهاتف: ${bookingData.phone}
السؤال: ${bookingData.question}`
      : `Bonjour, je souhaite prendre un rendez-vous.
Service: ${bookingData.service}
Date: ${bookingData.date}
Heure: ${bookingData.time}
Prénom: ${bookingData.firstName}
Nom: ${bookingData.lastName}
Téléphone: ${bookingData.phone}
Question: ${bookingData.question}`;

    window.open(
      `https://wa.me/212687027233?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setBookingData({
      service: "",
      date: "",
      time: "",
      firstName: "",
      lastName: "",
      phone: "",
      question: "",
    });
    setBookingStep(1);
    closeBookingModal();
  };

  const t = {
    fr: {
      clinic: "Iconic Clinic",
      doctor: "Dr Ahmed Marzouk",
      navServices: "Services",
      navAbout: "À propos",
      navDoctor: "Médecin",
      navAlbums: "Albums",
      navTestimonials: "Témoignages",
      navFaq: "FAQ",
      navContact: "Contact",
      appointment: "Rendez-vous",
      heroTag: "Clinique esthétique premium",
      heroTitle: "Clinique de médecine esthétique moderne et élégante.",
      heroText:
        "Iconic Clinic propose une expérience haut de gamme avec une approche personnalisée, naturelle et rassurante, portée par l’expertise du Dr Ahmed Marzouk.",
      heroBtn1: "PRENDRE RENDEZ-VOUS",
      heroBtn2: "DÉCOUVRIR LES SOINS",
      stat1: "32+ ans d’expertise",
      stat2: "Casablanca & Mohammedia",
      stat3: "Approche naturelle",
      breadcrumb:
        "Accueil > Clinique > Médecine esthétique > Iconic Clinic",
      welcome: "Bienvenue",
      aboutTitle: "Une clinique au positionnement premium",
      about1:
        "Au cœur du Maroc, le cabinet du Dr Ahmed Marzouk s’impose comme une référence en médecine et chirurgie esthétique, fort de plus de 32 ans d’expertise.",
      about2:
        "Présent à Casablanca depuis plus de 10 ans et à Mohammedia depuis 4 ans, le Dr Marzouk accompagne chaque patient avec une approche sur mesure, alliant excellence médicale, innovation et résultats naturels.",
      about3:
        "Notre mission : révéler la meilleure version de vous-même. Grâce à des technologies de pointe et des protocoles sécurisés, nous sublimons votre visage, votre silhouette et vos cheveux avec précision et élégance.",
      about4: "✨ Chaque détail compte. Chaque patient est unique.",
      about5:
        "Vous hésitez sur le traitement idéal ? Bénéficiez d’un diagnostic personnalisé réalisé par nos experts avec un accompagnement complet.",
      about6: "💎 Offrez-vous l’excellence esthétique.",
      signature: "Signature",
      sig1: "Expérience clinique moderne et élégante",
      sig2: "Résultats naturels et personnalisés",
      sig3: "Environnement premium et rassurant",
      doctorSection: "Le médecin",
      doctorTitle: "Dr Ahmed Marzouk",
      doctorText1:
        "Spécialiste en médecine esthétique, le Dr Ahmed Marzouk accompagne chaque patient avec une approche personnalisée, élégante et centrée sur des résultats naturels.",
      doctorText2:
        "Son expertise repose sur une vision moderne du soin esthétique, alliant précision médicale, écoute et excellence du résultat.",
      doctorPoint1: "✔️ Expertise médicale avancée",
      doctorPoint2: "✔️ Résultats naturels et harmonieux",
      doctorPoint3: "✔️ Accompagnement personnalisé",
      doctorBtn: "Prendre rendez-vous",
      services: "Services",
      servicesTitle: "Des soins pensés pour l’excellence",
      servicesText:
        "Chaque traitement est proposé avec une logique d’équilibre, de précision et de personnalisation.",
      learnMore: "En savoir plus",
      fullServicesBtn: "Voir tous les services",
      albums: "Albums",
      albumsTitle: "Découvrez nos albums",
      albumsText:
        "Explorez nos résultats, notre clinique et les promotions du mois.",
      viewAlbum: "Voir l’album",
      testimonials: "Témoignages",
      testimonialsTitle: "Ce que disent nos patientes",
      testimonialsLink: "Voir tous les avis Google",
      googleTotalLabel: "avis",
      faq: "FAQ",
      faqTitle: "Questions fréquentes",
      form: "Rendez-vous",
      formTitle: "Demander une consultation",
      name: "Nom complet",
      phone: "Téléphone",
      treatment: "Traitement souhaité",
      message: "Message",
      send: "Envoyer la demande",
      contact: "Contact",
      contactTitle: "Prenez rendez-vous pour une première consultation.",
      map: "Localisation",
      mapTitle: "Retrouvez-nous à la clinique",
      mapText:
        "Découvrez l’emplacement de la clinique et préparez facilement votre visite.",
      openMap: "Ouvrir dans Google Maps",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      city: "Casablanca, Maroc",
      whatsapp: "WhatsApp",
      footerClinic: "LA CLINIQUE",
      footerFaq: "Foire aux questions",
      footerConcerns: "Vos préoccupations",
      footerTechniques: "Nos techniques",
      footerContact: "Coordonnées",
      footerMessage: "ENVOYEZ-NOUS UN MESSAGE",
      footerFind: "NOUS TROUVER",
      footerRights: "Tous droits réservés.",
    },
    ar: {
      clinic: "إيكونيك كلينيك",
      doctor: "الدكتور أحمد مرزوق",
      navServices: "الخدمات",
      navAbout: "من نحن",
      navDoctor: "الطبيب",
      navAlbums: "الألبومات",
      navTestimonials: "آراء المرضى",
      navFaq: "الأسئلة الشائعة",
      navContact: "التواصل",
      appointment: "موعد",
      heroTag: "عيادة تجميل راقية",
      heroTitle: "عيادة حديثة وأنيقة في الطب التجميلي.",
      heroText:
        "تقدم Iconic Clinic تجربة فاخرة بمنهجية شخصية وطبيعية ومطمئنة، تحت إشراف وخبرة الدكتور أحمد مرزوق.",
      heroBtn1: "احجز موعدك",
      heroBtn2: "اكتشف العلاجات",
      stat1: "32+ سنة خبرة",
      stat2: "الدار البيضاء والمحمدية",
      stat3: "نتائج طبيعية",
      breadcrumb: "الرئيسية > العيادة > الطب التجميلي > Iconic Clinic",
      welcome: "مرحباً",
      aboutTitle: "عيادة بمكانة راقية",
      about1:
        "في قلب المغرب، يُعد مركز الدكتور أحمد مرزوق مرجعاً في الطب والجراحة التجميلية، بخبرة تتجاوز 32 سنة.",
      about2:
        "متواجد في الدار البيضاء منذ أكثر من 10 سنوات، وفي المحمدية منذ 4 سنوات، ويرافق الدكتور مرزوق كل مريض بمقاربة مخصصة تجمع بين التميز الطبي والابتكار والنتائج الطبيعية.",
      about3:
        "مهمتنا إبراز أفضل نسخة منك. بفضل أحدث التقنيات والبروتوكولات الآمنة، نعمل على تحسين مظهر الوجه والقوام والشعر بدقة وأناقة.",
      about4: "✨ كل تفصيل مهم. كل مريض حالة فريدة.",
      about5:
        "هل تتردد في اختيار العلاج المناسب؟ استفد من تشخيص شخصي يقدمه خبراؤنا مع مواكبة كاملة ونتائج في مستوى تطلعاتك.",
      about6: "💎 امنح نفسك تجربة جمالية راقية.",
      signature: "بصمتنا",
      sig1: "تجربة عيادية حديثة وأنيقة",
      sig2: "نتائج طبيعية ومخصصة",
      sig3: "بيئة راقية ومطمئنة",
      doctorSection: "الطبيب",
      doctorTitle: "الدكتور أحمد مرزوق",
      doctorText1:
        "متخصص في الطب التجميلي، يرافق الدكتور أحمد مرزوق كل مريض بمقاربة شخصية وأنيقة ترتكز على نتائج طبيعية ومتوازنة.",
      doctorText2:
        "ترتكز خبرته على رؤية حديثة للعلاج التجميلي تجمع بين الدقة الطبية، الاستماع الجيد، والحرص على أفضل نتيجة ممكنة.",
      doctorPoint1: "✔️ خبرة طبية متقدمة",
      doctorPoint2: "✔️ نتائج طبيعية ومتناسقة",
      doctorPoint3: "✔️ مواكبة شخصية",
      doctorBtn: "احجز موعداً",
      services: "الخدمات",
      servicesTitle: "علاجات مصممة بإتقان",
      servicesText: "كل علاج يتم وفق التوازن والدقة والتخصيص.",
      learnMore: "اكتشف المزيد",
      fullServicesBtn: "شاهد كل الخدمات",
      albums: "الألبومات",
      albumsTitle: "اكتشف ألبوماتنا",
      albumsText: "استكشف النتائج، العيادة، وعروض الشهر.",
      viewAlbum: "عرض الألبوم",
      testimonials: "آراء المرضى",
      testimonialsTitle: "ماذا تقول مريضاتنا",
      testimonialsLink: "عرض جميع تقييمات Google",
      googleTotalLabel: "تقييمات",
      faq: "الأسئلة الشائعة",
      faqTitle: "الأسئلة الأكثر شيوعاً",
      form: "الموعد",
      formTitle: "اطلب استشارة",
      name: "الاسم الكامل",
      phone: "الهاتف",
      treatment: "العلاج المطلوب",
      message: "الرسالة",
      send: "إرسال الطلب",
      contact: "التواصل",
      contactTitle: "احجز موعدك من أجل أول استشارة.",
      map: "الموقع",
      mapTitle: "موقع العيادة",
      mapText: "اكتشف موقع العيادة وحضّر زيارتك بسهولة.",
      openMap: "افتح في Google Maps",
      addressLabel: "العنوان",
      phoneLabel: "الهاتف",
      city: "الدار البيضاء، المغرب",
      whatsapp: "واتساب",
      footerClinic: "العيادة",
      footerFaq: "الأسئلة الشائعة",
      footerConcerns: "اهتماماتكم",
      footerTechniques: "تقنياتنا",
      footerContact: "معلومات التواصل",
      footerMessage: "أرسلوا لنا رسالة",
      footerFind: "اعثر علينا",
      footerRights: "جميع الحقوق محفوظة.",
    },
  }[lang];

  const currentServices = services[lang];
  const currentBookingServices = bookingServices[lang];
  const currentFaqs = faqs[lang];
  const currentAlbums = albums[lang];

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f8f6f3] text-zinc-900"
    >
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white shadow-xl backdrop-blur-md md:px-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/65">
              {t.clinic}
            </p>
            <h1 className="text-sm font-semibold md:text-base">{t.doctor}</h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/90 md:flex">
            <Link href="/services" className="transition hover:text-white">
              {t.navServices}
            </Link>
            <a href="#about" className="transition hover:text-white">
              {t.navAbout}
            </a>
            <a href="#doctor" className="transition hover:text-white">
              {t.navDoctor}
            </a>
            <a href="#albums" className="transition hover:text-white">
              {t.navAlbums}
            </a>
            <a href="#testimonials" className="transition hover:text-white">
              {t.navTestimonials}
            </a>
            <a href="#faq" className="transition hover:text-white">
              {t.navFaq}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {t.navContact}
            </a>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="rounded-full border border-white/20 bg-white/10 p-1">
              <button
                onClick={() => setLang("fr")}
                className={`rounded-full px-3 py-1.5 text-xs md:text-sm ${
                  lang === "fr" ? "bg-white text-black" : "text-white"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`rounded-full px-3 py-1.5 text-xs md:text-sm ${
                  lang === "ar" ? "bg-white text-black" : "text-white"
                }`}
              >
                AR
              </button>
            </div>

            <button
              onClick={openBookingModal}
              className="hidden rounded-full border border-white/20 bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 md:block"
            >
              {t.appointment}
            </button>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-screen w-full items-center overflow-hidden">
        <Image
          src="/clinic.jpg"
          alt="Iconic Clinic"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.18)_100%)]" />
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-28 text-white md:px-10 md:pt-24">
          <div className="max-w-3xl animate-[fadeIn_1s_ease]">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/65 md:text-sm">
              {t.heroTag}
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.05]">
              {t.heroTitle}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={openBookingModal}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90"
              >
                {t.heroBtn1}
              </button>

              <Link
                href="/services"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white hover:text-black"
              >
                {t.heroBtn2}
              </Link>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[t.stat1, t.stat2, t.stat3].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1"
                  style={{ animation: `fadeUp 0.8s ease ${index * 0.15}s both` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 text-sm text-zinc-500">
        <p>{t.breadcrumb}</p>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div className="rounded-[2rem] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {t.welcome}
            </p>

            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              {t.aboutTitle}
            </h3>

            <div className="mt-6 h-px w-20 bg-gradient-to-r from-black/80 to-transparent" />

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600">
              {t.about1}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">
              {t.about2}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">
              {t.about3}
            </p>
            <p className="mt-5 text-base font-medium text-black">{t.about4}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">
              {t.about5}
            </p>
            <p className="mt-6 text-xl font-semibold text-black">{t.about6}</p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-gradient-to-br from-[#ffffff] to-[#f1ece5] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {t.signature}
            </p>

            <div className="mt-6 space-y-4">
              {[t.sig1, t.sig2, t.sig3].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/70 bg-white/80 px-5 py-5 text-sm text-zinc-700 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="doctor" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-[520px] overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/doctor.jpg"
              alt="Dr Ahmed Marzouk"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="rounded-[1.5rem] bg-white/15 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {t.doctorSection}
                </p>
                <h4 className="mt-2 text-2xl font-semibold text-white">
                  {t.doctorTitle}
                </h4>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {t.doctorSection}
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              {t.doctorTitle}
            </h3>

            <p className="mt-6 text-base leading-8 text-zinc-600">
              {t.doctorText1}
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              {t.doctorText2}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              <li>{t.doctorPoint1}</li>
              <li>{t.doctorPoint2}</li>
              <li>{t.doctorPoint3}</li>
            </ul>

            <button
              onClick={openBookingModal}
              className="mt-8 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-zinc-800"
            >
              {t.doctorBtn}
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            {t.services}
          </p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            {t.servicesTitle}
          </h3>
          <p className="mt-4 leading-7 text-zinc-600">{t.servicesText}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {currentServices.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.10)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5efe7] text-lg">
                ✦
              </div>
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {service.text}
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black transition group-hover:gap-3"
              >
                {t.learnMore} <span>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            {t.fullServicesBtn}
          </Link>
        </div>
      </section>

      <section id="albums" className="bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {t.albums}
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              {t.albumsTitle}
            </h3>
            <p className="mt-4 leading-7 text-zinc-600">{t.albumsText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {currentAlbums.map((album) => (
              <Link
                key={album.slug}
                href={`/albums/${album.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.10)]"
              >
                <div className="relative h-[320px] w-full overflow-hidden">
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-black">
                    {album.title}
                  </h4>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-black transition group-hover:gap-3">
                    {t.viewAlbum} <span>→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {t.testimonials}
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              {t.testimonialsTitle}
            </h3>

            <p className="mt-4 text-sm text-zinc-600">
              ⭐ 4.2 / 5 — 10 {t.googleTotalLabel}
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/Dr+Ahmed+Marzouk+iconic+clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-50"
          >
            {t.testimonialsLink}
          </a>
        </div>

        {lang === "fr" ? (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2">
              <div className="text-lg">★★★★★</div>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                “Très professionnel et à l’écoute. Je recommande vivement.”
              </p>
              <p className="mt-5 font-semibold text-black">Hamza Berrada</p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2">
              <div className="text-lg">★★★★★</div>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                “Professionnel et à l’écoute, je lui ai fait confiance pour
                toutes mes interventions.”
              </p>
              <p className="mt-5 font-semibold text-black">Sarah Reguig</p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2">
              <div className="text-lg">★★★★★</div>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                “Honnêtement, je ne m’attendais pas à un tel niveau de
                satisfaction.”
              </p>
              <p className="mt-5 font-semibold text-black">Umnia Meski</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2">
              <div className="text-lg">★★★★★</div>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                “محترف جداً ويستمع جيداً. أوصي به بشدة.”
              </p>
              <p className="mt-5 font-semibold text-black">حمزة برادة</p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2">
              <div className="text-lg">★★★★★</div>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                “مهني ومنصت، وقد منحته ثقتي في جميع تدخلاتي.”
              </p>
              <p className="mt-5 font-semibold text-black">سارة ركيك</p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2">
              <div className="text-lg">★★★★★</div>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                “بصراحة، لم أكن أتوقع هذا المستوى من الرضا.”
              </p>
              <p className="mt-5 font-semibold text-black">أمنية مسكي</p>
            </div>
          </div>
        )}
      </section>

      <section id="faq" className="bg-white/60">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {t.faq}
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              {t.faqTitle}
            </h3>
          </div>

          <div className="space-y-4">
            {currentFaqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-medium text-black"
                  >
                    <span>{item.q}</span>
                    <span
                      className={`transition ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-7 text-zinc-600">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              {t.form}
            </p>
            <h3 className="mt-3 max-w-2xl text-3xl font-semibold md:text-5xl">
              {t.formTitle}
            </h3>
            <p className="mt-6 text-white/70">{t.contactTitle}</p>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  {t.name}
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.name}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  {t.phone}
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40"
                  placeholder={t.phone}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-white/70">
                {t.treatment}
              </label>
              <input
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40"
                placeholder={t.treatment}
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-white/70">
                {t.message}
              </label>
              <textarea
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40"
                placeholder={t.message}
              />
            </div>

            <button
              type="submit"
              className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90"
            >
              {t.send}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {t.map}
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              {t.mapTitle}
            </h3>
            <p className="mt-4 leading-7 text-zinc-600">{t.mapText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
              <iframe
                src="https://www.google.com/maps?q=Dr+Ahmed+Marzouk+iconic+clinic&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
              <h4 className="text-xl font-semibold text-black">
                Iconic Clinic
              </h4>

              <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                <p>
                  <span className="font-semibold text-black">
                    {t.addressLabel}:
                  </span>{" "}
                  Dr Ahmed Marzouk iconic clinic
                </p>
                <p>
                  <span className="font-semibold text-black">{t.city}</span>
                </p>
                <p>
                  <span className="font-semibold text-black">
                    {t.phoneLabel}:
                  </span>{" "}
                  0687027233
                </p>
              </div>

              <a
                href="https://www.google.com/maps/place/Dr+Ahmed+Marzouk+iconic+clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                {t.openMap}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#03050b] text-white">
        <div className="mx-auto max-w-[1500px] px-5 py-10 md:px-8 xl:px-10">
          <div className="grid gap-8 xl:grid-cols-[380px_1fr]">
            <div className="border-b border-white/10 pb-8 xl:border-b-0 xl:border-r xl:border-white/15 xl:pb-0 xl:pr-8">
              <div>
                <p className="text-[12px] uppercase tracking-[0.3em] text-white/45">
                  {t.footerClinic}
                </p>

                <Link
                  href="/"
                  className="mt-4 inline-block transition hover:opacity-90"
                >
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      Iconic Clinic
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                      by Dr Ahmed Marzouk
                    </p>
                  </div>
                </Link>

                <div className="mt-6 max-w-[320px] space-y-1 text-[14px] leading-6 text-white/88">
                  <p>Boulevard Mohammed VI, Les Orchidées 4</p>
                  <p>Imm D, Appt 3</p>
                  <p>Mohammedia 28810, Maroc</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:drahmedmarzouk21@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-lg text-white transition group-hover:border-white group-hover:bg-white/5">
                    ✉
                  </span>
                  <span className="text-[14px] uppercase tracking-[0.04em] text-white/95">
                    {t.footerMessage}
                  </span>
                </a>

                <a
                  href="tel:+212687027233"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-lg text-white transition group-hover:border-white group-hover:bg-white/5">
                    ☎
                  </span>
                  <span className="text-[15px] text-white/95">
                    +212 687 027 233
                  </span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Dr+Ahmed+Marzouk+iconic+clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-lg text-white transition group-hover:border-white group-hover:bg-white/5">
                    ⌖
                  </span>
                  <span className="text-[14px] uppercase tracking-[0.04em] text-white/95">
                    {t.footerFind}
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
                <div className="min-w-0">
                  <h4 className="max-w-[180px] text-[18px] font-semibold leading-tight md:text-[22px]">
                    {t.footerFaq}
                  </h4>

                  <div className="mt-4 space-y-2 text-[14px] leading-6 text-white/82">
                    <Link
                      href="/faq/medecine-esthetique"
                      className="block transition hover:text-white"
                    >
                      FAQ médecine esthétique
                    </Link>
                    <Link
                      href="/faq/peau"
                      className="block transition hover:text-white"
                    >
                      FAQ peau
                    </Link>
                    <Link
                      href="/faq/cheveux"
                      className="block transition hover:text-white"
                    >
                      FAQ cheveux
                    </Link>
                    <Link
                      href="/faq/silhouette"
                      className="block transition hover:text-white"
                    >
                      FAQ silhouette
                    </Link>
                  </div>
                </div>

                <div className="min-w-0">
                  <h4 className="max-w-[180px] text-[18px] font-semibold leading-tight md:text-[22px]">
                    {t.footerConcerns}
                  </h4>

                  <div className="mt-4 space-y-2 text-[14px] leading-6 text-white/82">
                    <Link
                      href="/preoccupations/rides"
                      className="block transition hover:text-white"
                    >
                      Rides
                    </Link>
                    <Link
                      href="/preoccupations/acne"
                      className="block transition hover:text-white"
                    >
                      Acné
                    </Link>
                    <Link
                      href="/preoccupations/taches"
                      className="block transition hover:text-white"
                    >
                      Taches
                    </Link>
                    <Link
                      href="/preoccupations/chute-cheveux"
                      className="block transition hover:text-white"
                    >
                      Chute de cheveux
                    </Link>
                    <Link
                      href="/preoccupations/relachement-cutane"
                      className="block transition hover:text-white"
                    >
                      Relâchement cutané
                    </Link>
                  </div>
                </div>

                <div className="min-w-0">
                  <h4 className="max-w-[180px] text-[18px] font-semibold leading-tight md:text-[22px]">
                    {t.footerTechniques}
                  </h4>

                  <div className="mt-4 space-y-2 text-[14px] leading-6 text-white/82">
                    <Link
                      href="/techniques/botox"
                      className="block transition hover:text-white"
                    >
                      Botox
                    </Link>
                    <Link
                      href="/techniques/prp"
                      className="block transition hover:text-white"
                    >
                      PRP
                    </Link>
                    <Link
                      href="/techniques/microneedling"
                      className="block transition hover:text-white"
                    >
                      Microneedling
                    </Link>
                    <Link
                      href="/techniques/peeling"
                      className="block transition hover:text-white"
                    >
                      Peeling
                    </Link>
                  </div>
                </div>

                <div className="min-w-0">
                  <h4 className="max-w-[180px] text-[18px] font-semibold leading-tight md:text-[22px]">
                    {t.footerContact}
                  </h4>

                  <div className="mt-4 max-w-[280px] space-y-3 text-[14px] leading-6 text-white/78">
                    <p>
                      <span className="font-medium text-white">
                        {isArabic ? "الهاتف:" : "Tél. :"}
                      </span>
                      <br />
                      +212 687 027 233 / +212 523 273 231
                    </p>

                    <p>
                      <span className="font-medium text-white">WhatsApp :</span>
                      <br />
                      +212 687 027 233
                    </p>

                    <p>
                      <a
                        href="mailto:drahmedmarzouk21@gmail.com"
                        className="font-medium text-white transition hover:text-white/80"
                      >
                        Email
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  onClick={openBookingModal}
                  className="inline-flex items-center gap-5 rounded-full bg-white px-7 py-3 text-base font-medium text-black transition hover:scale-[1.02] hover:bg-white/90"
                >
                  <span>
                    {lang === "ar" ? "احجز موعدك" : "PRENDRE RENDEZ-VOUS"}
                  </span>
                  <span className="text-2xl leading-none">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/40">
            © 2026 Iconic Clinic. {t.footerRights}
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/212687027233?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez-vous"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:scale-[1.02]"
      >
        <span>💬</span>
        <span>{t.whatsapp}</span>
      </a>

      <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4">
        <div className="group relative flex items-center justify-end animate-[fadeUp_0.6s_ease_0.2s_both]">
          <span className="absolute right-14 rounded-full bg-black/80 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
            Instagram
          </span>
          <a
            href="https://www.instagram.com/dr_marzouk_iconic_clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow backdrop-blur transition hover:scale-110"
          >
            <FaInstagram className="text-white group-hover:text-pink-400" />
          </a>
        </div>

        <div className="group relative flex items-center justify-end animate-[fadeUp_0.6s_ease_0.4s_both]">
          <span className="absolute right-14 rounded-full bg-black/80 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
            Facebook
          </span>
          <a
            href="https://web.facebook.com/datewithmyself"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow backdrop-blur transition hover:scale-110"
          >
            <FaFacebook className="text-white group-hover:text-blue-400" />
          </a>
        </div>

        <div className="group relative flex items-center justify-end animate-[fadeUp_0.6s_ease_0.6s_both]">
          <span className="absolute right-14 rounded-full bg-black/80 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
            TikTok
          </span>
          <a
            href="https://www.tiktok.com/@drahmedmarzouk1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow backdrop-blur transition hover:scale-110"
          >
            <FaTiktok className="text-white group-hover:text-black" />
          </a>
        </div>
      </div>

      {showBookingModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-2xl rounded-[2rem] bg-white p-6 shadow-2xl md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-black">
                {isArabic ? "حجز موعد" : "Réserver un rendez-vous"}
              </h3>

              <button
                onClick={closeBookingModal}
                className="rounded-full bg-zinc-100 px-3 py-1 text-black hover:bg-zinc-200"
              >
                ✕
              </button>
            </div>

            <div className="mb-6 flex gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 rounded-full ${
                    bookingStep >= step ? "bg-black" : "bg-zinc-200"
                  }`}
                />
              ))}
            </div>

            {bookingStep === 1 && (
              <div>
                <h4 className="mb-4 text-lg font-semibold text-black">
                  {isArabic ? "اختاري الخدمة" : "Choisissez le service"}
                </h4>

                <div className="grid gap-3 md:grid-cols-2">
                  {currentBookingServices.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => {
                        setBookingData((prev) => ({ ...prev, service }));
                        setBookingStep(2);
                      }}
                      className={`rounded-2xl border px-4 py-4 text-left transition ${
                        bookingData.service === service
                          ? "border-black bg-black text-white"
                          : "border-zinc-200 bg-white text-black hover:bg-zinc-50"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {bookingStep === 2 && (
              <div>
                <h4 className="mb-4 text-lg font-semibold text-black">
                  {isArabic
                    ? "اختاري التاريخ والساعة"
                    : "Choisissez la date et l’heure"}
                </h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-600">
                      {isArabic ? "التاريخ" : "Date"}
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleDateChange}
                      className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-zinc-600">
                      {isArabic ? "الساعة" : "Heure"}
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={bookingData.time}
                      onChange={handleTimeChange}
                      min="09:30"
                      max={
                        bookingData.date &&
                        new Date(bookingData.date).getDay() === 6
                          ? "14:00"
                          : "19:00"
                      }
                      className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none"
                    />
                  </div>
                </div>

                <p className="mt-4 rounded-2xl bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
                  {getWorkingHoursLabel()}
                </p>

                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setBookingStep(1)}
                    className="rounded-full border border-zinc-300 px-5 py-2 text-black"
                  >
                    {isArabic ? "رجوع" : "Retour"}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (!bookingData.date || !bookingData.time) {
                        alert(
                          isArabic
                            ? "اختاري التاريخ والساعة"
                            : "Choisissez la date et l’heure"
                        );
                        return;
                      }

                      const selectedDay = new Date(
                        bookingData.date
                      ).getDay();
                      if (selectedDay === 0) {
                        alert(isArabic ? "الأحد مغلق" : "Dimanche fermé");
                        return;
                      }

                      setBookingStep(3);
                    }}
                    className="rounded-full bg-black px-5 py-2 text-white"
                  >
                    {isArabic ? "التالي" : "Suivant"}
                  </button>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitBookingToWhatsApp();
                }}
              >
                <h4 className="mb-4 text-lg font-semibold text-black">
                  {isArabic ? "معلوماتك" : "Vos informations"}
                </h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder={isArabic ? "الاسم" : "Prénom"}
                    value={bookingData.firstName}
                    onChange={handleBookingChange}
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none"
                    required
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder={isArabic ? "النسب" : "Nom"}
                    value={bookingData.lastName}
                    onChange={handleBookingChange}
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none"
                    required
                  />
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder={isArabic ? "الهاتف" : "Téléphone"}
                    value={bookingData.phone}
                    onChange={handleBookingChange}
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none"
                    required
                  />
                </div>

                <div className="mt-4">
                  <textarea
                    name="question"
                    rows={4}
                    placeholder={isArabic ? "السؤال" : "Votre question"}
                    value={bookingData.question}
                    onChange={handleBookingChange}
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-black outline-none"
                  />
                </div>

                <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                  <p>
                    <span className="font-semibold">
                      {isArabic ? "الخدمة:" : "Service :"}
                    </span>{" "}
                    {bookingData.service}
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold">
                      {isArabic ? "التاريخ:" : "Date :"}
                    </span>{" "}
                    {bookingData.date}
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold">
                      {isArabic ? "الساعة:" : "Heure :"}
                    </span>{" "}
                    {bookingData.time}
                  </p>
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setBookingStep(2)}
                    className="rounded-full border border-zinc-300 px-5 py-2 text-black"
                  >
                    {isArabic ? "رجوع" : "Retour"}
                  </button>

                  <button
                    type="submit"
                    className="rounded-full bg-black px-6 py-2 text-white"
                  >
                    {isArabic ? "تأكيد" : "Confirmer"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
