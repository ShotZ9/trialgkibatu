"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center text-white text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold tracking-wide drop-shadow-md"
        >
          GKI Batu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-xl text-gray-300"
        >
          Menjadi terang bagi dunia, hidup dalam kasih Tuhan.
        </motion.p>

        {/* Button
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          href="sejarah"
          className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-200 transition-all"
        >
          Explore
        </motion.a> */}
      </div>
    </section>
  );
};

export default Hero;
