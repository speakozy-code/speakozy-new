import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "إزاي بيتم التقييم؟", a: "بنبعتلك اختبار قصير أونلاين ونحدد مستواك بدقة علشان نقترحلك الدورة المناسبة ليك." },
  { q: "الدورة أونلاين ولا حضوري؟", a: "كل الدورات أونلاين على زووم — تتعلم من أي مكان بجودة عالية." },
  { q: "كام عدد الطلاب في الكلاس؟", a: "من ٤ لـ ٦ طلاب كحد أقصى علشان كل واحد ياخد اهتمام كافي." },
  { q: "مدة الدورة كام؟", a: "4 أسابيع — جلستين في الأسبوع، كل جلسة ساعتين." },
  { q: "جربت كورسات قبل كده وما استفدتش — ليه عندكم هيختلف؟", a: "لإن عندنا جلسات لايف مباشرة مع مدرب متخصص ومجموعات صغيرة — مش محتوى مسجل." },
  { q: "هل أقدر أتعلم من اليوتيوب ببلاش — ليه أدفع؟", a: "اليوتيوب مفيد للمعلومات، بس مش هيديك تفاعل حقيقي ولا تصحيح أخطاء ولا متابعة." },
  { q: "فيه برايفت سيشنز؟", a: "أيوه! عندنا جلسات خاصة — تركيز كامل على المحادثة والتحدث." },
];

const FAQSection = () => (
  <section id="faq" className="py-12 px-3 md:px-4 bg-secondary/30">
    <div className="container mx-auto max-w-3xl">
      <Reveal>
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            استفسارات
          </span>
          <h2 className="text-3xl md:text-5xl font-black">أسئلة شائعة</h2>
        </div>
      </Reveal>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={i} delay={i * 60}>
            <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors duration-300">
              <AccordionTrigger className="text-right font-bold py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          </Reveal>
        ))}
      </Accordion>
    </div>
  </section>
);

type FinalCTAProps = {
  to?: string;
  ctaLabel?: string;
  subtitle?: string;
};

const FinalCTA = ({
  to = "/pricing",
  ctaLabel = "ابدأ رحلتك الآن ←",
  subtitle = "الباقي عليك خطوة واحدة — شوف الباقات وسجّل.",
}: FinalCTAProps) => (
  <section className="py-14 px-3 md:px-4 text-center relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
    <div className="container mx-auto max-w-2xl relative z-10">
      <Reveal>
        <span className="inline-block text-primary font-bold text-sm tracking-wider mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
          مستني إيه؟
        </span>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-snug">
          <span className="block mb-3">بطل تأجيل</span>
          <span className="block text-gradient pb-2 md:pb-4">وخد الخطوة</span>
        </h2>
        <p className="text-muted-foreground mb-14 text-lg">{subtitle}</p>
        <Link to={to}>
          <Button variant="hero" size="lg" className="text-lg px-12 py-7">{ctaLabel}</Button>
        </Link>
      </Reveal>
    </div>
  </section>
);

export { FAQSection, FinalCTA };
