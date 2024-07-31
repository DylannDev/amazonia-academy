import { FaqAccordion } from "@/components/FaqAccordion";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <FaqAccordion />
    </main>
  );
}
