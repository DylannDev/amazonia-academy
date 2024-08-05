import { benefits } from "@/data";
import BenefitsCard from "./BenefitsCard";
import Title from "./ui/Title";
import { BiSolidCheckCircle } from "react-icons/bi";

const Benefits = () => {
  return (
    <section className="mb-32 flex flex-col items-center">
      <div className="uppercase font-semibold text-green-500 flex items-center gap-1 text-sm mb-5">
        <BiSolidCheckCircle className="text-xl" />{" "}
        <span>Votre succès est notre mission</span>
      </div>
      <div className="mb-10">
        <Title
          label="Une formation adaptée à votre réussite"
          level="h2"
        ></Title>
        <Title
          label="Amazonia Trading est la meilleure solution pour atteindre vos objectifs financiers et devenir un trader accompli. </br> Voici ce que vous allez gagner en vous inscrivant dès aujourd'hui :"
          level="h4"
        ></Title>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 sm:gap-8 py-5 sm:px-28 lg:p-5 mb-10">
        {benefits.map((benefit) => (
          <BenefitsCard key={benefit.title} benefit={benefit} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
