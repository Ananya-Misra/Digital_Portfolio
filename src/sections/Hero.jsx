import { motion } from "framer-motion";
import { ComputersCanvas } from "../components/canvas";
import { styles } from "../styles";
const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Ananya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals , user <br className="sm:block hidden" />{" "}
            interfaces and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[60px] rounded-3xl border-2 border-secondary flex justify-center items-start pt-2">
            <motion.div
              animate={{
                y: [0, 28, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
