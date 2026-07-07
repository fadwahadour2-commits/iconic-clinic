import type { Metadata } from "next";
import Script from "next/script";
import FaqServicePage from "@/components/FaqServicePage";

export const metadata: Metadata = {
  title: "FAQ Silhouette — Remodelage Corporel",
  description:
    "Toutes les réponses à vos questions sur le remodelage silhouette, la graisse localisée et les traitements corporels chez Iconic Clinic Mohammedia.",
  alternates: { canonical: "/faq/silhouette" },
  openGraph: {
    title: "FAQ Silhouette — Remodelage Corporel | Iconic Clinic Mohammedia",
    description:
      "Toutes les réponses à vos questions sur le remodelage silhouette, la graisse localisée et les traitements corporels chez Iconic Clinic Mohammedia.",
    url: "/faq/silhouette",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Les soins silhouette font-ils maigrir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ces traitements ne remplacent pas une perte de poids. Ils visent surtout à affiner certaines zones, améliorer la fermeté et harmoniser la silhouette."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles zones peuvent être traitées ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon le protocole choisi, plusieurs zones peuvent être ciblées comme le ventre, les cuisses, les bras, les hanches ou d’autres zones localisées."
      }
    },
    {
      "@type": "Question",
      "name": "Les résultats sont-ils immédiats ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Certains changements peuvent être perçus rapidement, mais les résultats les plus visibles apparaissent souvent progressivement."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce adapté après une grossesse ou une perte de poids ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, dans de nombreux cas, après évaluation. Le traitement proposé dépendra de la qualité de la peau, de la zone concernée et de l’objectif recherché."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il faire du sport en complément ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une bonne hygiène de vie aide à optimiser et maintenir les résultats, même si le protocole reste personnalisé selon chaque patient."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de séances faut-il pour voir une amélioration ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le nombre de séances varie selon la zone, la qualité tissulaire et l’objectif. Une consultation permet d’établir un programme adapté."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="faq-silhouette-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqServicePage
      image="/clinic.jpg"
      slugLabelFr="Silhouette"
      slugLabelAr="القوام"
      fr={{
        heroLabel: "Foire aux questions",
        title: "FAQ silhouette",
        introQuestion: "Vous avez une question sur",
        introHighlight: "la silhouette",
        introText:
          "Nos experts répondent à toutes vos interrogations avant de commencer un traitement.",
        allQuestionsTitle: "Toutes les questions sur la silhouette",
        contactTitle: "Une question ?",
        contactText:
          "Vous souhaitez avoir plus de renseignements ou prendre un rendez-vous ? Ecrivez-nous !",
        contactBtn: "NOUS CONTACTER",
        appointmentBtn: "PRENDRE RENDEZ-VOUS",
        backHome: "Accueil",
        backFaq: "Foire aux questions",
        questions: [
          {
            q: "Les soins silhouette font-ils maigrir ?",
            a: "Ces traitements ne remplacent pas une perte de poids. Ils visent surtout à affiner certaines zones, améliorer la fermeté et harmoniser la silhouette.",
          },
          {
            q: "Quelles zones peuvent être traitées ?",
            a: "Selon le protocole choisi, plusieurs zones peuvent être ciblées comme le ventre, les cuisses, les bras, les hanches ou d’autres zones localisées.",
          },
          {
            q: "Les résultats sont-ils immédiats ?",
            a: "Certains changements peuvent être perçus rapidement, mais les résultats les plus visibles apparaissent souvent progressivement.",
          },
          {
            q: "Est-ce adapté après une grossesse ou une perte de poids ?",
            a: "Oui, dans de nombreux cas, après évaluation. Le traitement proposé dépendra de la qualité de la peau, de la zone concernée et de l’objectif recherché.",
          },
          {
            q: "Faut-il faire du sport en complément ?",
            a: "Une bonne hygiène de vie aide à optimiser et maintenir les résultats, même si le protocole reste personnalisé selon chaque patient.",
          },
          {
            q: "Combien de séances faut-il pour voir une amélioration ?",
            a: "Le nombre de séances varie selon la zone, la qualité tissulaire et l’objectif. Une consultation permet d’établir un programme adapté.",
          },
        ],
      }}
      ar={{
        heroLabel: "الأسئلة الشائعة",
        title: "الأسئلة الشائعة - القوام",
        introQuestion: "هل لديكم سؤال حول",
        introHighlight: "القوام",
        introText:
          "خبراؤنا يجيبون عن كل تساؤلاتكم قبل بدء العلاج.",
        allQuestionsTitle: "كل الأسئلة حول القوام",
        contactTitle: "هل لديكم سؤال؟",
        contactText:
          "إذا كنتم ترغبون في مزيد من المعلومات أو في حجز موعد، راسلونا.",
        contactBtn: "اتصلوا بنا",
        appointmentBtn: "احجز موعدك",
        backHome: "الرئيسية",
        backFaq: "الأسئلة الشائعة",
        questions: [
          {
            q: "هل علاجات القوام تؤدي إلى إنقاص الوزن؟",
            a: "هذه العلاجات لا تعوض فقدان الوزن، لكنها تهدف أساساً إلى تنحيف بعض المناطق وتحسين الشد وتناسق القوام.",
          },
          {
            q: "ما هي المناطق التي يمكن علاجها؟",
            a: "حسب البروتوكول المختار، يمكن استهداف عدة مناطق مثل البطن والفخذين والذراعين والخواصر ومناطق أخرى موضعية.",
          },
          {
            q: "هل النتائج تظهر فوراً؟",
            a: "قد يلاحظ بعض التغيير بسرعة، لكن النتائج الأكثر وضوحاً تظهر غالباً بشكل تدريجي.",
          },
          {
            q: "هل العلاج مناسب بعد الحمل أو بعد خسارة الوزن؟",
            a: "نعم، في حالات كثيرة وبعد التقييم. العلاج المقترح يعتمد على جودة الجلد والمنطقة المستهدفة والهدف المطلوب.",
          },
          {
            q: "هل يجب ممارسة الرياضة مع العلاج؟",
            a: "نمط الحياة الصحي يساعد على تحسين النتائج والحفاظ عليها، مع بقاء البروتوكول مخصصاً لكل حالة.",
          },
          {
            q: "كم عدد الجلسات لرؤية تحسن؟",
            a: "عدد الجلسات يختلف حسب المنطقة وجودة الأنسجة والهدف. الاستشارة تساعد على وضع برنامج مناسب.",
          },
        ],
      }}
      />
    </>
  );
}
