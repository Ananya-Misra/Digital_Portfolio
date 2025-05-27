import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero2,
  Navbar,
  Tech,
  Works,
} from "./sections";

import { motion, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import { StarsCanvas } from "./components/canvas";
import { colors } from "./constants";
const App = () => {
  const [starColor, setStarColor] = useState(colors[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setStarColor(colors[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Hero2 />
      <About />
      <Experience />
      <Tech />
      <Works />
      <motion.div
        className="relative min-h-screen"
        style={{
          background: useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${starColor})`,
          transition: "background 1.5s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        <Contact />
        <StarsCanvas color={starColor} />
      </motion.div>
    </BrowserRouter>
  );
};

export default App;
