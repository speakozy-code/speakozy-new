import { Reveal } from "@/hooks/useScrollReveal";
import { UserCheck, Coins, MessageCircle, ShieldCheck, Rocket } from "lucide-react";

const solutions = [
  {
    icon: UserCheck,
    text: "أنت مش لوحدك، فيه متابعة شخصية معاك وتقييم بشكل دوري لمستواك وميديتور 24 ساعة معاك.",
  },
  {
    icon: Coins,
    text: "فلوسك معانا استثمار! الكورس معانا مش مجرد ساعات بتحضرها دي تجربة تفاعلية كاملة علشان تتعلم أسرع.",
  },
  {
    icon: MessageCircle,
    text: "مش هتحفظ كلمات وتركنها تاني، كل كلمة هتاخدها هتستخدمها على طول في وقتها والسيشن 95% محادثة وتفاعل.",
  },
  {
    icon: ShieldCheck,
    text: "بيئتنا آمنة تمامًا ومساحة دعم وأمان إنك تتكلم وتخطئ بدون خوف أو قلق.",
  },
  {
    icon: Rocket,
    text: "الإسكور اللي عايز توصله مش بعيد! فيه خطة واضحة ومكثفة وكاملة علشان توصل لحلمك بسهولة.",
  },
];

const BridgeSection = () => (
  <section className="py-12 px-4 bg-secondary/20">
    <div className="container mx-auto max-w-4xl">
      <Reveal>
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            خليني بقى أقولك إن المشكلة مش فيك، المشكلة في النظام اللي اتعلمت بيه..
            <br />
            <span className="text-primary font-bold">وفي Speakozy جبنالك الحل</span>
          </p>
        </div>
      </Reveal>
      <div className="space-y-5">
        {solutions.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="bg-primary/10 rounded-lg p-3 shrink-0 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed text-base">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default BridgeSection;
