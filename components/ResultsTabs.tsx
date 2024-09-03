"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs-aceternity";
import { results } from "@/data";

export function ResultsTabs() {
  return (
    <div className="h-[20rem] md:h-[32rem] [perspective:1000px] relative flex max-w-[1200px] mx-auto w-full my-20">
      <Tabs tabs={results} />
    </div>
  );
}
