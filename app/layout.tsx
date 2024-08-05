import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import clsx from "clsx";

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
      <body className={(inter.className, clsx("bg-[#f5f5f5] "))}>
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
