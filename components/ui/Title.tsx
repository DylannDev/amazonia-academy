import clsx from "clsx";
import DOMPurify from "isomorphic-dompurify";
import React from "react";

interface TitleProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  label: string;
  className?: string;
}

const Title = ({ level, label, className }: TitleProps) => {
  const HeadingTag = level as keyof JSX.IntrinsicElements;

  const getClassName = (level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
    switch (level) {
      case "h1":
        return `text-5xl font-bold text-black-100 text-center ${
          className ? className : "mb-8"
        } `;
      case "h2":
        return `text-4xl font-bold text-black-100 text-center ${
          className ? className : "mb-8"
        } `;
      case "h3":
        return `text-2xl font-bold text-black-100 text-center ${
          className ? className : "mb-8"
        } `;
      case "h4":
        return `text-lg font-medium text-slate-500 text-center ${
          className ? className : "mb-6"
        } `;
      case "h5":
        return `text-base font-normal text-slate-500 text-center ${
          className ? className : "mb-4"
        } `;
      case "h6":
        return `text-sm font-light text-slate-500 text-center ${
          className ? className : "mb-4"
        } `;
      default:
        return `text-4xl font-bold text-black-100 text-center ${
          className ? className : "mb-16"
        } `;
    }
  };

  // Utilisation de DOMPurify pour assainir le contenu HTML
  const clean = DOMPurify.sanitize(label);

  return (
    <HeadingTag
      className={clsx(getClassName(level), clsx(className))}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default Title;
