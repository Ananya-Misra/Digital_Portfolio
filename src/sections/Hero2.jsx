import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { useEffect } from "react";
import { StarsCanvas } from "../components/canvas";
import { colors } from "../constants";

const Hero2 = () => {
  const color = useMotionValue(colors[0]);

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 40%, ${color})`;
  const buttonGradient = useMotionTemplate`linear-gradient(to right, ${color}, #4f46e5)`;
  const textShadow = useMotionTemplate`0 0 10px ${color}, 0 0 20px rgba(255, 255, 255, 0.3)`;
  console.log({
  linkedin: import.meta.env.VITE_APP_LINKEDIN_URL,
  cv: import.meta.env.VITE_APP_CV_URL
});
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative min-h-screen bg-gray-950 px-4 py-24 text-gray-200 transition-colors duration-1000 flex flex-col items-center justify-center"
    >
      <div className="relative z-10">
        <motion.h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-300 bg-clip-text text-center text-4xl font-medium leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight overflow-hidden">
          Hi, I’m Ananya
        </motion.h1>

        <motion.p
          className="my-6 max-w-xl text-center text-lg leading-relaxed md:text-xl md:leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Building scalable backends for{" "}
          <span className="font-semibold">real-world</span> problems.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* LinkedIn Button */}
          <motion.a
            href={import.meta.env.VITE_APP_LINKEDIN_URL || "#"}
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ background: buttonGradient }}
            className="rounded-full px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>

          {/* Resume Button */}
          <motion.a
            href={import.meta.env.VITE_APP_CV_URL || "#"}
            target="_blank" // Opens in new tab
            rel="noopener noreferrer"
            download // This will prompt download if the file is accessible
            style={{ background: buttonGradient }}
            className="rounded-full px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>
    </motion.section>
  );
};

export default Hero2;
