import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import clsx from "clsx";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazonia Academy",
  description:
    "Maîtrisez les marchés financiers en vous formant avec Amazonia Academy. Rejoignez-nous pour accéder à des cours complets et des résultats prouvés. Inscrivez-vous dès maintenant pour transformer vos compétences en trading !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[110rem] mx-auto px-5">
          <Navbar />
          {children}
        </div>
        <Footer/>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
