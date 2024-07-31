import { navItems } from "@/data";
import { FloatingNav } from "./FloatingNav";
import Button from "./ui/Button";
import { FaRegPaperPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex justify-between py-8">
      <div className="font-bold text-xl">Amazonia Academy</div>
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
