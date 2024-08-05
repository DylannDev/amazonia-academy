import Button from "./ui/Button";
import Title from "./ui/Title";

const Hero = () => {
  return (
    <section className="mb-32">
      <div className="pt-40 flex flex-col justify-center items-center">
        <Title
          level="h1"
          label="Maîtrisez l'art du Trading et transformez <br /> votre vie financière"
        />
        <Title
          level="h4"
          label="Amazonia Academy vous donne accès à des stratégies éprouvées et des
          conseils d'experts pour réussir dans le trading, <br />
          quel que soit votre niveau d'expérience."
        />
        <Button label="Prendre un rendez-vous" />
      </div>
    </section>
  );
};

export default Hero;
