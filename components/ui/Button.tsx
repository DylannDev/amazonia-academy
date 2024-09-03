type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  size?: "large";
};

const Button = ({
  label,
  icon,
  position,
  handleClick,
  size,
  otherClasses,
}: ButtonProps) => {
  const buttonClasses = `
    flex justify-center  items-center gap-2 px-6 py-4 rounded-full bg-[#3ea0dc] text-white focus:ring-2 focus:ring-blue-400 transition duration-200
    ${size === "large" ? "w-full" : "w-fit"} 
    ${otherClasses || ""}
  `;

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {position === "left" && icon}
      {label}
      {position === "right" && icon}
    </button>
  );
};

export default Button;
