import { Reveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const goals = [
  "دخول انترفيو بثقة",
  "فهم الإيميلات بسهولة",
  "التحدث بطلاقة مع الآخرين",
  "التقديم على شغل جاهز",
  "السفر بدون خوف",
];

const SixMonthsSection = () => {
  return (
    <section className="py-8 md:py-12 px-3 md:px-4 bg-secondary/10 relative overflow-hidden">
      {/* Background glow for beauty */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
                الرؤية
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-6">تخيل نفسك بعد <span className="text-gradient">6 شهور</span></h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                الإنجليزي عمره ما كان أزمة، المشكلة كانت في الطريقة. بعد 6 شهور من دلوقتي، مكانك هيكون مختلف تمامًا.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {goals.map((goal, index) => (
              <Reveal key={index} delay={index * 100} className={`${index === goals.length - 1 && goals.length % 2 !== 0 ? 'sm:col-span-2 sm:w-1/2 mx-auto w-full' : ''}`}>
                <div className="flex items-center gap-3 bg-card p-5 rounded-xl border border-border shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  </div>
                  <span className="text-foreground font-semibold text-lg">{goal}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={goals.length * 50}>
            <Link to="/pricing" className="inline-block w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full text-lg py-7 px-12 hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                شوف الباقات وابدأ ←
              </Button>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SixMonthsSection;
