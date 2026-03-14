"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const articles = [
  {
    title: "Building RAG Systems at Scale",
    excerpt:
      "A deep dive into Retrieval-Augmented Generation architectures for production AI systems, covering vector stores, chunking strategies, and evaluation frameworks.",
    date: "Coming Soon",
    readTime: "10 min read",
    tag: "AI Engineering",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    title: "Data Pipeline Orchestration with Apache Airflow",
    excerpt:
      "Learn how to build reliable, scalable ETL pipelines using Apache Airflow with best practices for monitoring, error handling, and performance optimization.",
    date: "Coming Soon",
    readTime: "8 min read",
    tag: "Data Engineering",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    title: "Zero Trust Security for Modern Applications",
    excerpt:
      "Understanding zero trust principles and implementing them in cloud-native applications, from identity verification to micro-segmentation.",
    date: "Coming Soon",
    readTime: "12 min read",
    tag: "Cybersecurity",
    tagColor: "bg-red-500/10 text-red-400 border-red-500/20",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Blog & Articles"
          subtitle="Sharing insights on AI, data engineering, and security"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-6 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border ${article.tagColor}`}
                  >
                    {article.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} />
                    {article.date}
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
