import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
};

const Card = ({ children, className, noBorder = false }: CardProps) => {
  return (
    <div
      className={cn(
        "w-full bg-transparent flex flex-col justify-center items-center rounded-3xl",
        className ? className : "gap-6 p-8",
        noBorder ? "" : "border border-[#334157]"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
