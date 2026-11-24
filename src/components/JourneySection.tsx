import { Reveal } from "@/hooks/useScrollReveal";
import { ClipboardCheck, Users, MessageCircle, TrendingUp, Trophy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const journeySteps = [
  {
    icon: ClipboardCheck,
    phase: "المرحلة 1",
    time: "اليوم",
    title: "تصفية وتحليل لمستواك",
    desc: "نقعد معاك، نفهم شخصيتك، ونحدد مستواك ونقاط القوة والضعف بدقة، عشان نبدأ صح. بدون التزام.",
    color: "from-emerald-500/20 to-teal-500/20",
    glowColor: "shadow-emerald-500/20",
  },
  {
    icon: Users,
    phase: "المرحلة 2",
    time: "الأسبوع 1",
    title: "بتنضم لعيلتك الجديدة",
    desc: "هتكون في مجموعة داعمة وآمنة من ٤ إلى ٦ طلاب بس. بيئة مريحة تخليك تتكلم بحرية ومن غير كسوف.",
    color: "from-blue-500/20 to-indigo-500/20",
    glowColor: "shadow-blue-500/20",
  },
  {
    icon: MessageCircle,
    phase: "المرحلة 3",
    time: "الشهر 1 (4 أسابيع مركزة)",
    title: "وداعاً للخوف، أهلاً بالكلام",
    desc: "8 جلسات مباشرة كلها تفاعل. مش هتحفظ كلمات وتركنها، كل كلمة هتاخدها هتستخدمها على طول في وقتها والسيشن محادثة وتفاعل.",
    color: "from-violet-500/20 to-purple-500/20",
    glowColor: "shadow-violet-500/20",
  },
  {
    icon: TrendingUp,
    phase: "المرحلة 4",
    time: "الشهر 3",
    title: "خطتك واضحة.. إنت في الطريق الصح",
    desc: "مع المتابعة الأسبوعية والتصحيح المباشر، النطق بقى مظبوط وبتعبر عن نفسك بثقة في مواضيع كتير.",
    color: "from-amber-500/20 to-orange-500/20",
    glowColor: "shadow-amber-500/20",
  },
  {
    icon: Trophy,
    phase: "المرحلة 5",
    time: "الشهر 6+",
    title: "وحش انجليزي.. وتتكلم زي العربي",
    desc: "الطلاقة بقت أسلوب حياتك. سواء عايز تقدم على منحة، تدخل Interview بثقة، أو تخلص شغلك، إنت جاهز لأي حاجة.",
    color: "from-primary/20 to-emerald-400/20",
    glowColor: "shadow-primary/30",
  },
];

const JourneySection = () => (
  <section id="journey" className="py-10 md:py-16 px-3 md:px-4 relative overflow-hidden">
    {/* Decorative background blurs */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="container mx-auto">
      <Reveal>
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            خطوة بخطوة
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-snug">
            رحلتك مع <span className="text-gradient pb-2 md:pb-4 block md:inline-block">Speakozy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            من أول تقييم مجاني لحد ما تبقى بتتكلم إنجليزي بطلاقة
          </p>
        </div>
      </Reveal>

      {/* Vertical Timeline */}
      <div className="max-w-2xl mx-auto relative">
        {/* Animated vertical line - behind icons */}
        <div className="absolute right-[23px] md:right-[31px] top-0 bottom-0 w-[3px] rounded-full overflow-hidden z-0">
          <div className="w-full h-full bg-gradient-to-b from-primary/60 via-primary/30 to-primary/10" />
          <div className="absolute top-0 w-full h-28 bg-gradient-to-b from-primary to-transparent animate-pulse opacity-60" />
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {journeySteps.map((step, i) => (
            <Reveal key={step.phase} delay={i * 150}>
              <div className="relative flex items-start gap-5 md:gap-8 group">
                
                {/* Step Indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} border-2 border-primary/20 flex items-center justify-center group-hover:border-primary/60 group-hover:scale-110 transition-all duration-500 shadow-lg ${step.glowColor} backdrop-blur-sm`}>
                    <step.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                  </div>
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-2">
                  {/* Phase & Time Badge */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {step.phase}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-5 md:p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 group-hover:bg-card/90">
                    <h3 className="font-bold text-lg md:text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Reveal delay={200}>
        <div className="flex justify-center mt-14 md:mt-20">
          <Link to="/pricing">
            <Button variant="hero" size="lg" className="px-10 py-7 text-lg rounded-full shadow-xl shadow-primary/20">
              شوف الباقات دلوقتي ←
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

const features = [
  { num: "01", title: "متابعة يومية مستمرة", desc: "المدرب بيتابع تقدمك كل يوم خطوة بخطوة." },
  { num: "02", title: "مصادر + بطاقة تقدم", desc: "بعد كل سيشن، هتحصل على مصادر وبطاقة بتقدمك." },
  { num: "03", title: "خطة 4 أسابيع مركزة", desc: "8 جلسات مباشرة منظمة مع نتائج حقيقية." },
  { num: "04", title: "جلسات زووم لايف", desc: "ساعتين تفاعل مباشر مع المدرب وزملاءك." },
  { num: "05", title: "مجموعات صغيرة", desc: "من ٤ إلى ٦ طلاب — كل واحد بياخد اهتمام كافي." },
  { num: "06", title: "تقييم مستوى مجاني", desc: "بنحدد مستواك بدقة قبل ما تبدأ." },
  { num: "07", title: "تاسكات يومية", desc: "تمارين يومية تساعدك تتحسن بسرعة." },
  { num: "08", title: "سيشنات مسجلة", desc: "كل الجلسات متسجلة تقدر ترجعلها في أي وقت." },
];

const WhyDifferentSection = () => (
  <section className="py-8 md:py-12 px-3 md:px-4 bg-background">
    <div className="container mx-auto">
      <Reveal>
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            التميز
          </span>
          <h2 className="text-3xl md:text-5xl font-black">ليه Speakozy مختلفة؟</h2>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <Reveal key={f.num} delay={i * 80}>
            <div className="bg-card/50 border border-border rounded-2xl p-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary text-3xl font-black group-hover:text-gradient transition-colors">{f.num}</div>
                <CheckCircle className="w-5 h-5 text-primary/30 group-hover:text-primary transition-colors duration-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground/90">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="py-8 md:py-12 px-3 md:px-4 bg-secondary/10">
    <div className="container mx-auto max-w-4xl">
      <Reveal>
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            مقارنة
          </span>
          <h2 className="text-3xl md:text-5xl font-black">Speakozy مقابل الأكاديميات التقليدية</h2>
        </div>
      </Reveal>
      <Reveal delay={150}>
        <div className="overflow-x-auto pb-4">
          <table className="w-full border border-border rounded-2xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-card">
                <th className="p-5 text-right border-b border-border bg-card/80"></th>
                <th className="p-5 text-center border-b border-border text-primary font-black text-lg bg-primary/5">Speakozy</th>
                <th className="p-5 text-center border-b border-border text-muted-foreground">الأكاديميات</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["السعر", "سعر مناسب ✅", "أسعار خرافية ❌"],
                ["عدد الطلاب", "من ٤ إلى ٦ كحد أقصى ✅", "من 15 إلى 25 ❌"],
                ["الجلسات", "لايف على زووم ✅", "مسجلة أو مكتظة ❌"],
                ["التقييم", "مجاني قبل البدء ✅", "مش متوفر ❌"],
                ["المتابعة", "مع المدرب مباشرة ✅", "معدومة ❌"],
                ["الالتزام", "4 أسابيع بس ✅", "فصلي / سنوي ❌"],
              ].map(([label, us, them]) => (
                <tr key={label} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="p-5 font-bold text-foreground/80">{label}</td>
                  <td className="p-5 text-center text-primary font-bold bg-primary/5">{us}</td>
                  <td className="p-5 text-center text-muted-foreground">{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </div>
  </section>
);

export { JourneySection, WhyDifferentSection, ComparisonSection };
