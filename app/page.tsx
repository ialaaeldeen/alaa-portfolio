"use client";

import SideQuickMenu from "@/components/SideQuickMenu";
import Navbar from "@/components/Navbar";
import Contact from "../components/Contact.jsx";
import CyberBackground from "@/components/CyberBackground";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Project = {
  title: string;
  desc: string;
  tools: string;
  badge?: string;
  github?: string;
  live?: string;
  diagram?: string;
};

type TechnicalSkill = {
  name: string;
  iconClass: string;
  colorClass?: string;
};

type ToolItem = {
  name: string;
  icon: string;
};

type AiToolItem = {
  name: string;
  icon: string;
};

const resumeFile = "/Alaaeldeen-Abdelnour-Resume.pdf";

const projects: Project[] = [
  {
    title: "CyberShield360 – Website Security Scanner",
    desc: "A professional cybersecurity portfolio and freelance-ready platform designed for authorized website security assessment. The MVP performs website availability checks, security header analysis, SSL/TLS validation, DNS and email security checks, explainable risk scoring, database persistence, and API-ready reporting to help organizations understand website exposure in a clear and safe way.",
    tools:
      "FastAPI · SQLAlchemy · SQLite · Pytest · Docker · Security Headers · SSL/TLS · DNS Security · Risk Scoring",
    badge: "Active Build",
  },
  {
    title: "SAMHM – Mental Health Sentiment Analysis",
    desc: "AI system analyzing social media text for early mental-health awareness using NLP and transformer models with secure DevSecOps deployment.",
    tools: "Python · FastAPI · Next.js · Docker · PostgreSQL · CI/CD",
    github: "https://github.com/wixsz/samhm-backend",
    live: "https://samhm.vercel.app/",
  },
  {
    title: "Secure Wireless Network & Penetration Testing",
    desc: "Designed VLAN-segmented secure wireless architecture and performed penetration testing using Nmap and Metasploit.",
    tools: "Cisco Packet Tracer · Ubuntu · Nmap · Metasploit",
    diagram: "/network-architecture.png",
  },
  {
    title: "EcoCycle 2.0 – Smart Recycling Platform",
    desc: "UX prototype for a sustainability platform integrating AI waste recognition, AR sorting, and IoT smart-bin validation.",
    tools: "Figma · UI/UX · Sustainability Design",
    live: "https://www.figma.com/proto/OkUqDhaiTuRNRD4mygq6ct/EcoCycle?node-id=67-1294&p=f&t=jX6V54zOxsuJRLmW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=67%3A1294&show-proto-sidebar=1",
  },
  {
    title: "Cloud Security with Deep Learning IDS",
    desc: "Hybrid CNN-RNN intrusion detection system using CICIDS2018 dataset to detect cyber threats in cloud environments.",
    tools: "Python · TensorFlow · CNN · RNN · Deep Learning",
  },
  {
    title: "Fitness Tracker Application",
    desc: "Java OOP-based fitness tracker with goal setting, progress visualization, and persistent data storage.",
    tools: "Java · JavaFX · UML",
  },
  {
    title: "Uber Data Breach Analysis (2016 & 2022)",
    desc: "Cybersecurity, legal, and ethical analysis of Uber data breaches including MFA fatigue, credential leaks, and governance failures.",
    tools: "Cybersecurity Analysis · GDPR · Ethics Frameworks",
  },
  {
    title: "Healthcare Data Analytics",
    desc: "Built a big-data healthcare pipeline using Hadoop, Hive, and Impala for analytics on 55K medical records.",
    tools: "Hadoop · Hive · Impala · Python · MySQL",
  },
  {
    title: "Ronin Network Hack Investigation",
    desc: "Digital forensic investigation of the Ronin blockchain hack linked to Lazarus Group, including transaction analysis and forensic documentation.",
    tools: "Wireshark · Blockchain Forensics",
  },
  {
    title: "Market Basket Analysis – Apriori",
    desc: "Association rule mining on retail transactions to discover product bundles using support, confidence, and lift metrics.",
    tools: "Python · Pandas · Data Mining · Visualization",
  },
  {
    title: "OECD Municipal Waste Dashboard",
    desc: "Interactive Tableau dashboard analyzing 30+ years of OECD waste generation trends aligned with SDG 12.5.",
    tools: "Tableau · Data Storytelling · EDA",
  },
];

const technicalSkills: TechnicalSkill[] = [
  {
    name: "Python",
    iconClass: "devicon-python-plain",
    colorClass: "text-yellow-400",
  },
  {
    name: "Java",
    iconClass: "devicon-java-plain",
    colorClass: "text-red-500",
  },
  {
    name: "C++",
    iconClass: "devicon-cplusplus-plain",
    colorClass: "text-blue-400",
  },
  {
    name: "MySQL",
    iconClass: "devicon-mysql-plain",
    colorClass: "text-blue-500",
  },
  {
    name: "R",
    iconClass: "devicon-r-plain",
    colorClass: "text-blue-300",
  },
  {
    name: "Next.js",
    iconClass: "devicon-nextjs-original",
    colorClass: "text-white",
  },
];

const securityTools: ToolItem[] = [
  {
    name: "Wireshark",
    icon: "/icons/wireshark.svg",
  },
  {
    name: "Metasploit",
    icon: "/icons/metasploit.svg",
  },
  {
    name: "Docker",
    icon: "/icons/docker.svg",
  },
  {
    name: "Cisco",
    icon: "/icons/cisco.svg",
  },
  {
    name: "Kali Linux",
    icon: "/icons/kalilinux.svg",
  },
  {
    name: "Linux",
    icon: "/icons/linux.svg",
  },
];

const aiTools: AiToolItem[] = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "R",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  },
  {
    name: "Tableau",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden scroll-smooth bg-gradient-to-b from-black via-slate-950 to-black text-white selection:bg-cyan-400/30">
      <SideQuickMenu />

      <Navbar />

      <div className="fixed inset-0 -z-10">
        <CyberBackground />
      </div>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-24 pt-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-500/10">
            Cybersecurity · AI Security · DevSecOps
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alaaeldeen
            </span>
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            Cybersecurity Engineer
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Computer Science student specializing in cybersecurity, network
            security, DevSecOps, and AI-driven security systems.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-400/40"
            >
              View Projects
            </a>

            <a
              href={resumeFile}
              download="Alaaeldeen-Abdelnour-Resume.pdf"
              className="rounded-xl border border-cyan-300/40 bg-white/5 px-8 py-3 font-semibold text-slate-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="mb-16 text-center text-4xl font-bold">About</h2>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src="/profile.jpg"
                alt="Alaaeldeen"
                className="h-72 w-72 rounded-full border-4 border-slate-800 object-cover shadow-2xl shadow-cyan-500/10"
              />
            </div>

            <div>
              <div className="leading-8 text-slate-400">
                <p>
                  I am a Computer Science student specializing in cybersecurity
                  with a data science extension at Taylor's University. My
                  interests focus on cybersecurity engineering, network defense,
                  and applying machine learning to security challenges.
                </p>

                <p className="mt-6">
                  My work includes building secure systems, analyzing cyber
                  threats, and developing intelligent security solutions using
                  modern tools such as Python, Docker, DevSecOps workflows, and
                  machine learning frameworks.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-black/20 backdrop-blur">
                <h3 className="mb-8 text-xl font-semibold">Education</h3>

                <div className="grid gap-6 text-sm text-slate-400 sm:grid-cols-2">
                  <div>
                    <p className="text-slate-500">University</p>
                    <p className="mt-1 text-slate-300">
                      Taylor's University
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Program</p>
                    <p className="mt-1 text-slate-300">
                      Bachelor's of Computer Science - Cybersecurity Specialization
                    </p>
                    <p className="text-slate-400">Data Science Extension</p>
                  </div>

                  <div>
                    <p className="text-slate-500">Expected Graduation</p>
                    <p className="mt-1 text-slate-300">2026</p>
                  </div>

                  <div>
                    <p className="text-slate-500">Location</p>
                    <p className="mt-1 text-slate-300">
                      Riyadh, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Selected cybersecurity, AI, software engineering, and data projects
            demonstrating practical security and development skills.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`group rounded-2xl border p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/10 ${
                  index === 0
                    ? "border-cyan-400/40 bg-cyan-950/30 hover:border-cyan-300/70"
                    : "border-slate-800 bg-slate-900/60 hover:border-cyan-400/50"
                }`}
              >
                {project.badge && (
                  <span className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {project.badge}
                  </span>
                )}

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-4 leading-7 text-slate-400">
                  {project.desc}
                </p>

                <p className="mb-5 text-sm text-slate-500">
                  {project.tools}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                      Live
                    </a>
                  )}

                  {project.diagram && (
                    <a
                      href={project.diagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:bg-purple-400/10 hover:text-white"
                    >
                      View Diagram
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="mb-16 text-center text-4xl font-bold">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
              >
                <i
                  className={`${skill.iconClass} text-5xl ${
                    skill.colorClass ?? "text-white"
                  }`}
                  aria-hidden="true"
                />

                <p className="mt-4 font-medium text-slate-300">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CYBERSECURITY TOOLS */}
      <section
        id="security-tools"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold">
            Cybersecurity & Networking Tools
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Tools used across network analysis, penetration testing,
            containerization, Linux environments, and secure infrastructure.
          </p>

          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3">
            {securityTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
              >
                <img
                  src={tool.icon}
                  className="mx-auto h-14 invert brightness-200"
                  alt={`${tool.name} logo`}
                />

                <p className="mt-4 font-medium text-slate-300">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI & DATA SCIENCE TOOLS */}
      <section
        id="ai-tools"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold">
            AI & Data Science Tools
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Tools used for machine learning, analytics, visualization, and
            data-driven cybersecurity projects.
          </p>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
              >
                <img
                  src={tool.icon}
                  className="mb-4 h-16 w-16"
                  alt={`${tool.name} logo`}
                />

                <p className="text-lg font-semibold text-slate-200">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold">Alaaeldeen</h2>

        <p className="mb-6 text-slate-400">
          Cybersecurity Engineer | AI Security | DevSecOps
        </p>

        <div className="mb-6 flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/ialaaeldeen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/alaaeldeeneltayeb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-blue-500"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:allouah30@outlook.com"
            className="text-slate-400 transition hover:text-red-400"
            aria-label="Send email"
          >
            <MdEmail />
          </a>
        </div>

        <p className="text-sm text-slate-500">© 2026 Alaaeldeen</p>
      </footer>
    </main>
  );
}