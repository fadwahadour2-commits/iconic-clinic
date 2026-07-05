import FaqServicePage from "@/components/FaqServicePage";

export default function Page() {
  return (
    <FaqServicePage
      image="/faq-medecine-esthetique.jpg"
      slugLabelFr="Médecine esthétique"
      slugLabelAr="الطب التجميلي"
      fr={{
        heroLabel: "Foire aux questions",
        title: "FAQ médecine esthétique",
        introQuestion: "Vous avez une question sur",
        introHighlight: "la médecine esthétique",
        introText:
          "Nos experts répondent à toutes vos interrogations avant de commencer un traitement.",
        allQuestionsTitle: "Toutes les questions sur la médecine esthétique",
        contactTitle: "Une question ?",
        contactText:
          "Vous souhaitez avoir plus de renseignements ou prendre un rendez-vous ? Ecrivez-nous !",
        contactBtn: "NOUS CONTACTER",
        appointmentBtn: "PRENDRE RENDEZ-VOUS",
        backHome: "Accueil",
        backFaq: "Foire aux questions",
        questions: [
          {
            q: "La médecine esthétique est-elle douloureuse ?",
            a: "La plupart des soins sont très bien tolérés. Selon le traitement, une crème anesthésiante ou des techniques de confort peuvent être utilisées.",
          },
          {
            q: "Les résultats sont-ils naturels ?",
            a: "Oui, l’objectif est d’embellir le visage tout en respectant son harmonie naturelle, sans effet figé ni artificiel.",
          },
          {
            q: "Combien de temps durent les résultats ?",
            a: "Cela dépend du soin réalisé, du mode de vie et du profil du patient. Certains résultats sont visibles rapidement, d’autres s’améliorent progressivement.",
          },
          {
            q: "Y a-t-il un temps de récupération ?",
            a: "La plupart des traitements permettent une reprise rapide des activités. Une légère rougeur ou un petit gonflement peuvent parfois apparaître temporairement.",
          },
          {
            q: "À partir de quel âge peut-on commencer ?",
            a: "Il n’y a pas d’âge unique. Tout dépend du besoin, de l’indication médicale et de l’évaluation personnalisée réalisée en consultation.",
          },
          {
            q: "Comment savoir quel traitement me convient ?",
            a: "Un diagnostic personnalisé permet de choisir le soin le plus adapté à votre visage, vos attentes et votre objectif esthétique.",
          },
        ],
      }}
      ar={{
        heroLabel: "الأسئلة الشائعة",
        title: "الأسئلة الشائعة - الطب التجميلي",
        introQuestion: "هل لديكم سؤال حول",
        introHighlight: "الطب التجميلي",
        introText:
          "خبراؤنا يجيبون عن كل تساؤلاتكم قبل بدء العلاج.",
        allQuestionsTitle: "كل الأسئلة حول الطب التجميلي",
        contactTitle: "هل لديكم سؤال؟",
        contactText:
          "إذا كنتم ترغبون في مزيد من المعلومات أو في حجز موعد، راسلونا.",
        contactBtn: "اتصلوا بنا",
        appointmentBtn: "احجز موعدك",
        backHome: "الرئيسية",
        backFaq: "الأسئلة الشائعة",
        questions: [
          {
            q: "هل الطب التجميلي مؤلم؟",
            a: "معظم العلاجات تكون محتملة بشكل جيد، وقد يتم استعمال كريم مخدر أو وسائل راحة حسب نوع العلاج.",
          },
          {
            q: "هل النتائج طبيعية؟",
            a: "نعم، الهدف هو تحسين المظهر مع الحفاظ على التناسق الطبيعي للوجه دون مظهر مصطنع.",
          },
          {
            q: "كم تدوم النتائج؟",
            a: "ذلك يختلف حسب العلاج ونمط الحياة وطبيعة الحالة. بعض النتائج تظهر بسرعة وأخرى تتحسن تدريجياً.",
          },
          {
            q: "هل هناك فترة نقاهة؟",
            a: "معظم العلاجات تسمح بالعودة السريعة للأنشطة اليومية، وقد يظهر احمرار أو انتفاخ خفيف ومؤقت أحياناً.",
          },
          {
            q: "ابتداءً من أي عمر يمكن البدء؟",
            a: "لا يوجد عمر واحد محدد، فالأمر يعتمد على الحاجة والتقييم الطبي الشخصي.",
          },
          {
            q: "كيف أعرف العلاج المناسب لي؟",
            a: "التشخيص الشخصي يساعد على اختيار العلاج الأنسب حسب الوجه والتوقعات والهدف الجمالي.",
          },
        ],
      }}
    />
  );
}