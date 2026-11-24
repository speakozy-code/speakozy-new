import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/useScrollReveal";
import {
  Check,
  Users,
  Crown,
  Clock,
  BookOpen,
  LogIn,
  ExternalLink,
} from "lucide-react";

const groupFeatures = [
  "مناسب من سن ١٥ سنة فأكثر",
  "جلسات Online Live عبر Zoom",
  "مجموعات صغيرة من ٤ إلى ٦ طلاب",
  "كل Level: ٤ أسابيع · ٨ جلسات · جلستين أسبوعيًا",
  "مدة الجلسة ساعتان",
  "Vocabulary + Grammar + Idioms + Expressions",
  "Conversation Practice داخل نفس الجلسة",
  "تسجيل جميع الجلسات للمراجعة",
  "Daily Tasks + Homework + Continuous Feedback",
  "تقييم مستوى مجاني قبل البدء",
  "سيستم كامل خاص بيك فيه كل اللي محتاجه علشان تطوّر من نفسك",
];

const vipFeatures = [
  "جلسات ١:١ خاصة مع المدرب",
  "Online Live عبر Zoom",
  "خطة تعلم مخصصة لمستواك وهدفك",
  "Feedback فوري داخل الجلسة",
  "تسجيل كل الجلسات للمراجعة",
  "Daily Tasks + Homework بعد كل جلسة",
  "مواعيد مرنة تناسب جدولك",
  "Vocabulary + Grammar + Idioms مع تطبيق فوري",
  "١٢ Level (٩ أساسي + ٣ متقدم)",
  "تقييم مستوى مجاني قبل البدء",
];

const vipTiers = [
  {
    name: "Standard VIP",
    duration: "٦٠ دقيقة / جلسة",
    price: "٢٬٤٩٩",
    original: "٣٬٥٠٠",
    highlight: false,
  },
  {
    name: "Premium VIP",
    duration: "٩٠ دقيقة / جلسة",
    price: "٣٬٢٩٩",
    original: "٤٬٠٠٠",
    highlight: true,
  },
];

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 min-w-0">
    {items.map((feature) => (
      <li key={feature} className="flex items-start gap-3">
        <div className="bg-primary/10 rounded-full p-1 mt-0.5 shrink-0">
          <Check className="w-4 h-4 text-primary" />
        </div>
        <span className="text-foreground font-medium leading-relaxed text-sm sm:text-base min-w-0 break-words">{feature}</span>
      </li>
    ))}
  </ul>
);

const PricingSection = () => (
  <section id="pricing" className="py-8 md:py-14 px-3 md:px-4 bg-background overflow-x-hidden">
    <div className="container mx-auto max-w-6xl">
      <Reveal>
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            البرامج والأسعار
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-5 leading-snug">
            اختار المسار المناسب لهدفك
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            اللغة Skill مش مجرد معلومات. في Speakozy بنركّز على{" "}
            <span className="text-foreground font-semibold">Speaking & Conversation Practice</span>
            {" "}عشان تتكلم بثقة — مش بالحفظ التقليدي.
          </p>
        </div>
      </Reveal>

      <div className="space-y-8 md:space-y-10">
        {/* Group Program */}
        <Reveal>
          <article className="bg-card border border-border rounded-3xl p-4 sm:p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start">
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary tracking-wide">Group Program</p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black">البرنامج الجماعي</h2>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
                  لو بتفهم إنجليزي لكن الكلام بيقف أول ما تتكلم — البرنامج ده مصمَّم عشانك.
                  مجموعات صغيرة، تفاعل حقيقي، ومتابعة مستمرة لحد ما تتكلم بثقة.
                </p>

                <FeatureList items={groupFeatures} />
                <a
                  href="https://speakozy-learning.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 mr-9 font-bold text-primary hover:underline"
                >
                  <LogIn className="w-4 h-4" />
                  تسجيل الدخول
                </a>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    ١٥ Level (١٢ أساسي + ٣ متقدم)
                  </span>

                </div>
              </div>

              <div className="bg-secondary/40 border border-border rounded-2xl p-7 md:p-8 text-center lg:sticky lg:top-28">
                <p className="text-sm font-bold text-muted-foreground mb-3">Level واحد · شهر كامل</p>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-6xl font-black text-primary leading-none">٩٩٩</span>
                  <span className="text-lg font-bold text-muted-foreground mb-1">جنيه</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  بدل <span className="line-through">١٬٥٠٠ جنيه</span>
                </p>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  الأماكن محدودة (٤–٦ طلاب) لضمان أفضل تجربة تعلم
                </p>
                <Link to="/register" className="block">
                  <Button variant="hero" size="lg" className="w-full text-lg py-7 rounded-2xl">
                    احجز مكانك في الجروب
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-4">نحدد مستواك مجانًا قبل ما تبدأ</p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* VIP Mentorship */}
        <Reveal delay={100}>
          <article className="bg-card border border-border rounded-3xl p-4 sm:p-6 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary tracking-wide">VIP Mentorship</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black">برنامج الإرشاد الخاص</h2>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base md:text-lg max-w-3xl">
              لو عندك هدف محدد — شغل، interview، سفر، أو دراسة بالخارج —
              البرنامج ده اتعمل عشانك. ٨ جلسات كاملة، خطة مخصصة، ومتابعة فردية.
            </p>

            <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start">
              <FeatureList items={vipFeatures} />

              <div className="space-y-4">
                {vipTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-6 md:p-7 text-center border ${
                      tier.highlight
                        ? "border-primary bg-primary/5"
                        : "border-border bg-secondary/40"
                    }`}
                  >
                    <h3 className="text-xl font-black mb-1">{tier.name}</h3>
                    <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
                      <Clock className="w-4 h-4 text-primary" />
                      {tier.duration}
                    </p>
                    <div className="flex items-end justify-center gap-2 mb-1">
                      <span className="text-4xl font-black text-primary leading-none">{tier.price}</span>
                      <span className="text-base font-bold text-muted-foreground mb-0.5">جنيه</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      بدل <span className="line-through">{tier.original} جنيه</span>
                    </p>
                    <Link to="/register" className="block">
                      <Button
                        variant={tier.highlight ? "hero" : "heroOutline"}
                        size="lg"
                        className="w-full text-base py-6 rounded-2xl"
                      >
                        احجز {tier.name}
                      </Button>
                    </Link>
                  </div>
                ))}
                <p className="text-xs text-center text-muted-foreground leading-relaxed px-2">
                  أماكن الـ VIP محدودة كل شهر · نحدد مستواك مجانًا قبل البدء
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
);

export default PricingSection;
