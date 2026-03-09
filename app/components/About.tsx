"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Shield, Brain } from "lucide-react";
import SectionHeading from "./SectionHeading";

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "FastAPI",
  "Pandas",
  "DuckDB",
  "SQL",
  "LangChain",
  "Apache Airflow",
  "Docker",
  "PostgreSQL",
  "RAG Systems",
  "Machine Learning",
];

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2020 – 2024",
  },
];

const certifications = [
  {
    icon: Award,
    title: "IBM Data Engineering Professional Certificate",
    issuer: "IBM via Coursera",
  },
  {
    icon: Shield,
    title: "Zero Trust Security Certification",
    issuer: "Cybersecurity Institute",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about turning data into intelligent solutions"
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold">Career Summary</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                I am an AI and Data Engineer with practical experience in
                building production-ready AI systems, data engineering
                pipelines, and scalable software solutions. I specialize in
                Retrieval-Augmented Generation (RAG) systems, workflow
                automation using Apache Airflow, and intelligent applications
                built with modern AI frameworks including LangChain.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I have hands-on experience in cybersecurity, including risk
                assessment, secure system design, and real-time system
                monitoring to protect critical infrastructure. My technical
                expertise spans Python, TypeScript, SQL, and machine learning
                pipelines, enabling the development of secure and efficient
                data-driven applications.
              </p>
            </div>

            {/* Skill Tags */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="tech-badge"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Education */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-blue-400" size={20} />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.title} className="space-y-1">
                    <p className="font-medium text-gray-200">{edu.title}</p>
                    <p className="text-sm text-gray-400">{edu.institution}</p>
                    <p className="text-xs text-blue-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="text-blue-400" size={20} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-start gap-3"
                  >
                    <cert.icon
                      size={18}
                      className="text-blue-400 mt-0.5 shrink-0"
                    />
                    <div>
                      <p className="font-medium text-gray-200 text-sm">
                        {cert.title}
                      </p>
                      <p className="text-xs text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
