import { Reveal } from "@/hooks/useScrollReveal";
import { BookOpen, DollarSign, Brain, Mic, Target, Compass, HeartCrack } from "lucide-react";

const painPoints = [
  { icon: BookOpen, text: "جربت تذاكر لوحدك أو بكورسات مسجلة وماوصلتش لحاجة؟" },
  { icon: DollarSign, text: "دفعت فلوس كتير في كورسات وماستفدتش حاجة؟" },
  { icon: Brain, text: "حافظ كلمات كتير بس مش بتعرف توظفها في كلامك؟" },
  { icon: Mic, text: "بتتكسف تتكلم قدام الناس ومابتقدرش تجمع الكلام؟" },
  { icon: Target, text: "عايز تقدم على المنحة اللي هتغير حياتك بس محتاج الآيلتس؟" },
  { icon: Compass, text: "بتحضر للآيلتس ومش عارف تبدأ منين؟" },
  { icon: HeartCrack, text: "كنت شاطر في اللغة بس مدرسك كرهك فيها وبقى عندك عُقدة؟" },
];

const PainPointsSection = () => (
  <section className="py-8 md:py-12 px-3 md:px-4 bg-background">
    <div className="container mx-auto">
      <Reveal>
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            المشاكل الشائعة
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">هل هذا أنت؟</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg leading-relaxed">لو أي حاجة من دول بتحصل معاك — يبقى أنت في المكان الصح</p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {painPoints.map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-sm group">
              <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed pt-1 font-medium">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const audiences = [
  {
    emoji: "🎓",
    title: "طالب جامعي",
    problem: "عاوز تطوّر الإنجليزي وتتخرج جاهز لسوق العمل.",
    result: "هتتخرج من الجامعة بتتكلم بثقة وقادر تقدم في أي منحة أو وظيفة في شركات عالمية.",
  },
  {
    emoji: "💼",
    title: "خريج أو موظف",
    problem: "عايز وظيفة أو ترقية ومحتاج الإنجليزي.",
    result: "خلال 3-6 شهور: هتطوّر الإنجليزي وتدخل المقابلات واجتماعاتك بثقة.",
  },
  {
    emoji: "🔄",
    title: "مُحبط من تجارب سابقة",
    problem: "جربت كورسات ودفعت فلوس — ومفيش حاجة اتغيرت.",
    result: "من أول شهر: هتحس بالفرق. المشكلة مكنتش فيك.",
  },
];

const AudienceSection = () => (
  <section className="py-8 md:py-12 px-3 md:px-4 bg-secondary/10">
    <div className="container mx-auto">
      <Reveal>
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            الفئة المستهدفة
          </span>
          <h2 className="text-3xl md:text-5xl font-black">الكورس ده لمين؟</h2>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {audiences.map((a, i) => (
          <Reveal key={a.title} delay={i * 120}>
            <div className="bg-card border border-border rounded-3xl p-8 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/5">
              <div className="text-5xl mb-6">{a.emoji}</div>
              <h3 className="font-bold text-xl mb-4">{a.title}</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed min-h-[40px]">{a.problem}</p>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-primary" />
                <span className="text-primary font-bold text-xs block mb-2">النتيجة المتوقعة:</span>
                <span className="text-sm leading-relaxed font-medium block">{a.result}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export { PainPointsSection, AudienceSection };
