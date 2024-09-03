import Link from "next/link";
import Section from "./ui/Section";
import { navItems, socialLinks } from "@/data";
import { cn } from "@/lib/utils";
import Logo from "./ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#090f1f] p-20">
      <div className="max-w-[1200px] mx-auto text-white">
        <div className="flex justify-between w-full">
          {/* Première div tout à gauche */}
          <div className="flex flex-col w-1/3 gap-6">
            <Logo variant />
            <p className="">
              Maximisez vos gains en Trading grâce à un accompagnement sur
              mesure avec Amazonia Academy.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((media, index) => (
                <Link key={index} href={media.link} className="text-2xl">
                  {media.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Deuxième div tout à droite */}
          <div className="flex justify-between w-1/2 gap-20">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Navigation</h3>
              {navItems.map((navItem, index) => (
                <Link
                  key={`link=${index}`}
                  href={navItem.link}
                  className={cn("text-sm font-light")}
                >
                  <span className="!cursor-pointer">{navItem.name}</span>
                </Link>
              ))}
              <Link href="/" className="text-sm font-light">
                Réserver un appel
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Mentions Légales</h3>
              <Link href="/" className="text-sm font-light">
                Conditions Générales de Vente
              </Link>
              <Link href="/" className="text-sm font-light">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
