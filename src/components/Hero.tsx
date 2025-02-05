'use client';

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-accent/5" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-outfit font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Digital Solutions, Simplified
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Innovative digital tools that solve real-world challenges, one click at a time.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-x-4"
        >
          <a 
            href="#services" 
            className="inline-block bg-primary hover:bg-primary-dark text-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
