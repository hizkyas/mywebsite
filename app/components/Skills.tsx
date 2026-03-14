"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface SkillCategory {
  category: string;
  color: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "FastAPI", level: 90 },
      { name: "LangChain", level: 88 },
      { name: "Pandas", level: 92 },
    ],
  },
  {
    category: "AI / ML & Data",
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "RAG Systems", level: 90 },
      { name: "Machine Learning", level: 80 },
      { name: "DuckDB", level: 85 },
      { name: "Apache Airflow", level: 85 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git / GitHub", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "Linux / CLI", level: 82 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          className={`skill-bar-fill bg-gradient-to-r ${color}`}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with daily"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 space-y-5"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`}
                />
                {cat.category}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={catIndex * 0.1 + skillIndex * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
