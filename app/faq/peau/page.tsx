import type { Metadata } from "next";
import Script from "next/script";
import FaqServicePage from "@/components/FaqServicePage";

export const metadata: Metadata = {
  title: "FAQ Peau — Soins du Visage",
  description:
    "Toutes les réponses à vos questions sur les soins de la peau, l'acné, les taches et l'éclat du teint chez Iconic Clinic Mohammedia.",
  alternates: { canonical: "/faq/peau" },
  openGraph: {
    title: "FAQ Peau — Soins du Visage | Iconic Clinic Mohammedia",
    description:
      "Toutes les réponses à vos questions sur les soins de la peau, l'acné, les taches et l'éclat du teint chez Iconic Clinic Mohammedia.",
    url: "/faq/peau",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels problèmes de peau pouvez-vous traiter ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les soins peuvent aider à améliorer l’éclat, la texture, les pores, les imperfections, les taches et les signes de fatigue cutanée."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de séances faut-il prévoir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le nombre de séances varie selon l’état de la peau et le protocole recommandé. Un plan personnalisé est défini après évaluation."
      }
    },
    {
      "@type": "Question",
      "name": "Les soins conviennent-ils aux peaux sensibles ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, à condition de choisir un protocole adapté. Chaque peau est différente, c’est pourquoi l’approche doit être personnalisée."
      }
    },
    {
      "@type": "Question",
      "name": "Quand voit-on les résultats ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Certains effets sont visibles dès les premiers jours, tandis que d’autres apparaissent de façon progressive au fil des séances."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on reprendre le maquillage après un soin ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cela dépend du traitement effectué. Pour certains soins, il est conseillé d’attendre quelques heures ou jusqu’au lendemain."
      }
    },
    {
      "@type": "Question",
      "name": "Comment entretenir les résultats ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une bonne routine à domicile, une protection solaire régulière et des séances d’entretien peuvent prolonger les bénéfices du soin."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="faq-peau-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqServicePage
      image="/clinic.jpg"
      slugLabelFr="Peau"
      slugLabelAr="العناية بالبشرة"
      fr={{
        heroLabel: "Foire aux questions",
        title: "FAQ peau",
        introQuestion: "Vous avez une question sur",
        introHighlight: "la peau",
        introText:
          "Nos experts répondent à toutes vos interrogations avant de commencer un traitement.",
        allQuestionsTitle: "Toutes les questions sur la peau",
        contactTitle: "Une question ?",
        contactText:
          "Vous souhaitez avoir plus de renseignements ou prendre un rendez-vous ? Ecrivez-nous !",
        contactBtn: "NOUS CONTACTER",
        appointmentBtn: "PRENDRE RENDEZ-VOUS",
        backHome: "Accueil",
        backFaq: "Foire aux questions",
        questions: [
          {
            q: "Quels problèmes de peau pouvez-vous traiter ?",
            a: "Les soins peuvent aider à améliorer l’éclat, la texture, les pores, les imperfections, les taches et les signes de fatigue cutanée.",
          },
          {
            q: "Combien de séances faut-il prévoir ?",
            a: "Le nombre de séances varie selon l’état de la peau et le protocole recommandé. Un plan personnalisé est défini après évaluation.",
          },
          {
            q: "Les soins conviennent-ils aux peaux sensibles ?",
            a: "Oui, à condition de choisir un protocole adapté. Chaque peau est différente, c’est pourquoi l’approche doit être personnalisée.",
          },
          {
            q: "Quand voit-on les résultats ?",
            a: "Certains effets sont visibles dès les premiers jours, tandis que d’autres apparaissent de façon progressive au fil des séances.",
          },
          {
            q: "Peut-on reprendre le maquillage après un soin ?",
            a: "Cela dépend du traitement effectué. Pour certains soins, il est conseillé d’attendre quelques heures ou jusqu’au lendemain.",
          },
          {
            q: "Comment entretenir les résultats ?",
            a: "Une bonne routine à domicile, une protection solaire régulière et des séances d’entretien peuvent prolonger les bénéfices du soin.",
          },
        ],
      }}
      ar={{
        heroLabel: "الأسئلة الشائعة",
        title: "الأسئلة الشائعة - العناية بالبشرة",
        introQuestion: "هل لديكم سؤال حول",
        introHighlight: "العناية بالبشرة",
        introText:
          "خبراؤنا يجيبون عن كل تساؤلاتكم قبل بدء العلاج.",
        allQuestionsTitle: "كل الأسئلة حول العناية بالبشرة",
        contactTitle: "هل لديكم سؤال؟",
        contactText:
          "إذا كنتم ترغبون في مزيد من المعلومات أو في حجز موعد، راسلونا.",
        contactBtn: "اتصلوا بنا",
        appointmentBtn: "احجز موعدك",
        backHome: "الرئيسية",
        backFaq: "الأسئلة الشائعة",
        questions: [
          {
            q: "ما هي مشاكل البشرة التي يمكن علاجها؟",
            a: "يمكن للعلاجات أن تساعد في تحسين الإشراقة والملمس والمسام والعيوب والبقع وعلامات التعب الجلدي.",
          },
          {
            q: "كم عدد الجلسات المطلوبة؟",
            a: "عدد الجلسات يختلف حسب حالة البشرة والبروتوكول المقترح، ويتم تحديد خطة شخصية بعد التقييم.",
          },
          {
            q: "هل العلاجات مناسبة للبشرة الحساسة؟",
            a: "نعم، بشرط اختيار البروتوكول المناسب، لأن كل بشرة تختلف عن الأخرى.",
          },
          {
            q: "متى تظهر النتائج؟",
            a: "بعض النتائج تظهر خلال الأيام الأولى، بينما تظهر نتائج أخرى بشكل تدريجي مع تتابع الجلسات.",
          },
          {
            q: "هل يمكن وضع المكياج بعد العلاج؟",
            a: "ذلك يعتمد على نوع العلاج، ففي بعض الحالات يُنصح بالانتظار بضع ساعات أو حتى اليوم التالي.",
          },
          {
            q: "كيف يمكن الحفاظ على النتائج؟",
            a: "العناية المنزلية الجيدة واستعمال الحماية الشمسية بانتظام وجلسات الصيانة تساعد على إطالة النتائج.",
          },
        ],
      }}
      />
    </>
  );
}
