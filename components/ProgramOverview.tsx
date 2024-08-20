"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programOverview } from "@/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Title from "./ui/Title";

const ProgramOverview = () => {
  const [tabSelected, setTabSelected] = useState("day1");

  return (
    <section className="mb-32 w-full max-w-[1200px] mx-auto">
      <Title level="h2" label="Contenu de la formation" />
      <Tabs
        defaultValue="day1"
        className="w-full flex gap-4"
        onValueChange={(value) => setTabSelected(value)}
      >
        <TabsList className="w-2/5 h-[600px]">
          {programOverview.map((item) => {
            const isActive = tabSelected === item.value;
            const tabClasses = cn(
              "transition-all duration-300 ease-in-out overflow-hidden",
              isActive ? "border rounded-xl" : "border border-transparent"
            );

            return (
              <TabsTrigger
                key={item.id}
                value={item.value}
                className={tabClasses}
                onClick={() => setTabSelected(item.value)}
              >
                <div className="w-fit">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black-100 text-white text-3xl font-bold">
                    <span>{item.id + 1}</span>
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className={cn(
                      "text-xl font-bold",
                      isActive ? "animate-slide-up" : "animate-slide-down"
                    )}
                  >
                    {item.title}
                  </span>
                  {isActive && (
                    <p
                      className={cn(
                        "text-gray text-sm",
                        isActive ? "animate-slide-up" : "animate-slide-down"
                      )}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {programOverview.map((item) => (
          <TabsContent key={item.id} value={item.value}>
            {tabSelected === item.value && (
              <p className="animate-fade-in">{item.content}</p>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default ProgramOverview;
