import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const cta =
    pathname === "/pricing"
      ? { to: "/register", label: "سجّل الآن ←" }
      : pathname === "/register"
        ? null
        : { to: "/pricing", label: "شوف الباقات ←" };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-between md:justify-end md:gap-4 pointer-events-none">
      <a
        href="https://wa.me/201091060951"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {cta && (
        <Link to={cta.to} className="pointer-events-auto">
          <Button variant="hero" size="lg" className="md:px-8 py-6 text-base shadow-xl md:text-lg animate-fade-in">
            {cta.label}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default FloatingButtons;
