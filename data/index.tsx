import { HiOutlineRocketLaunch } from "react-icons/hi2";
import {
  PiChartLineUpDuotone,
  PiListStar,
  PiRocketLaunchDuotone,
  PiStudentDuotone,
  PiUserBold,
} from "react-icons/pi";
import { BsCoin } from "react-icons/bs";
import {
  FaArrowTrendUp,
  FaFacebook,
  FaInstagram,
  FaMedal,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoSpeedometer } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { createListWithIcons } from "@/lib/helpers";
import { BiLike } from "react-icons/bi";

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

export const results = [
  {
    title: "Yves",
    value: "result1",
    text: "En commençant sans aucune expérience, Yves a rapidement maîtrisé les bases du trading grâce à notre formation. En seulement 6 mois, il a transformé un capital modeste en un portefeuille solide avec un rendement mensuel de 15 %.",
    content: "/yves.jpg",
  },
  {
    title: "Medhy",
    value: "result2",
    text: "Luc, un cadre supérieur cherchant à diversifier ses revenus, a suivi notre programme pour préparer une retraite anticipée. En un an, il a généré des revenus supplémentaires suffisants pour envisager de quitter le monde du travail plus tôt que prévu. Grâce à l'utilisation des techniques de trading avancées apprises lors de la formation, Luc a atteint ses objectifs financiers plus tôt que prévu.",
    content: "/medhy.png",
  },
  {
    title: "Elsa",
    value: "result3",
    text: "Marie avait une passion pour les marchés financiers, mais manquait de structure dans son approche. Après avoir suivi notre formation, elle a mis en place une stratégie disciplinée qui lui a permis de multiplier son capital par cinq en trois mois. Cette capture d'écran montre comment elle a su tirer parti des outils d'analyse technique pour optimiser ses investissements.",
    content: "/elsa.jpg",
  },
];

export const blogArticles = [
  {
    id: 1,
    title: "Trader avec Amazonia Academy",
    subtitle:
      "Découvrez comment maîtriser les bases du trading avec Amazonia Academy et transformer vos ambitions financières en succès concrets.",
    content: "Contenu de l'article",
    date: "2022-01-01",
    author: "Lory Othily",
    categories: ["Catégorie 1", "Catégorie 2", "Catégorie 3"],
    image: "/trading-1.jpg",
    readTime: 5,
  },
  {
    id: 2,
    title:
      "Le Bitcoin : Un Actif Numérique Révolutionnaire ou une Bulle Spéculative ?",
    subtitle:
      "Découvrez comment le Bitcoin s'est imposé comme un instrument incontournable dans le monde du trading, tout en explorant les risques et opportunités qu'il offre aux investisseurs.",
    content: "Contenu de l'article",
    date: "2022-01-01",
    author: "Lory Othily",
    categories: ["Catégorie 1", "Catégorie 2", "Catégorie 3"],
    image: "/trading-2.jpg",
    readTime: 5,
  },
  {
    id: 3,
    title: "Investir avec le programme Amazonia Trading",
    subtitle:
      "Découvrez comment investir avec Amazonia Trading et faire fructifier votre investissement.",
    content: "Contenu de l'article",
    date: "2022-01-01",
    author: "Lory Othily",
    categories: ["Catégorie 1", "Catégorie 2", "Catégorie 3"],
    image: "/trading-3.jpg",
    readTime: 5,
  },
];

export const faq = [
  {
    question: "Qu’est-ce que le trading ?",
    answer:
      "Le trading consiste à acheter et vendre des actifs financiers, tels que des actions, des devises ou des matières premières, directement depuis chez soi ou son bureau. Cette activité permet de générer des profits en capitalisant sur les fluctuations des marchés. Grâce à la formation proposée par Amazonia Academy, vous serez en mesure de maîtriser les techniques du trading pour atteindre vos objectifs financiers et potentiellement vivre de vos investissements.",
  },
  {
    question: "Qui est Amazonia Academy ?",
    answer:
      "Amazonia Academy est une marque déposée reconnue par l'Institut National de la Propriété Intellectuelle (INPI). Elle est gérée par Amazonia Capital Sasu, une société spécialisée dans la formation et le conseil en trading. Nous nous engageons à fournir des programmes de formation de haute qualité, conçus pour aider nos clients à atteindre leurs objectifs financiers et à exceller dans le monde du trading.",
  },
  {
    question: "Que se passe-t-il après mon inscription à une formation ?",
    answer:
      "En choisissant de suivre une formation chez Amazonia Academy, vous vivrez une expérience immersive et enrichissante de 5 à 7 jours. Durant cette période, vous apprendrez les fondamentaux et les techniques avancées du trading. Notre objectif est de vous fournir les compétences nécessaires pour devenir un trader rentable et cohérent, capable de naviguer avec succès sur les marchés financiers.",
  },
  {
    question: "Comment se déroule une formation chez Amazonia Academy ?",
    answer:
      "Avant le début de votre formation, vous recevrez un ensemble de ressources préparatoires, comprenant un livret de formation (par exemple, sur les concepts de base comme les supports) ainsi que des vidéos à visionner et à étudier. Dès le premier jour de formation, un quiz vous sera proposé pour évaluer votre compréhension des fondamentaux du trading et des marchés. Ensuite, nous avançons progressivement vers des aspects plus pratiques, tels que l'utilisation des logiciels, leur installation, et la mise en application des connaissances acquises. Nos formations sont conçues pour être stimulantes, motivantes et riches en contenu. Nous mettons tout en œuvre pour vous préparer au mieux à réussir sur les marchés financiers.",
  },
  {
    question: "Combien de temps dure votre formation ?",
    answer:
      "La durée de nos formations varie en fonction du format choisi. En présentiel, les sessions durent en moyenne de 4 à 8 heures par jour, offrant une immersion complète. En ligne, les formations sont plus flexibles, avec des sessions de 2 à 3 heures par jour. Nous proposons différents types de formations pour répondre à vos besoins : coaching personnalisé, formation sur place, et modules en e-learning. Chaque option est conçue pour vous offrir un apprentissage efficace et adapté à votre rythme.",
  },
  {
    question:
      "Je n’ai aucune connaissance en trading, vais-je réussir à comprendre ?",
    answer:
      "Absolument ! Nos formations sont conçues pour s'adapter à tous les niveaux, y compris les débutants. Nous simplifions les concepts complexes pour les rendre accessibles à tous. Cependant, un engagement personnel est essentiel pour réussir. Il est important d'être motivé(e) dès le départ, d'avoir l'envie d'apprendre, et de vouloir réussir dans le trading. Avec une approche sérieuse et un investissement en temps, vous pourrez acquérir les compétences nécessaires pour devenir autonome et indépendant(e) dans ce domaine.",
  },
  {
    question:
      "Y a-t-il des sessions de formation prévues aux Antilles ou en Guyane ?",
    answer:
      "Oui, des sessions de formation peuvent être organisées aux Antilles et en Guyane, à partir de 10 à 20 participants. Si vous êtes intéressé, n'hésitez pas à nous contacter pour plus de détails et pour réserver votre place.",
  },
  {
    question: "Envoyez-vous des signaux de trading ?",
    answer:
      "Chez Amazonia Academy, nous n'envoyons pas de signaux de trading. Notre objectif est de vous former pour que vous puissiez prendre des décisions éclairées par vous-même. Nous vous enseignons les compétences nécessaires pour analyser les marchés et agir au bon moment, en toute autonomie. Nos formations sont conçues pour faire de vous un trader indépendant, capable de réussir sur les marchés financiers sans dépendre de signaux externes.",
  },
  {
    question: "Comment joindre Amazonia Academy ?",
    answer:
      "Vous pouvez nous contacter facilement par email à l'adresse suivante : contact@amazoniaacademy.fr ou par WhatsApp au 06 94 25 21 85. Nous sommes disponibles pour répondre à toutes vos questions et vous accompagner dans votre parcours de formation. N'hésitez pas à nous joindre, nous sommes là pour vous aider !",
  },
];

export const teacherIntro = [
  {
    icon: <PiStudentDuotone />,
    title: "Création d’Amazonia Academy : Une Initiative Pionnière",
    description: (
      <p>
        Fort de cette réussite, j'ai décidé de fonder Amazonia Academy, une
        initiative qui ambitionne d'être la formation de trading francophone par
        excellence. Mon objectif est de rendre les techniques de trading
        avancées accessibles à tous, en utilisant les méthodes éprouvées de la
        Wall Street Academy.
      </p>
    ),
  },
  {
    icon: <PiChartLineUpDuotone />,
    title: "Compétences et Méthodologie",
    description: createListWithIcons([
      "Maîtrise des stratégies de trading du Forex",
      "Méthodes éprouvées utilisées par les meilleurs traders",
      "Approche pédagogique pour transformer votre potentiel en succès",
    ]),
  },
  {
    icon: <PiRocketLaunchDuotone />,
    title: "Un engagement pour votre réussite",
    description: (
      <p>
        Chez Amazonia Academy, nous nous engageons à vous accompagner dans
        chaque étape de votre apprentissage. Nous créerons ensemble une
        stratégie de trading qui non seulement reflète vos objectifs financiers,
        mais qui est également adaptée à votre profil. Mon approche est basée
        sur la discipline, la persévérance et l'application rigoureuse des
        méthodes qui ont fait leurs preuves chez les plus grands traders.
      </p>
    ),
  },
];

export const socialLinks = [
  { icon: <FaFacebook />, link: "/" },
  { icon: <FaInstagram />, link: "/" },
  { icon: <FaWhatsapp />, link: "/" },
];

export const keyMetrics = [
  {
    icon: <PiUserBold />,
    stat: "200+",
    description: "Membres accompagnés",
  },
  { icon: <FaArrowTrendUp />, stat: "8+", description: "Années d'expérience" },
  { icon: <BiLike />, stat: "99%", description: "Satisfaction client" },
];
