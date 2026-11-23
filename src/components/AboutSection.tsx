import { useState, useRef, useEffect } from "react";
import { Reveal } from "@/hooks/useScrollReveal";
import { Users2, GraduationCap, Star } from "lucide-react";

// Number counting logic
const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-primary mb-2">
      {count}{suffix}
    </div>
  );
};

const AboutSection = () => (
  <section id="about" className="py-8 md:py-12 px-3 md:px-4 bg-secondary/5">
    <div className="container mx-auto max-w-4xl text-center">
      <Reveal>
        <div className="text-center mb-10">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            من نحن
          </span>
          <h2 className="text-3xl md:text-5xl font-black">عن Speakozy</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed text-lg mb-16">
          في Speakozy، نحن في مهمة لمساعدة أكثر من مليون متعلم على إتقان اللغة الإنجليزية. هدفنا جعل تعلم اللغة متاحاً وفعالاً وممتعاً للجميع — بغض النظر عن العمر أو الخلفية أو الخبرة.
        </p>
      </Reveal>

      {/* Counters Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 bg-card/50 border border-border/50 p-8 rounded-3xl">
        <Reveal delay={100}>
          <div className="flex flex-col items-center">
            <Users2 className="w-8 h-8 text-muted-foreground mb-4 opacity-50" />
            <CountUp target={1000} suffix="+" />
            <p className="font-semibold text-foreground/80">طالب وطالبة</p>
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="flex flex-col items-center">
            <GraduationCap className="w-8 h-8 text-muted-foreground mb-4 opacity-50" />
            <CountUp target={8} suffix="" />
            <p className="font-semibold text-foreground/80">طلاب حد أقصى للمجموعة</p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col items-center">
            <Star className="w-8 h-8 text-muted-foreground mb-4 opacity-50" />
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">4.9</div>
            <p className="font-semibold text-foreground/80">تقييم الطلاب</p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const CourseOutcomesSection = () => (
  <section className="py-8 md:py-12 px-3 md:px-4 bg-secondary/5">
    <div className="container mx-auto max-w-4xl text-center">
      <Reveal>
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            المخرجات
          </span>
          <h2 className="text-3xl md:text-5xl font-black">إيه اللي هتطلع بيه من الكورس؟</h2>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-5 text-right">
        {[
          "هتتكلم انجليزي بطلاقة دون خوف أو توتر",
          "هتفهم الناس بشكل أسرع واستجابتك هتكون طبيعية",
          "هتتعلم جميع الكلمات والتعبيرات المستخدمة يوميًا",
          "هتاخد تاسكات يومية + تقييمات مستمرة",
        ].map((item, i) => (
          <Reveal key={item} delay={i * 80}>
            <div className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-sm border border-border hover:border-primary/40 transition-all duration-300 group">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">✓</span>
              <span className="text-foreground pt-1">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
export { CourseOutcomesSection };
