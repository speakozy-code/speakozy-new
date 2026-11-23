import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/useScrollReveal";
import logo from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.webp";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true; // default dark for SSR

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between py-3.5 px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <img 
            src={isDark ? logo : logoLight} 
            alt="SpeaKozy" 
            className="h-10 md:h-12 w-auto transition-opacity duration-300" 
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm text-foreground/80 font-medium tracking-wide">
          <Link to="/#story" className="hover:text-primary transition-colors duration-300">من نحن</Link>
          <Link to="/pricing" className="hover:text-primary transition-colors duration-300">الباقات</Link>
          <Link to="/#testimonials" className="hover:text-primary transition-colors duration-300">آراء الطلاب</Link>
          <Link to="/#faq" className="hover:text-primary transition-colors duration-300">أسئلة شائعة</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="https://speakozy-learning.vercel.app/" target="_blank" rel="noreferrer">
            <Button variant="heroOutline" size="sm" className="px-6 rounded-full font-bold">تسجيل الدخول</Button>
          </a>
          <Link to="/pricing">
            <Button variant="hero" size="sm" className="px-6 rounded-full font-bold">شوف الباقات ←</Button>
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button 
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border absolute w-full py-4 px-4 flex flex-col gap-4 text-center font-bold">
          <Link to="/#story" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary border-b border-border/50">من نحن</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary border-b border-border/50">الباقات</Link>
          <Link to="/#testimonials" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary border-b border-border/50">آراء الطلاب</Link>
          <Link to="/#faq" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary border-b border-border/50">أسئلة شائعة</Link>
          <a href="https://speakozy-learning.vercel.app/" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="pt-2 block">
            <Button variant="heroOutline" className="w-full">تسجيل الدخول</Button>
          </a>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="pt-2">
            <Button variant="hero" className="w-full">شوف الباقات</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

// CountUp Logic is moved to About section! (But we kept the old definition here if it was used elsewhere. The prompt asks it to be in About).
// However, the original Hero used it. I will leave it here for the Hero stats but remove it from the About section if we implement it there natively.
const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 40;
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
    <div ref={ref} className="text-4xl md:text-5xl font-black text-primary">
      {count}{suffix}
    </div>
  );
};

const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden py-6 md:py-12">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12 md:gap-16">
        
        {/* Reel / Video representation on Left physically (Right organically via RTL flex-row-reverse hack) */}
        <Reveal className="w-full md:w-5/12 flex justify-center mt-8 md:mt-0" delay={200}>
          <div className="w-full max-w-sm aspect-[9/16] bg-black border-2 border-primary/30 rounded-[2.5rem] shadow-2xl overflow-hidden transition-transform hover:scale-[1.02]">
            <iframe
              src="https://www.youtube.com/embed/JaGCrGHmkwA?rel=0&modestbranding=1&playsinline=1"
              title="Speakozy Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </Reveal>

        {/* Text Area (Right natively, physically on left visually) */}
        <div className="w-full md:w-7/12 text-center md:text-right">
          <Reveal>
            <div className="inline-block bg-primary/10 text-black dark:text-primary border border-primary/30 rounded-full px-5 py-1.5 text-sm font-semibold mb-8">
              أكاديمية متخصصة في تعليم الإنجليزية
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.4]">
              <span className="block mb-4">مع <span className="text-gradient">Speakozy</span></span>
              <span className="block mb-4">هتتكلم إنجليزي</span>
              <span className="block">زي العربي بالظبط</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground text-lg md:text-xl font-medium mb-4">مدربين محترفين · جلسات لايف · حد أقصى ٨ طلاب</p>
            <p className="text-muted-foreground text-sm mb-12">جلسات مباشرة على زووم + متابعة شخصية + تقييم دوري</p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full text-lg px-10 py-7">شوف الباقات ←</Button>
              </Link>
              <a href="https://speakozy-learning.vercel.app/" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full text-lg px-10 py-7">تسجيل الدخول</Button>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

    </div>
  </section>
);

export { Navbar, HeroSection };
