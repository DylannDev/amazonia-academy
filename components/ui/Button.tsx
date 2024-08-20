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
    flex justify-center  items-center gap-2 px-5 py-3 text-sm rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200
    ${size === "large" && "w-full"} 
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
