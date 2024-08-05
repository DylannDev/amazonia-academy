import { RiCheckFill } from "react-icons/ri";
import Card from "./ui/Card";

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
      <div className="bg-blue-600 p-4 w-fit rounded-2xl text-3xl text-white">
        {benefit.icon}
      </div>
      <span className="font-semibold">{benefit.title}</span>
      <ul className="flex flex-col text-sm text-gray font-light gap-3 tracking-tight">
        {benefit.list.map((itemList, index) => (
          <li className="flex items-center gap-1">
            <RiCheckFill className="text-green-500 animate-pulse text-base" />
            <span>{itemList}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BenefitsCard;
