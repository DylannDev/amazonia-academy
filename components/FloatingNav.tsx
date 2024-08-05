"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true); // Initially visible

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100 || currentScrollY < lastScrollY) {
        // Show when near the top or scrolling up
        setVisible(true);
      } else {
        // Hide when scrolling down
        setVisible(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <nav>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={cn(
              "bg-blue-600 rounded-2xl border backdrop-blur-xl flex max-w-fit fixed top-6 inset-x-0 mx-auto z-[5000] p-1 items-center justify-center",
              className
            )}
          >
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative items-center flex gap-1 text-white py-3 px-6 hover:bg-white/10 rounded-xl"
                )}
              >
                <span className="block text-xl">{navItem.icon}</span>
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
