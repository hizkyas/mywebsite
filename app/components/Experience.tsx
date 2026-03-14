"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Cyber Attack Analyst",
    company: "Commercial Bank of Ethiopia",
    location: "Ethiopia",
    period: "2023 – Present",
    achievements: [
      "Analyze and respond to cyber threats targeting the bank's critical financial infrastructure",
      "Monitor security systems in real-time to detect and mitigate attack vectors",
      "Conduct threat intelligence analysis and vulnerability assessments across banking platforms",
      "Collaborate with incident response teams to investigate and resolve security breaches",
    ],
  },
  {
    role: "AI & Data Engineer",
    company: "Freelance / Personal Projects",
    location: "Remote",
    period: "2022 – Present",
    achievements: [
      "Designed and deployed multi-agent AI systems with RAG integration for production workloads",
      "Built end-to-end data pipelines using Apache Airflow, DuckDB, and PostgreSQL",
      "Developed intelligent document interaction systems using LangChain and Groq APIs",
      "Automated ETL workflows processing large-scale datasets with Python and Pandas",
    ],
  },
  {
    role: "Software Developer",
    company: "Early Career",
    location: "Ethiopia",
    period: "2021 – present",
    achievements: [
      "Built full-stack web applications using React, Next.js, and FastAPI",
      "Developed RESTful APIs and integrated third-party services",
      "Implemented database solutions with PostgreSQL and MongoDB",
      "Collaborated with cross-functional teams in agile methodologies",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey and key achievements"
        />

        <div className="relative pl-10">
          {/* Timeline Line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.period}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="timeline-dot" />

                <div className="glass-card p-6 ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 text-sm flex items-center gap-1.5">
                        <Briefcase size={14} />
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-300">{exp.period}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 sm:justify-end">
                        <MapPin size={12} />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <li
                        key={j}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1.5 shrink-0">
                          ▹
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
