import { PiSealCheckFill } from "react-icons/pi";
import { IoCloseCircle } from "react-icons/io5";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

type PricingCardProps = {
  plan: {
    title: string;
    content: string;
    price: number;
    featuresList: string[];
    maxCheckboxIndex?: number;
  };
};

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <Card>
      <div className="w-full border-b border-[#334157] pb-6">
        <div className="flex justify-between items-center font-semibold pb-6">
          <h2 className="text-xl">{plan.title}</h2>
          <h2 className="text-2xl">€{plan.price}</h2>
        </div>
        <div className="w-full text-center rounded-xl bg-green-200 p-3">
          <span className="text-sm text-green-600 font-bold uppercase">
            {plan.content}
          </span>
        </div>
      </div>
      <ul className="flex flex-col text-base font-light gap-4 tracking-tight w-full">
        {plan.featuresList.map((feature, index) => {
          const showCheckbox =
            plan.maxCheckboxIndex === undefined ||
            index <= plan.maxCheckboxIndex;

          return (
            <li
              key={`${plan.title}-${index}`}
              className="flex items-center gap-2"
            >
              {showCheckbox ? (
                <PiSealCheckFill className="text-green-500 text-xl" />
              ) : (
                <IoCloseCircle className="text-[#737a7c] text-xl" />
              )}
              <span className={`${!showCheckbox && "text-[#737a7c]"}`}>
                {feature}
              </span>
            </li>
          );
        })}
      </ul>
      <Button
        label="Rejoindre le Programme"
        otherClasses="w-full"
        size="large"
        icon={<HiOutlineRocketLaunch className="text-lg" />}
        position="left"
      />
    </Card>
  );
};

export default PricingCard;
