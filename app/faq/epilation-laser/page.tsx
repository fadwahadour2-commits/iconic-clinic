import FaqServicePage from "@/components/FaqServicePage";

export default function Page() {
  return (
    <FaqServicePage
      image="/faq-laser.jpg"
      slugLabelFr="Epilation laser"
      slugLabelAr="إزالة الشعر بالليزر"
      fr={{
        heroLabel: "Foire aux questions",
        title: "FAQ Epilation laser",
        introQuestion: "Vous avez une question sur",
        introHighlight: "l’épilation laser",
        introText:
          "Nos experts répondent à toutes vos interrogations avant de commencer un traitement.",
        allQuestionsTitle: "Toutes les questions sur l'épilation laser",
        contactTitle: "Une question ?",
        contactText:
          "Vous souhaitez avoir plus de renseignements ou prendre un rendez-vous ? Ecrivez-nous !",
        contactBtn: "NOUS CONTACTER",
        appointmentBtn: "PRENDRE RENDEZ-VOUS",
        backHome: "Accueil",
        backFaq: "Foire aux questions",
        questions: [
          {
            q: "Est-ce que l’épilation au laser fait mal ?",
            a: "La sensation varie selon la zone traitée et la sensibilité de la personne. En général, elle est décrite comme un léger picotement ou une sensation de chaleur brève.",
          },
          {
            q: "Combien de séances sont nécessaires pour une épilation au laser ?",
            a: "Le nombre de séances dépend de la zone, du type de peau, de la couleur du poil et de la réponse individuelle au traitement. Plusieurs séances sont souvent nécessaires pour un résultat optimal.",
          },
          {
            q: "Quels sont les poils qui réagissent le mieux à l’épilation au laser ?",
            a: "Les poils plus foncés et plus épais répondent généralement mieux au traitement, car le laser cible la mélanine présente dans le poil.",
          },
          {
            q: "Peut-on raser entre deux séances ?",
            a: "Oui, le rasage est généralement autorisé entre les séances. En revanche, il est souvent déconseillé d’arracher le poil à la racine entre deux rendez-vous.",
          },
          {
            q: "Peut-on faire du laser sur toutes les zones du corps ?",
            a: "Le traitement peut concerner plusieurs zones du visage et du corps, selon l’indication, le type de peau et l’évaluation réalisée en consultation.",
          },
          {
            q: "Le laser est-il adapté aux hommes et aux femmes ?",
            a: "Oui, l’épilation laser peut être proposée aussi bien aux femmes qu’aux hommes, selon la zone à traiter et le type de pilosité.",
          },
          {
            q: "Quelle est la différence entre l’épilation laser et la lumière pulsée ?",
            a: "Ces deux techniques utilisent la lumière, mais leur technologie, leur précision et leur protocole d’utilisation diffèrent. Le choix dépend du besoin et du diagnostic personnalisé.",
          },
          {
            q: "Peut-on s’exposer au soleil avant ou après une séance ?",
            a: "Il est généralement recommandé d’éviter une exposition solaire importante avant et après une séance, afin de protéger la peau et d’optimiser le traitement.",
          },
          {
            q: "Faut-il préparer la peau avant la séance ?",
            a: "Avant la séance, il est souvent conseillé d’avoir une peau propre, sans irritation, et de suivre les recommandations données par le praticien.",
          },
          {
            q: "Que se passe-t-il après une séance de laser ?",
            a: "Après la séance, une légère rougeur ou une sensation de chaleur peut apparaître temporairement. La peau retrouve généralement rapidement son aspect habituel.",
          },
          {
            q: "Quelle crème appliquer après l’épilation au laser ?",
            a: "Une crème apaisante et hydratante est souvent recommandée après la séance, selon les conseils du praticien et la sensibilité de la peau.",
          },
          {
            q: "Le résultat est-il définitif ?",
            a: "La réduction est durable, mais l’évolution hormonale, la zone traitée et le profil du patient peuvent influencer l’entretien à long terme.",
          },
          {
            q: "À partir de quel âge peut-on commencer l’épilation laser ?",
            a: "Cela dépend de la situation, de la pilosité et de l’évaluation médicale. Une consultation permet de déterminer si le traitement est adapté.",
          },
          {
            q: "Le laser convient-il à tous les types de peau ?",
            a: "Le traitement dépend du type de peau, de la couleur du poil et de la technologie utilisée. Une évaluation préalable est importante pour proposer le protocole adapté.",
          },
          {
            q: "Pourquoi faut-il plusieurs séances ?",
            a: "Le poil suit un cycle de croissance naturel. Le laser est surtout efficace sur les poils en phase de croissance active, ce qui explique la répétition des séances.",
          },
        ],
      }}
      ar={{
        heroLabel: "الأسئلة الشائعة",
        title: "الأسئلة الشائعة - إزالة الشعر بالليزر",
        introQuestion: "هل لديكم سؤال حول",
        introHighlight: "إزالة الشعر بالليزر",
        introText:
          "خبراؤنا يجيبون عن كل تساؤلاتكم قبل بدء العلاج.",
        allQuestionsTitle: "كل الأسئلة حول إزالة الشعر بالليزر",
        contactTitle: "هل لديكم سؤال؟",
        contactText:
          "إذا كنتم ترغبون في مزيد من المعلومات أو في حجز موعد، راسلونا.",
        contactBtn: "اتصلوا بنا",
        appointmentBtn: "احجز موعدك",
        backHome: "الرئيسية",
        backFaq: "الأسئلة الشائعة",
        questions: [
          {
            q: "هل إزالة الشعر بالليزر مؤلمة؟",
            a: "الإحساس يختلف حسب المنطقة المعالجة وحساسية الشخص. غالباً ما يوصف بأنه وخز خفيف أو إحساس سريع بالحرارة.",
          },
          {
            q: "كم عدد الجلسات اللازمة لإزالة الشعر بالليزر؟",
            a: "عدد الجلسات يختلف حسب المنطقة ونوع البشرة ولون الشعر واستجابة الحالة للعلاج. غالباً ما تكون هناك حاجة إلى عدة جلسات للحصول على نتيجة مثالية.",
          },
          {
            q: "ما نوع الشعر الذي يستجيب أفضل لليزر؟",
            a: "الشعر الداكن والأكثر سماكة يستجيب غالباً بشكل أفضل، لأن الليزر يستهدف صبغة الميلانين الموجودة في الشعرة.",
          },
          {
            q: "هل يمكن الحلاقة بين الجلسات؟",
            a: "نعم، الحلاقة تكون مسموحة غالباً بين الجلسات، بينما يُنصح عادة بتجنب الطرق التي تنزع الشعر من الجذور.",
          },
          {
            q: "هل يمكن إجراء الليزر لكل مناطق الجسم؟",
            a: "يمكن علاج عدة مناطق من الوجه والجسم حسب الحالة ونوع البشرة والتقييم الذي يتم أثناء الاستشارة.",
          },
          {
            q: "هل الليزر مناسب للرجال والنساء؟",
            a: "نعم، إزالة الشعر بالليزر يمكن أن تناسب النساء والرجال حسب المنطقة المعالجة وطبيعة الشعر.",
          },
          {
            q: "ما الفرق بين الليزر والضوء النبضي؟",
            a: "كلتا الطريقتين تستعملان الضوء، لكن تختلفان في التقنية والدقة والبروتوكول المستعمل. الاختيار يتم حسب الحاجة والتشخيص الشخصي.",
          },
          {
            q: "هل يمكن التعرض للشمس قبل أو بعد الجلسة؟",
            a: "يُنصح غالباً بتجنب التعرض القوي للشمس قبل وبعد الجلسة لحماية البشرة وتحسين فعالية العلاج.",
          },
          {
            q: "هل يجب تحضير البشرة قبل الجلسة؟",
            a: "قبل الجلسة، يُنصح عادة بأن تكون البشرة نظيفة وغير متهيجة مع اتباع تعليمات المختص.",
          },
          {
            q: "ماذا يحدث بعد جلسة الليزر؟",
            a: "قد يظهر احمرار خفيف أو إحساس مؤقت بالحرارة بعد الجلسة، وغالباً ما تعود البشرة إلى طبيعتها بسرعة.",
          },
          {
            q: "ما الكريم المناسب بعد إزالة الشعر بالليزر؟",
            a: "غالباً ما يُنصح بكريم مهدئ ومرطب بعد الجلسة حسب نصيحة المختص وحساسية البشرة.",
          },
          {
            q: "هل النتيجة نهائية؟",
            a: "النتائج تدوم طويلاً، لكن التغيرات الهرمونية والمنطقة المعالجة وطبيعة الحالة قد تؤثر على الحاجة إلى جلسات صيانة مستقبلاً.",
          },
          {
            q: "ابتداءً من أي سن يمكن البدء بإزالة الشعر بالليزر؟",
            a: "الأمر يعتمد على الحالة وطبيعة الشعر والتقييم الطبي. الاستشارة تحدد ما إذا كان العلاج مناسباً.",
          },
          {
            q: "هل الليزر مناسب لكل أنواع البشرة؟",
            a: "العلاج يعتمد على نوع البشرة ولون الشعر والتقنية المستخدمة. التقييم المسبق مهم لاختيار البروتوكول المناسب.",
          },
          {
            q: "لماذا نحتاج إلى عدة جلسات؟",
            a: "الشعر يمر بمراحل نمو مختلفة، والليزر يكون أكثر فعالية على الشعر في مرحلة النمو النشط، لذلك تتكرر الجلسات.",
          },
        ],
      }}
    />
  );
}