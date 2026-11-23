import { Reveal } from "@/hooks/useScrollReveal";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  // Arabic testimonials first
  "حقيقي أتمنى منساش المرة اللي دخلت معاكم فيها، كنت في الأول محروج جداً أتكلم، بس مع الوقت مجرد أقل من ساعة بدأت آخد راحتي، وحقيقي من أحسن التجارب اللي مريت بيها في حياتي ♥️",
  "السلام عليكم ورحمة الله وبركاته، إزيك يا أحمد أخبارك إيه. بجد أنا كنت متخوفة جداً من فكرة إني آخد كورس إنجليزي أونلاين، بس بصراحة الكورس تحفة جداً، وفعلاً مش بحس بملل خالص طول فترة السيشن الساعتين بسبب الـ games والتفاعل المستمر.",
  "والله الكورس ممتاز جداً ومستوايا من زيرو بقيت بعرف أتكلم وأكوّن جمل ومستوايا بقى أحسن كتير، ومش بحس بوقت الكورس بسبب أسلوب حضرتك البسيط والألعاب اللي في السيشن والتاسكات الفيديوهات ومخلياني مش بسيب يوم غير وأنا عملت حاجة بالإنجلش.",
  "السيشن أكثر من رائع بنعمل activities كتير و games وده بيساعدنا نتعلم ونتكلم بطلاقة، وكمان shadowing و reading وممكن نصحح الأخطاء لبعض وإحنا بنتكلم، وده كمان بيساعدنا نتعلم من أخطاء بعض ونوصل لمرحلة إننا نتكلم من غير ما نفكر.",
  "بصراحة قبل ما أنضم للكورس ده كنت بدور على كورس إنجليزي مختلف مش تقليدي ومش ممل. كنت محتاجة مكان يخليني أتعلم براحتي من غير ضغط أو خوف من الغلط. من أول سيشن حسّيت إن الكورس ده تجربة مختلفة فعلًا.",
  "أكتر حاجة نفعت معايا جداً في الإنجليزي وكسرت حاجز الخوف إني أتكلم، والسيشنات لطيفة جداً وساعدتني كتير إني أطور من الإنجليزي بتاعي.",
  // English testimonials
  "The session was really good and well-organized by the instructor. I'm also happy that there were people with different English levels, so everyone could learn from each other.",
  "The session was really entertaining and enjoyable. Thanks a lot for your efforts with us. And also about the information that you send it to us every day on the group.",
  "To be honest, I enjoyed today's session. The way you explained the words made everything much clearer and easier to understand. I also liked the variety of ideas you shared.",
  "As always, the session was amazing, and your explanation was really appreciated. The discussions were very interesting, and each time they become even more enjoyable than before.",
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "center", skipSnaps: false },
    [Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-6 md:py-12 px-2 md:px-4 bg-secondary/5">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
              تجارب حقيقية
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">آراء طلاب Speakozy</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg leading-relaxed">شوف بنفسك تجارب طلابنا الحقيقية</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative max-w-6xl mx-auto px-8 md:px-12">
            
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-10 bg-card border border-border rounded-full p-1.5 md:p-3 shadow-lg hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 z-10 bg-card border border-border rounded-full p-1.5 md:p-3 shadow-lg hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div className="overflow-hidden p-4 -m-4" ref={emblaRef}>
              <div className="flex backface-hidden gap-4 md:gap-6 touch-pan-y">
                {testimonials.map((text, i) => (
                  <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 relative">
                    <div className="bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-8 h-full hover:border-primary/50 transition-all duration-300 shadow-sm shadow-black/5 flex flex-col justify-between min-h-[220px] md:min-h-[250px] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                      <p className="text-foreground/90 font-medium leading-relaxed text-sm md:text-base" dir={i >= 6 ? "ltr" : "rtl"}>
                        "{text}"
                      </p>
                      <div className="flex items-center gap-1 mt-4 md:mt-6 text-primary">
                        {"★★★★★".split("").map((s, j) => (
                          <span key={j} className="text-base md:text-lg drop-shadow-sm">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;

