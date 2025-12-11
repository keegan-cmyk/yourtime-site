import Hero from "./components/Hero";
import DemoSection from "./components/DemoSection";
import BenefitsSection from "./components/BenefitsSection";
import DifferentiatorSection from "./components/DifferentiatorSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ComicSection from "./components/ComicSection";
import WorkflowsSection from "./components/WorkflowsSection";
import AboutFounder from "./components/AboutFounder";
import MissionSection from "./components/MissionSection";
import ContactSection from "./components/ContactSection";
import SocialBar from "./components/SocialBar";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialBar />
      <DemoSection />
      <BenefitsSection />
      <DifferentiatorSection />
      <HowItWorksSection />
      <ComicSection />
      <WorkflowsSection />
      <AboutFounder />
      <MissionSection />
      <ContactSection />
    </>
  );
}
