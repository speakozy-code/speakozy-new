import { Reveal } from "@/hooks/useScrollReveal";

const courses = [
  { img: "https://speakozy.netlify.app/img/1.png", title: "خطة دورة 4 أسابيع", desc: "برنامج مركز لمدة 4 أسابيع يتضمن 8 جلسات مباشرة منظمة." },
  { img: "https://speakozy.netlify.app/img/undraw_online-learning_tgmv.png", title: "جلسات زووم مباشرة", desc: "دروس مباشرة لمدة ساعتين على زووم مع التحدث والتفاعل الفوري." },
  { img: "https://speakozy.netlify.app/img/undraw_group-video_k4jx.png", title: "مجموعات صغيرة وتقييم مجاني", desc: "محدودة من ٤ إلى ٦ طلاب مع تقييم مستوى مجاني قبل البدء." },
  { img: "https://speakozy.netlify.app/img/2.png", title: "طريقة تفاعلية وسعر معقول", desc: "تعلم تفاعلي 100٪ مع مناقشات وممارسة واقعية بسعر عادل." },
];

const CoursesSection = () => (
  <section className="py-12 px-4">
    <div className="container mx-auto">
      <Reveal>
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            دورات اللغة الإنجليزية
          </span>
          <h2 className="text-3xl md:text-5xl font-black">دروس تدريب أونلاين للتعلم عن بُعد</h2>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group">
              <img src={c.img} alt={c.title} className="w-full h-40 object-contain mb-5 group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <h3 className="font-bold text-lg mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
