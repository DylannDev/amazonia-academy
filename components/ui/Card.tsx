type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center rounded-3xl gap-6 px-5 py-10 shadow-2xl shadow-blue-700/10">
      {children}
    </div>
  );
};

export default Card;
