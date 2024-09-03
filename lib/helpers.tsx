import { ReactNode } from "react";
import { PiSealCheckFill } from "react-icons/pi";

export const createListWithIcons = (items: string[]): ReactNode => {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-1">
          <PiSealCheckFill className="text-green-500 text-lg" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
