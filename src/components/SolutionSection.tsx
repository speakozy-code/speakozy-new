import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useScrollReveal";
import {
  UserCheck,
  TrendingUp,
  MessageCircle,
  Shield,
  Target,
  DollarSign,
} from "lucide-react";

const solutions = [
  {
    icon: DollarSign,
    problem: "المشكلة مش فيك",
    solution:
      "المشكلة في النظام اللي اتعلمت بيه.. وفي Speakozy جبنالك الحل الصح.",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: UserCheck,
    problem: "مش لوحدك خالص",
    solution:
      "فيه متابعة شخصية معاك، وتقييم دوري لمستواك، وميديتور 24 ساعة جنبك.",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-500/40",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: TrendingUp,
    problem: "فلوسك استثمار",
    solution:
      "الكورس معانا مش مجرد ساعات بتحضرها — دي تجربة تفاعلية كاملة علشان تتعلم أسرع.",
    color: "from-primary/20 to-teal-500/10",
    border: "hover:border-primary/40",
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: MessageCircle,
    problem: "مش هتحفظ وتنسى",
    solution:
      "كل كلمة هتاخدها هتستخدمها على طول في وقتها. السيشن 95% محادثة وتفاعل.",
    color: "from-violet-500/20 to-purple-500/10",
    border: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Shield,
    problem: "بيئة آمنة تمامًا",
    solution:
      "مساحة دعم وأمان تمامًا إنك تتكلم وتخطئ بدون خوف أو قلق — ده جزء من التعلم.",
    color: "from-amber-500/20 to-orange-500/10",
    border: "hover:border-amber-500/40",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Target,
    problem: "حلمك مش بعيد",
    solution:
      "الإسكور اللي عايز توصله قريب! فيه خطة واضحة ومكثفة وكاملة علشان توصل لحلمك.",
    color: "from-rose-500/20 to-pink-500/10",
    border: "hover:border-rose-500/40",
    iconBg: "bg-rose-500/10 group-hover:bg-rose-500/20",
    iconColor: "text-rose-400",
  },
];

const SolutionSection = () => (
  <section className="py-10 md:py-14 px-4 bg-background relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      {/* Header */}
      <Reveal>
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            ليه Speakozy مختلفة؟
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-snug">
            الحل اللي كنت{" "}
            <span className="text-gradient pb-2 md:pb-4 block md:inline-block">بتدور عليه</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg leading-relaxed">
            مش بس كورس — دي منظومة متكاملة صُممت عشان تحس بالفرق من أول شهر.
          </p>
        </div>
      </Reveal>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {solutions.map((item, i) => (
          <Reveal key={i} delay={i * 80}>
            <div
              className={`
                group relative bg-card border border-border rounded-2xl p-7
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                overflow-hidden cursor-default ${item.border}
              `}
            >
              {/* Card gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-colors ${item.iconBg}`}
                >
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>

                {/* Problem label */}
                <h3 className={`font-black text-xl mb-3 ${item.iconColor}`}>
                  {item.problem}
                </h3>

                {/* Solution text */}
                <p className="text-muted-foreground group-hover:text-foreground/90 leading-relaxed transition-colors text-[15px]">
                  {item.solution}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bottom CTA nudge */}
      <Reveal delay={300}>
        <div className="text-center mt-14">
          <Link to="/pricing">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
              شوف الباقات دلوقتي ←
            </button>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default SolutionSection;
