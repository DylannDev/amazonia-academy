"use client";

import { useState } from "react";
import Section from "./ui/Section";
import Title from "./ui/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programOverview } from "@/data";
import { cn } from "@/lib/utils";
import { ResultsTabs } from "./ResultsTabs";

const Results = () => {
  return (
    <Section>
      <Title level="h2" label="Des résultats concrets !" />
      <Title
        level="h4"
        label="Des parcours inspirants qui démontrent qu'avec les bonnes stratégies, il est possible de réussir dans le monde du trading."
      />
      <ResultsTabs />
    </Section>
  );
};

export default Results;
