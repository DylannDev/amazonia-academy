import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Title from "./ui/Title";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Image from "next/image";
import { faq } from "@/data";

export function FaqAccordion() {
  return (
    <Section>
      <div className="flex gap-16 w-full">
        <div className="flex flex-col gap-4 w-3/5">
          <Title
            level="h1"
            label="Vos questions les plus fréquentes"
            className="text-left mb-4"
          />
          <p className="text-lg">
            Découvrez des réponses rapides aux questions courantes dans notre
            section complète de Foire aux Questions.
          </p>
          <Accordion type="single" collapsible>
            {faq.map((faqItem, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faqItem.question}</AccordionTrigger>
                <AccordionContent>{faqItem.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Card
          className="bg-[#fffade] w-2/5 mt-32 max-h-fit p-20 gap-12"
          noBorder
        >
          <Image src="/chat.svg" alt="chat icon" width={100} height={100} />
          <p className="text-3xl font-semibold text-center">
            Vous avez d'autres questions ?
          </p>
          <p className="text-center ">
            Si vous ne trouvez pas les réponses à vos questions, contactez-nous
            en cliquant sur le bouton ci-dessous.
          </p>
          <Button label="Contactez-nous" />
        </Card>
      </div>
    </Section>
  );
}
