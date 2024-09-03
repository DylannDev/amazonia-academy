"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ImageModal from "../ImageModal";
import { PiSealCheckFill } from "react-icons/pi";
import Button from "./Button";

type Tab = {
  title: string;
  value: string;
  text: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-8 justify-center w-1/2">
        <div
          className={cn("flex justify-center gap-2 w-full", containerClassName)}
        >
          {propTabs.map((tab, idx) => {
            const isActive = active.value === tab.value;

            return (
              <button
                key={tab.title}
                onClick={() => {
                  moveSelectedTabToTop(idx);
                }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={cn(
                  "relative px-4 py-1 rounded-full h-fit flex items-center gap-1",
                  tabClassName
                )}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {isActive ? (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className={cn(
                      "absolute inset-0 border border-transparent bg-[#3ea0dc]/20 rounded-full",
                      activeTabClassName
                    )}
                  />
                ) : (
                  <div className="absolute inset-0 border rounded-full" />
                )}
                <PiSealCheckFill className="text-[#3ea0dc] text-xl relative" />
                <span
                  className={cn(
                    "relative block text-lg dark:text-white text-black-100"
                  )}
                >
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-[#3ea0dc]/20 rounded-3xl p-12 w-full min-h-[370px] flex flex-col gap-4 justify-center"
          >
            <p className="font-bold text-3xl text-center">
              Yves a généré +2000€ 🚀
            </p>
            <p className="text-black-100 text-lg">"{active.text}"</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center">
          <Button label="Rejoindre le programme" />
        </div>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("", contentClassName)}
      />
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-1/2 relative h-full">
        {tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -50 : 0,
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
            }}
            className={cn("w-full h-full absolute top-0 left-0", className)}
            onClick={() => handleImageClick(tab.content)}
          >
            <div className="w-full h-full relative rounded-2xl cursor-pointer">
              <Image
                src={tab.content}
                alt="dummy image"
                width="1000"
                height="1000"
                className="object-cover absolute rounded-3xl"
              />
            </div>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={selectedImage}
        />
      )}
    </>
  );
};
