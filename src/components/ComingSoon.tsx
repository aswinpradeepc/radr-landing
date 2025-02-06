'use client';

import { motion } from "framer-motion";
import { ShoppingBagIcon, MapIcon, SparklesIcon } from "@heroicons/react/24/outline";

const futureServices = [
  {
    id: "superorder",
    title: "SuperOrder",
    icon: ShoppingBagIcon,
    description: "Complete order management platform for stores with delivery system. Streamline your home delivery operations.",
  },
  {
    id: "waterradr",
    title: "WaterRadr",
    icon: MapIcon,
    description: "Locate nearby drinking water purifiers with indoor navigation maps. Making clean water accessible everywhere.",
  },
  {
    id: "more",
    title: "More Coming Soon",
    icon: SparklesIcon,
    description: "We're constantly innovating to bring you more digital solutions that simplify your life.",
  },
];

export default function ComingSoon() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-outfit font-bold text-white mb-4">
          Upcoming Products
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exciting new digital solutions on the horizon
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {futureServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-dark-100 rounded-xl p-6 border border-dark-200 hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <service.icon className="w-12 h-12 text-primary mb-4 relative z-10" />
              
              <h3 className="text-xl font-outfit font-bold text-white mb-2 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-400 relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
