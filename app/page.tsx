import Hero from "./components/Hero";
import DemoSection from "./components/DemoSection";
import BenefitsSection from "./components/BenefitsSection";
import WorkflowsSection from "./components/WorkflowsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <DemoSection />
      <BenefitsSection />
      <WorkflowsSection />
      <ContactSection />
    </main>
  );
}
