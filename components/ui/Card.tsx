type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="w-full bg-transparent flex flex-col justify-center items-center rounded-3xl gap-6 p-8 border">
      {children}
    </div>
  );
};

export default Card;
