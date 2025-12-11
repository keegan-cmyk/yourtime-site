import Hero from "./components/Hero";
import SocialBar from "./components/SocialBar";
import DemoSection from "./components/DemoSection";
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

      <DemoSection />
      <BenefitsSection />
      <HowItWorksSection />
      <WorkflowsSection />
      <AboutFounder />
      <ContactSection />
    </>
  );
}
