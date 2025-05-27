import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
const HeroAlternative = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="relative min-h-screen w-full">
      <div className="relative z-10 w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 px-4">
        <p className="sm:text-3xl text-xl font-medium text-white text-center">
          Hi, I am Ananya<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient pt-0">
          Turning code into things people actually use.
        </p>
      </div>
  
    </section>
  );
};

export default HeroAlternative;
