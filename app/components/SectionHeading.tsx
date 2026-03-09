"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold mb-3">{title}</h2>
      <div className="section-divider mb-4" />
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
