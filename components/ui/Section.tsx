import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  maxWidthLarge?: boolean;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  maxWidthLarge,
  bgColor,
}) => {
  return (
    <section
      className={cn(
        "mb-32 flex flex-col items-center mx-auto w-full",
        maxWidthLarge ? "max-w-[110rem]" : "max-w-[1200px]",
        bgColor ? `${bgColor} rounded-3xl` : ""
      )}
    >
      <div className="max-w-[1200px] w-full">{children}</div>
    </section>
  );
};

export default Section;
