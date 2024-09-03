import Image from "next/image";

type ImageProps = {
  variant?: boolean;
};

const Logo = ({ variant }: ImageProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-10 h-10 relative">
        <Image
          src={
            variant ? "amazonia-logo-white.svg" : "/amazonia-illustration.svg"
          }
          alt="amazonia academy logo"
          sizes="100%"
          fill
          className="object-center"
        />
      </div>
      <h1 className="uppercase text-lg font-semibold">amazonia academy</h1>
    </div>
  );
};

export default Logo;
