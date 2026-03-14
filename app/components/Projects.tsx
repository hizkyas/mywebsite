"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    emoji: "🤖",
    title: "Project Chimera",
    description:
      "Autonomous multi-agent AI infrastructure enabling agentic orchestration, RAG integration, and intelligent workflow execution. Built with a modular architecture supporting dynamic agent creation and task delegation.",
    techStack: ["Python", "LangChain", "RAG", "FastAPI", "Docker"],
    github: "https://github.com/hizkyas/chimera-agentic-infrastructure-Project",
    image: "/projects/chimera.webp",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    emoji: "🌦️",
    title: "Atmospheric Data Engineering & Analytics Platform",
    description:
      "End-to-end data engineering pipeline ingesting weather data, performing transformation, storage, and analytics-ready processing. Features automated ETL with Apache Airflow and DuckDB for fast analytics.",
    techStack: ["Python", "Apache Airflow", "DuckDB", "Pandas", "PostgreSQL"],
    github: "https://github.com/hizkyas/weather-data-pipeline-end-to-end",
    image: "/projects/atmospheric.webp",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    emoji: "🧠",
    title: "Intelligent PDF Conversational AI",
    description:
      "High-performance PDF question-answering system leveraging Groq LLM inference with Retrieval-Augmented Generation for contextual document interaction. Supports multi-document querying with semantic search.",
    techStack: ["Python", "Groq", "LangChain", "RAG", "Streamlit"],
    github: "https://github.com/hizkyas/groq-pdf-chat",
    image: "/projects/pdf-ai.webp",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    emoji: "📊",
    title: "Job Market Analysis",
    description:
      "Comprehensive data analysis project examining job market trends, in-demand skills, salary distributions, and hiring patterns across tech roles. Provides actionable insights for job seekers and employers through interactive visualizations.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/hizkyas/job-market-analysis",
    image: "/projects/job-market.webp",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    emoji: "💳",
    title: "Credit Risk ML Pipeline",
    description:
      "End-to-end machine learning pipeline for credit risk assessment and loan default prediction. Implements feature engineering, model training, evaluation, and deployment-ready scoring system for financial institutions.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "MLflow"],
    github: "https://github.com/hizkyas/credit-risk-ml-pipeline",
    image: "/projects/credit-risk.webp",
    color: "from-orange-500/20 to-red-500/20",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Showcasing AI systems, data pipelines, and intelligent applications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card overflow-hidden group"
            >
              {/* Project Image */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {project.emoji}
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
