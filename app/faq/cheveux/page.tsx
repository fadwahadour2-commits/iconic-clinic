import FaqServicePage from "@/components/FaqServicePage";

export default function Page() {
  return (
    <FaqServicePage
      image="/faq-cheveux.jpg"
      slugLabelFr="Cheveux"
      slugLabelAr="الشعر"
      fr={{
        heroLabel: "Foire aux questions",
        title: "FAQ cheveux",
        introQuestion: "Vous avez une question sur",
        introHighlight: "les cheveux",
        introText:
          "Nos experts répondent à toutes vos interrogations avant de commencer un traitement.",
        allQuestionsTitle: "Toutes les questions sur les cheveux",
        contactTitle: "Une question ?",
        contactText:
          "Vous souhaitez avoir plus de renseignements ou prendre un rendez-vous ? Ecrivez-nous !",
        contactBtn: "NOUS CONTACTER",
        appointmentBtn: "PRENDRE RENDEZ-VOUS",
        backHome: "Accueil",
        backFaq: "Foire aux questions",
        questions: [
          {
            q: "Quels problèmes capillaires pouvez-vous prendre en charge ?",
            a: "Les soins capillaires peuvent aider en cas de chute, de perte de densité, de cheveux affinés ou de cuir chevelu fragilisé.",
          },
          {
            q: "Quand voit-on les premiers résultats ?",
            a: "Les résultats capillaires demandent souvent un peu de patience. L’amélioration se fait généralement de manière progressive.",
          },
          {
            q: "Est-ce que les soins conviennent aux hommes et aux femmes ?",
            a: "Oui, les protocoles peuvent être adaptés aussi bien aux femmes qu’aux hommes selon la cause et le type de chute.",
          },
          {
            q: "Combien de séances sont nécessaires ?",
            a: "Cela dépend du diagnostic, de l’ancienneté du problème et du protocole recommandé. Un programme personnalisé est établi en consultation.",
          },
          {
            q: "Les soins sont-ils douloureux ?",
            a: "La tolérance dépend du traitement choisi, mais les soins sont généralement bien supportés.",
          },
          {
            q: "Peut-on combiner plusieurs approches ?",
            a: "Oui, selon le cas. Une stratégie combinée peut être proposée pour améliorer les résultats et renforcer la qualité capillaire.",
          },
        ],
      }}
      ar={{
        heroLabel: "الأسئلة الشائعة",
        title: "الأسئلة الشائعة - الشعر",
        introQuestion: "هل لديكم سؤال حول",
        introHighlight: "الشعر",
        introText:
          "خبراؤنا يجيبون عن كل تساؤلاتكم قبل بدء العلاج.",
        allQuestionsTitle: "كل الأسئلة حول الشعر",
        contactTitle: "هل لديكم سؤال؟",
        contactText:
          "إذا كنتم ترغبون في مزيد من المعلومات أو في حجز موعد، راسلونا.",
        contactBtn: "اتصلوا بنا",
        appointmentBtn: "احجز موعدك",
        backHome: "الرئيسية",
        backFaq: "الأسئلة الشائعة",
        questions: [
          {
            q: "ما هي مشاكل الشعر التي يمكن علاجها؟",
            a: "العلاجات الشعرية يمكن أن تساعد في حالات التساقط ونقص الكثافة وضعف الشعر أو فروة الرأس الحساسة.",
          },
          {
            q: "متى تظهر النتائج الأولى؟",
            a: "نتائج الشعر تحتاج غالباً إلى بعض الوقت، وتظهر التحسينات بشكل تدريجي.",
          },
          {
            q: "هل العلاجات مناسبة للرجال والنساء؟",
            a: "نعم، يمكن تكييف البروتوكولات للنساء والرجال حسب السبب ونوع التساقط.",
          },
          {
            q: "كم عدد الجلسات المطلوبة؟",
            a: "ذلك يعتمد على التشخيص ومدة المشكلة والبروتوكول المقترح. يتم تحديد برنامج شخصي أثناء الاستشارة.",
          },
          {
            q: "هل العلاجات مؤلمة؟",
            a: "التحمل يختلف حسب نوع العلاج، لكن غالباً ما تكون العلاجات محتملة بشكل جيد.",
          },
          {
            q: "هل يمكن الجمع بين عدة طرق علاجية؟",
            a: "نعم، حسب الحالة، ويمكن اقتراح مقاربة تجمع بين أكثر من علاج لتحسين النتيجة وتقوية الشعر.",
          },
        ],
      }}
    />
  );
}