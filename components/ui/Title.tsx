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
        return `text-5xl font-bold ${
          className ? className : "text-black-100 mb-8 text-center"
        } `;
      case "h2":
        return `text-4xl font-bold ${
          className ? className : "text-black-100 mb-8 text-center"
        } `;
      case "h3":
        return `text-2xl font-bold ${
          className ? className : "text-black-100 mb-8 text-center"
        } `;
      case "h4":
        return `text-lg ${
          className ? className : "text-black-100 mb-6 text-center"
        } `;
      case "h5":
        return `text-base font-normal ${
          className ? className : "text-slate-500 mb-4 text-center"
        } `;
      case "h6":
        return `text-sm font-light ${
          className ? className : "text-slate-500 mb-4 text-center"
        } `;
      default:
        return `text-4xl font-bold ${
          className ? className : "text-black-100 mb-16 text-center"
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
