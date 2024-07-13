import React from 'react';
import { motion } from 'framer-motion';
import HeroAnimation from './HeroAnimation';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">
        Welcome
      </h1>
      <p><HeroAnimation /> </p>
      <p className="max-w-md mx-auto mb-6">
        It is a long established fact that a reader will be of a page when looking at its layout.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg mb-4"
      >
        Download CV
      </motion.button>
      <motion.div
        className="mt-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-8 w-8 border-b-2 border-r-2 border-blue-500 rotate-45"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
