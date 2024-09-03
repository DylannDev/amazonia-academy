import { RiCheckFill } from "react-icons/ri";
import Card from "./ui/Card";
import { PiSealCheckFill } from "react-icons/pi";

type BenefitCardProps = {
  benefit: {
    icon: JSX.Element;
    title: string;
    list: string[];
  };
};

const BenefitsCard = ({ benefit }: BenefitCardProps) => {
  return (
    <Card>
      <div className="bg-gradient-to-b from-green-500 to-[#19904d] p-4 w-fit rounded-2xl text-3xl text-white">
        {benefit.icon}
      </div>
      <span className="font-semibold">{benefit.title}</span>
      <ul className="flex flex-col items-start w-full text-sm font-light gap-3 tracking-tight">
        {benefit.list.map((itemList, index) => (
          <li key={index} className="flex gap-1">
            <PiSealCheckFill className="text-green-500 text-xl" />
            <span>{itemList}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BenefitsCard;
