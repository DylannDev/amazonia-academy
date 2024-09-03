import { teacherIntro } from "@/data";
import Section from "./ui/Section";
import Title from "./ui/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "./ui/Button";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Image from "next/image";

const TeacherIntroduction = () => {
  return (
    <Section>
      <Title
        level="h1"
        label="Découvrez votre guide dans le monde du Forex"
        className="mb-16 text-center"
      />

      <div className="flex gap-10 mb-20">
        <div className="w-1/2 h-full relative rounded-3xl">
          <Image
            src="/lory-carre.jpg"
            alt="formateur amazonia academy lory othily"
            width={1500}
            height={1500}
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <Title
            level="h2"
            label="Un parcours inspirant"
            className="text-left"
          />

          <p className="text-lg">
            Bonjour à tous, je suis Lory Othily, un guyanais de 36 ans avec plus
            de 7 ans d'expérience sur le marché du Forex. Mon aventure a
            commencé sous la tutelle de Quillan Black, un expert renommé, au
            sein de la prestigieuse Wall Street Academy. Rapidement, j'ai adopté
            et maîtrisé les stratégies de trading enseignées, ce qui m'a permis
            d'obtenir des résultats cohérents dès le début de mon parcours.
          </p>

          <Accordion type="single" collapsible>
            {teacherIntro.map((desc, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-black-100">{desc.icon}</div>
                    {desc.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm">
                  {desc.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="bg-black-100 text-white rounded-3xl p-16 flex flex-col justify-center items-center text-center gap-8">
        <Title
          level="h3"
          label="Prêt à transformer vos finances ?"
          className="text-center text-white"
        />
        <p>
          Rejoignez-nous chez Amazonia Academy et ensemble, nous transformerons
          votre potentiel en réussite sur le marché du Forex. <br /> C'est le
          moment de franchir le pas vers un avenir financier sécurisé et
          prospère.
        </p>

        <Button
          label="Investir sur moi-même"
          icon={<HiOutlineRocketLaunch className="text-lg" />}
          position="left"
        />
      </div>
    </Section>
  );
};

export default TeacherIntroduction;
