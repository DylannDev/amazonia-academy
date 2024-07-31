type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
};

const Button = ({ label, icon, position, handleClick }: ButtonProps) => {
  return (
    <button
      className="flex items-center gap-2 px-5 py-3 text-sm rounded-full w-fit bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
      onClick={handleClick}
    >
      {position === "left" && icon}
      {label}
      {position === "right" && icon}
    </button>
  );
};

export default Button;
