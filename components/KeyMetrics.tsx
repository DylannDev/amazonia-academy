import { keyMetrics } from "@/data";
import Section from "./ui/Section";

const KeyMetrics = () => {
  return (
    <Section>
      <div className="container mx-auto flex gap-4 py-8 bg-gray-100 rounded-3xl divide-x-2 divide-gray-300">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="flex justify-center gap-4 w-full p-2">
            <div className="rounded-2xl bg-green-300 text-3xl grid place-content-center p-4 h-fit">
              {metric.icon}
            </div>
            <div>
              <h3 className="text-3xl font-bold">{metric.stat}</h3>
              <p className="font-light">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default KeyMetrics;
