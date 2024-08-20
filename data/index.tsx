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
      "Sessions de coaching privées",
      "Partage de stratégies",
    ],
  },
];

export const pricing = [
  {
    title: "Amazonia Basics",
    content: "Formation e-learning",
    price: 799,
    featuresList: [
      "Cours vidéos sur les bases du trading",
      "Accès illimité aux vidéos",
      "Accès au groupe privé de traders",
      "Support et Assistance par email",
      "5 jours de formation intensive",
      "Présentiel ou distanciel",
      "Plan de trading personnalisé",
      "Compte prop firm 5000$ financé",
      "Coaching jusqu’à 1000€ de bénéfices",
      "Sessions de coaching individuel",
      "Suivi régulier des résultats",
    ],
    maxCheckboxIndex: 3,
  },
  {
    title: "Amazonia Pro",
    content: "Formation privée sur 5 jours",
    price: 1199,
    featuresList: [
      "Cours vidéos sur les bases du trading",
      "Accès illimité aux vidéos",
      "Accès au groupe privé de traders",
      "Support et Assistance par email",
      "5 jours de formation intensive",
      "Présentiel ou distanciel",
      "Plan de trading personnalisé",
      "Compte prop firm 5000$ financé",
      "Coaching jusqu’à 1000€ de bénéfices",
      "Sessions de coaching individuel",
      "Suivi régulier des résultats",
    ],
    maxCheckboxIndex: 7,
  },
  {
    title: "Amazonia Premium",
    content: "Coaching jusqu’à 1000€ générés",
    price: 2499,
    featuresList: [
      "Cours vidéos sur les bases du trading",
      "Accès illimité aux vidéos",
      "Accès au groupe privé de traders",
      "Support et Assistance par email",
      "5 jours de formation intensive",
      "Présentiel ou distanciel",
      "Plan de trading personnalisé",
      "Compte prop firm 5000$ financé",
      "Coaching jusqu’à 1000€ de bénéfices",
      "Sessions de coaching individuel",
      "Suivi régulier des résultats",
    ],
  },
];

export const masterPlan = [
  {
    title: "Amazonia Investing",
    content: "Coaching jusqu’à 1000€ générés",
    price: 1000,
    featuresList: [
      "Cours vidéos sur les bases du trading",
      "Accès illimité aux vidéos",
      "Accès au groupe privé de traders",
      "Support et Assistance par email",
      "5 jours de formation intensive",
    ],
  },
];

export const programOverview = [
  {
    id: 0,
    value: "day1",
    title: "Jour 01",
    subtitle: "Description du jour 01",
    content: "Contenu du jour 01",
  },
  {
    id: 1,
    value: "day2",
    title: "Jour 02",
    subtitle: "Description du jour 02",
    content: "Contenu du jour 02",
  },
  {
    id: 2,
    value: "day3",
    title: "Jour 03",
    subtitle: "Description du jour 03",
    content: "Contenu du jour 03",
  },
  {
    id: 3,
    value: "day4",
    title: "Jour 04",
    subtitle: "Description du jour 04",
    content: "Contenu du jour 04",
  },
  {
    id: 4,
    value: "day5",
    title: "Jour 05",
    subtitle: "Description du jour 05",
    content: "Contenu du jour 05",
  },
];
