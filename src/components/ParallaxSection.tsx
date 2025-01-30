"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-[400px] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/hero.jpg"
          alt="Parallax Image"
          fill
          className="object-cover object-center brightness-75"
        />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-6">
        <h2 className="text-4xl font-semibold">Feel the Nature</h2>
      </div>
    </section>
  );
};

export default ParallaxSection;
