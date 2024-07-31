import Button from "./ui/Button";

const Hero = () => {
  return (
    <section>
      <div className="pt-40 flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl font-bold text-black-100 text-center">
          Maîtrisez l'art du Trading et transformez <br /> votre vie financière
        </h1>
        <p className="text-lg text-grey text-center font-medium">
          Amazonia Academy vous donne accès à des stratégies éprouvées et des
          conseils d'experts pour réussir dans le trading, <br />
          quel que soit votre niveau d'expérience.
        </p>
        <Button label="Prendre un rendez-vous" />
      </div>
    </section>
  );
};

export default Hero;
