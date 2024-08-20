import { masterPlan, pricing } from "@/data";
import Title from "./ui/Title";
import PricingCard from "./PricingCard";
import { PiSealCheckFill } from "react-icons/pi";

const Pricing = () => {
  return (
    <section className="mb-32 flex flex-col items-center">
      <div className="mb-10">
        <Title label="Pricing" level="h2"></Title>
        <Title
          label="Amazonia Trading est la meilleure solution pour atteindre vos objectifs financiers et devenir un trader accompli. </br> Voici ce que vous allez gagner en vous inscrivant dès aujourd'hui :"
          level="h4"
        ></Title>
      </div>
      <div className="w-full grid lg:grid-cols-3 gap-4 my-5 mb-24 max-w-[1200px]">
        {pricing.map((plan) => (
          <PricingCard key={plan.title} plan={plan} />
        ))}
      </div>
      <div className="bg-black-100 w-full rounded-3xl p-20">
        {masterPlan.map((plan) => (
          <div className="max-w-[1200px] mx-auto flex items-center gap-10 text-white">
            <div className="w-1/2 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-semibold">{plan.title}</h2>
                <p className="text-lg">
                  Tailored for established businesses and individuals in need of
                  expert financial advice and ongoing support.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="">
                  <h3 className="text-xl font-semibold uppercase">
                    Highlights
                  </h3>
                  <p className="text-lg">
                    Every thing you'll get from this package
                  </p>
                </div>
                <ul className="flex flex-col gap-2">
                  {plan.featuresList.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <PiSealCheckFill className="text-green-500 text-xl" />
                      <p>{feature} </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-1/2">
              <PricingCard key={plan.title} plan={plan} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
