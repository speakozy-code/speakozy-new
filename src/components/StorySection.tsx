import { Reveal } from "@/hooks/useScrollReveal";
import { Heart, Lightbulb, Target, Award } from "lucide-react";

const storyBlocks = [
  {
    icon: Heart,
    title: "قصتنا",
    content:
      "قصتنا بدأت بشغف حقيقي لتغيير علاقتك باللغة الإنجليزية للأبد.\n\nلاحظنا فجوة كبيرة بتفصل بين طموحك وبين اللي بيتقدملك في السوق؛ طلاب متميزين بيضيعوا في تشتت المصادر، وغياب المنهج الحقيقي اللي بيوصل لنتيجة. فرص كتير بتضيع، ومجهود بيتبذل على الأرض، لحد ما \"عقدة الإنجليزي\" بقت هي اللي بتتحكم في حياتك وقراراتك.",
    accent: "from-rose-500/20 to-pink-500/20",
    borderAccent: "hover:border-rose-500/40",
  },
  {
    icon: Lightbulb,
    title: "إحنا جينا نغير المعادلة!",
    content:
      "أسسنا Speakozy ككيان شبابي وعصري، هدفه يقدم اللغة بشكل تفاعلي وعملي يخليك توصل لهدفك أسرع وأسهل. فريقنا مش مجرد مدرسين، دول مدربين محترفين \"مقفلين اللعبة\"، عارفين العقبات اللي بتواجهك وعارفين إزاي يعدوك منها.",
    accent: "from-amber-500/20 to-yellow-500/20",
    borderAccent: "hover:border-amber-500/40",
  },
  {
    icon: Target,
    title: "هدفنا: نتحول من \"دراسة اللغة\" لـ \"عايشين باللغة\"",
    content:
      "هدفنا إننا نكسر حاجز الخوف عندك، ونحول الإنجليزي من مادة تقيلة لمهارة ممتعة بتفتح لك أبواب العالم. إحنا هنا عشان نبني جيل بيتكلم بثقة، بيعبر عن نفسه بطلاقة، وبيقتنص الفرص وهو مطمن.",
    accent: "from-blue-500/20 to-cyan-500/20",
    borderAccent: "hover:border-blue-500/40",
  },
  {
    icon: Award,
    title: "وعودنا صادقة.. ونتايجنا ملموسة",
    content:
      "في Speakozy، إحنا مش بنبيع الوهم. وعودنا حقيقية وتجارب طلابنا هي أكبر دليل. من أول مستوى هتحس بالفرق في ثقتك ونطقك؛ لأننا بنركز على النتائج اللي تقدر تلمسها وتستخدمها في حياتك اليومية، مش مجرد كلام نظري في ورق.",
    accent: "from-emerald-500/20 to-green-500/20",
    borderAccent: "hover:border-emerald-500/40",
  },
];

const StorySection = () => (
  <section id="story" className="py-10 md:py-14 px-3 md:px-4 relative overflow-hidden">
    {/* Decorative blurs */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="container mx-auto max-w-5xl relative z-10">
      <Reveal>
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            اعرف أكتر
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-snug">
            أعرف أكتر عن{" "}
            <span className="text-gradient pb-2 md:pb-4 block md:inline-block">Speakozy</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-6 md:gap-8">
        {storyBlocks.map((block, i) => (
          <Reveal key={block.title} delay={i * 120}>
            <div
              className={`group bg-card/50 backdrop-blur-sm border border-border/60 rounded-3xl p-7 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 ${block.borderAccent}`}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${block.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  >
                    <block.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-bold text-xl md:text-2xl mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {block.title}
                  </h3>
                  {block.content.split("\n\n").map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-muted-foreground leading-[1.9] text-base md:text-lg mb-3 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default StorySection;
