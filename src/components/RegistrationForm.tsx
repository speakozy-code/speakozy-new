import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/useScrollReveal";
import { CheckCircle, Loader2 } from "lucide-react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzWL4xRaOapkOXp0o5rGD5dYRgKE6YT0jwzUq3BgQoVbc1bY0pUZJRsHiwLGvasOqiQoQ/exec";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", course: "", level: "", notes: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ph = formData.phone.replace(/[\s-]/g, "");
    if (!/^(01[0125]\d{8}|\+[1-9]\d{7,14})$/.test(ph)) {
      setPhoneError("لو رقمك مصري اكتبه 01XXXXXXXXX، ولو من دولة تانية لازم يبدأ بـ + وكود الدولة (مثال: +966501234567)");
      return;
    }
    setPhoneError("");
    setStatus("loading");

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-secondary border border-border rounded-lg p-3.5 text-foreground focus:ring-2 focus:ring-primary focus:border-primary/50 focus:outline-none transition-all duration-300";

  if (status === "success") {
    return (
      <section id="register" className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Reveal>
            <div className="bg-card border border-primary/30 rounded-2xl p-12 text-center shadow-xl shadow-primary/5">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-20 h-20 text-primary animate-pulse" />
              </div>
              <h2 className="text-3xl font-black mb-4 text-primary">تم إرسال طلبك! 🎉</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                شكرًا <span className="text-foreground font-bold">{formData.name}</span>!<br />
                هنتواصل معاك على{" "}
                <span className="text-primary font-bold">{formData.phone}</span>{" "}
                خلال 24 ساعة.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", phone: "", course: "", level: "", notes: "" });
                }}
                className="text-sm text-muted-foreground underline hover:text-primary transition-colors"
              >
                تسجيل طلب جديد
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-primary font-bold text-sm tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
              بادر بالتسجيل
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">سجّل الآن وابدأ رحلتك</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg leading-relaxed">املا النموذج ده وهنتواصل معاك</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border rounded-xl p-8 md:p-10">

            <div>
              <label className="block text-sm font-bold mb-2">الاسم بالكامل *</label>
              <input
                required
                placeholder="مثال: أحمد محمد"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">الإيميل *</label>
              <input
                required
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">رقم الموبايل *</label>
              <input
                required
                dir="ltr"
                placeholder="01XXXXXXXXX أو +966501234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClass}
              />
              {phoneError && <p className="text-sm text-red-500 mt-2">{phoneError}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">اختار البرنامج *</label>
              <select
                required
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className={inputClass}
              >
                <option value="">اختار برنامج...</option>
                <option value="البرنامج الجماعي">البرنامج الجماعي (Group)</option>
                <option value="VIP Standard">VIP Mentorship — Standard (٦٠ دقيقة)</option>
                <option value="VIP Premium">VIP Mentorship — Premium (٩٠ دقيقة)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">مستوى الإنجليزي الحالي *</label>
              <select
                required
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className={inputClass}
              >
                <option value="">اختار مستواك...</option>
                <option value="مبتدئ (A1-A2)">مبتدئ (A1-A2)</option>
                <option value="متوسط (B1-B2)">متوسط (B1-B2)</option>
                <option value="متقدم (C1-C2)">متقدم (C1-C2)</option>
                <option value="مش متأكد">مش متأكد</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">معلومات إضافية</label>
              <textarea
                placeholder="أي حاجة تانية عايز تعرفنا بيها..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className={`${inputClass} min-h-[100px]`}
              />
            </div>

            {status === "error" && (
              <p className="text-destructive text-sm text-center font-medium">
                ❌ حصل خطأ، جرب تاني أو تواصل معانا على واتساب.
              </p>
            )}

            <Button
              variant="hero"
              size="lg"
              className="w-full text-lg py-7"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2 justify-center">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  جاري الإرسال...
                </span>
              ) : (
                "ابدأ رحلتك الآن ←"
              )}
            </Button>

          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default RegistrationForm;
