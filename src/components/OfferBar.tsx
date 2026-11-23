import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const OfferBar = () => {
  const { pathname } = useLocation();
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 0,
  });

  useEffect(() => {
    // Simple countdown logic simulation
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset if hit zero
              hours = 2;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);
  const bookTo = pathname === "/pricing" || pathname === "/register" ? "/register" : "/pricing";

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm font-bold flex flex-wrap justify-center items-center gap-2 md:gap-4 z-50 relative">
      <span>عرض Level واحد بـ ٩٩٩ جنيه بدل ١٬٥٠٠ — أماكن محدودة </span>
      <div className="flex items-center gap-1.5 flex-row-reverse" dir="ltr">
        <span className="bg-background/20 px-2 py-0.5 rounded text-xs md:text-sm">
          {formatTime(timeLeft.hours)}
        </span>
        <span>:</span>
        <span className="bg-background/20 px-2 py-0.5 rounded text-xs md:text-sm">
          {formatTime(timeLeft.minutes)}
        </span>
        <span>:</span>
        <span className="bg-background/20 px-2 py-0.5 rounded text-xs md:text-sm">
          {formatTime(timeLeft.seconds)}
        </span>
      </div>
      <Link to={bookTo} className="text-primary-foreground underline decoration-primary-foreground/50 hover:decoration-primary-foreground transition-all ml-2 hidden md:inline-block">احجز الآن</Link>
    </div>
  );
};

export default OfferBar;
