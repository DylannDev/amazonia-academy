import { navItems } from "@/data";
import { FloatingNav } from "./FloatingNav";
import Button from "./ui/Button";
import { FaRegPaperPlane } from "react-icons/fa";
import Image from "next/image";
import Logo from "./ui/Logo";

const Navbar = () => {
  return (
    <header className="flex justify-between py-8 max-w-[1200px] mx-auto">
      <Logo />
      <FloatingNav navItems={navItems} />
      <Button
        label="Contactez-nous"
        icon={<FaRegPaperPlane />}
        position="left"
      />
    </header>
  );
};

export default Navbar;
