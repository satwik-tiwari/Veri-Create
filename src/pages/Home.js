import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection />
    </motion.div>
  );
};

export default Home;