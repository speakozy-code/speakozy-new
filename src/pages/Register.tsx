import { Navbar } from "@/components/HeroSection";
import OfferBar from "@/components/OfferBar";
import RegistrationForm from "@/components/RegistrationForm";

const Register = () => (
  <div className="min-h-screen">
    <OfferBar />
    <Navbar />
    <div className="pt-4 md:pt-8">
      <RegistrationForm />
    </div>
  </div>
);

export default Register;
