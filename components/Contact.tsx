import { TbTargetArrow } from "react-icons/tb";
import Button from "./ui/Button";
import Section from "./ui/Section";
import Title from "./ui/Title";
import Image from "next/image";

const Contact = () => {
  return (
    <Section>
      <div className="relative overflow-hidden bg-gradient-to-b from-black-100 to-[#090f1f] text-white flex flex-col gap-6 items-center text-center w-full rounded-3xl p-20">
        <p className="uppercase text-sm font-semibold flex items-center gap-1">
          <TbTargetArrow className="text-2xl" />
          <span>Discutons de vos objectifs.</span>
        </p>
        <Title
          level="h1"
          label="Prenez le contrôle de votre avenir financier!"
          className="mb-2 text-white"
        />

        <p className="text-lg">
          Contactez-nous pour une consultation gratuite et découvrez <br />
          comment Amazonia Academy peut transformer vos ambitions en succès.
        </p>
        <Button label="Réserver un Appel" />
      </div>
    </Section>
  );
};

export default Contact;
