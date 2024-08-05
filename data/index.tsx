import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { PiListStar } from "react-icons/pi";
import { BsCoin } from "react-icons/bs";
import { FaMedal } from "react-icons/fa6";
import { IoSpeedometer } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";

export const navItems = [
  { name: "Programme", link: "#program", icon: <HiOutlineRocketLaunch /> },
  { name: "Avis", link: "#testimonials", icon: <PiListStar /> },
  { name: "Tarifs", link: "#tarifs", icon: <BsCoin /> },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Gylliane",
    username: "@gylliane",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Gaetan",
    username: "@gaetan",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Dylann",
    username: "@dylann",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

export const benefits = [
  {
    icon: <IoStatsChartSharp />,
    title: "Stratégies de Trading",
    list: [
      "Techniques de trading éprouvées",
      "Adaptabilité des stratégies",
      "Création de stratégies personnalisées",
    ],
  },
  {
    icon: <FaMedal />,
    title: "Formation de Qualité",
    list: [
      "Formateurs expérimentés",
      "Cours en distanciel et présentiel",
      "Suivi personnalisé",
    ],
  },
  {
    icon: <IoSpeedometer />,
    title: "Support et Mentorat Continu",
    list: [
      "Accès à un groupe privé",
      "Sessions de coaching personnalisées",
      "Partage de stratégies",
    ],
  },
];
