/**
 * Configuration centrale du site — modifie ces valeurs à un seul endroit.
 *
 * IMPORTANT : si tu achètes un nom de domaine personnalisé (ex: iconicclinic.ma),
 * remplace SITE_URL ci-dessous. Tout le SEO (canonical, sitemap, Open Graph,
 * Schema.org) est généré automatiquement à partir de cette valeur.
 */
export const SITE_URL = "https://iconic-clinic.vercel.app";

export const SITE_NAME = "Iconic Clinic";
export const SITE_NAME_FULL = "Iconic Clinic — Dr Ahmed Marzouk";

export const DOCTOR_NAME = "Dr Ahmed Marzouk";

export const SITE_DESCRIPTION_FR =
  "Iconic Clinic à Mohammedia : clinique de médecine esthétique du Dr Ahmed Marzouk. Botox, PRP, Skin Booster, HIFU, épilation laser, Hydrafacial. Prenez rendez-vous.";

export const SITE_DESCRIPTION_AR =
  "عيادة Iconic Clinic بالمحمدية: الطب التجميلي مع الدكتور أحمد مرزوق. بوتوكس، PRP، Skin Booster، HIFU، إزالة الشعر بالليزر. احجز موعدك الآن.";

export const KEYWORDS = [
  "Iconic Clinic",
  "Iconic Clinic Mohammedia",
  "Dr Ahmed Marzouk",
  "Clinique esthétique Mohammedia",
  "Médecine esthétique Mohammedia",
  "Botox Mohammedia",
  "PRP Mohammedia",
  "Skin Booster Mohammedia",
  "Laser Mohammedia",
  "Hydrafacial Mohammedia",
  "HIFU Mohammedia",
  "Épilation laser Mohammedia",
  "Endolift Mohammedia",
  "Smart Lipo Mohammedia",
  "Fils tenseurs Mohammedia",
  "Acide hyaluronique Mohammedia",
  "Médecine esthétique Maroc",
  "طب تجميلي المحمدية",
  "بوتوكس المحمدية",
  "إزالة الشعر بالليزر المحمدية",
];

export const CONTACT = {
  phone: "+212687027233",
  phoneDisplay: "+212 687 027 233",
  phoneSecondary: "+212523273231",
  whatsapp: "212687027233",
  email: "drahmedmarzouk21@gmail.com",
  streetAddress: "Boulevard Mohammed VI, Les Orchidées 4, Imm D, Appt 3",
  addressLocality: "Mohammedia",
  postalCode: "28810",
  addressCountry: "MA",
  // Approximate coordinates for Mohammedia, Morocco city center.
  // Replace with the clinic's exact GPS coordinates for best local SEO
  // (right-click the exact pin in Google Maps → copy coordinates).
  latitude: 33.6861,
  longitude: -7.3830,
  googleMapsUrl:
    "https://www.google.com/maps/place/Dr+Ahmed+Marzouk+iconic+clinic/",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/dr_marzouk_iconic_clinic/",
  facebook: "https://web.facebook.com/datewithmyself",
  tiktok: "https://www.tiktok.com/@drahmedmarzouk1",
};

export const OPENING_HOURS = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:30",
    closes: "19:00",
  },
  {
    dayOfWeek: ["Saturday"],
    opens: "09:30",
    closes: "14:00",
  },
];
