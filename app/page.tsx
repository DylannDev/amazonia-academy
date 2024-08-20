import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import { FaqAccordion } from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import Pricing from "@/components/Pricing";
import ProgramOverview from "@/components/ProgramOverview";
import Results from "@/components/Results";
import TeacherIntroduction from "@/components/TeacherIntroduction";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Benefits />
      <TeacherIntroduction />
      <ProgramOverview />
      <Results />
      <Testimonials />
      <Pricing />
      <FaqAccordion />
      <LatestArticles />
      <Contact />
      <Footer />
    </main>
  );
}
