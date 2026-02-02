import {
  Navigation,
  Hero,
  PainPoints,
  AgentTypes,
  HowItWorks,
  ROICalculator,
  ComparisonTable,
  Industries,
  Testimonials,
  Pricing,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <AgentTypes />
        <HowItWorks />
        <ROICalculator />
        <ComparisonTable />
        <Industries />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
