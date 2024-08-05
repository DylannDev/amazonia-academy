import Benefits from "@/components/Benefits";
import { FaqAccordion } from "@/components/FaqAccordion";
import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Benefits />
      <Testimonials />
      <FaqAccordion />
    </main>
  );
}
