import Hero from "./components/Hero";
import SocialBar from "./components/SocialBar";
import BenefitsSection from "./components/BenefitsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WorkflowsSection from "./components/WorkflowsSection";
import AboutFounder from "./components/AboutFounder";
import ContactSection from "./components/ContactSection";
import QuickNav from "./components/QuickNav";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickNav />
      <SocialBar />
      <BenefitsSection />
      <HowItWorksSection />
      <WorkflowsSection />
      <AboutFounder />
      <ContactSection />
    </>
  );
}
