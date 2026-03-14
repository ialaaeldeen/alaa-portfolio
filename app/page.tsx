"use client";

import Navbar from "@/components/Navbar";
import Contact from "../components/Contact.jsx";
import CyberBackground from "@/components/CyberBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen scroll-smooth">

      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <CyberBackground />
      </div>

      {/* HERO */}
      <section className="pt-28 pb-24 text-center max-w-5xl mx-auto px-6">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Alaaeldeen
          </span>
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Cybersecurity Engineer
        </p>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Computer Science student specializing in cybersecurity, network
          security, DevSecOps, and AI-driven security systems.
        </p>

        <div className="mt-8 flex justify-center gap-5">

          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
          Download Resume
          </a>

        </div>

      </section>


     {/* ABOUT */}
<section id="about" className="max-w-6xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold text-center mb-16">
    About
  </h2>

  <div className="grid md:grid-cols-2 gap-12 items-center">

    <div className="flex justify-center">
      <img
        src="/profile.jpg"
        alt="Alaaeldeen"
        className="w-72 h-72 object-cover rounded-full border-4 border-gray-800 shadow-lg"
      />
    </div>

    <div>

      <div className="text-gray-400 leading-relaxed">

        <p>
          I am a Computer Science student specializing in cybersecurity
          with a data science extension at Taylor's University. My interests
          focus on cybersecurity engineering, network defense, and applying
          machine learning to security challenges.
        </p>

        <p className="mt-6">
          My work includes building secure systems, analyzing cyber
          threats, and developing intelligent security solutions using
          modern tools such as Python, Docker, and machine learning
          frameworks.
        </p>

      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mt-8">

      <h3 className="text-xl font-semibold mb-8">
        Education
      </h3>

      <div className="space-y-6 text-gray-400 text-sm">

        <div>
          <p>Taylor's University</p>
        </div>

        <div>
          <p>Bachelor's of Computer Science - Cybersecurity</p>
          <p>Data Science Extension</p>
        </div>

        <div>
          <p>Expected Graduation</p>
          <p>2026</p>
        </div>

        <div>
          <p>Location</p>
          <p>Subang Jaya, Malaysia</p>
        </div>

      </div>

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-4">
          Awards & Achievements
        </h3>

        <p className="text-gray-400 text-sm">
          Dean's List – Taylor's University (4 Semesters)
        </p>

      </div>

    </div>

    </div>

  </div>

</section>

     {/* FEATURED PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-16">
      Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

      {[
      {
      title: "SAMHM – Mental Health Sentiment Analysis",
      desc: "AI system analyzing social media text for early mental-health awareness using NLP and transformer models with secure DevSecOps deployment.",
      tools: "Python · FastAPI · Next.js · Docker · PostgreSQL · CI/CD",
      github: "https://github.com/wixsz/samhm-backend",
      live: "https://samhm-frontend.vercel.app/"
      },

      {
      title: "EcoCycle 2.0 – Smart Recycling Platform",
      desc: "UX prototype for a sustainability platform integrating AI waste recognition, AR sorting and IoT smart-bin validation.",
      tools: "Figma · UI/UX · Sustainability Design",
      live: "https://www.figma.com/proto/OkUqDhaiTuRNRD4mygq6ct/EcoCycle?node-id=67-1294&p=f&t=jX6V54zOxsuJRLmW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=67%3A1294&show-proto-sidebar=1"
      },

      {
      title: "Secure Wireless Network & Penetration Testing",
      desc: "Designed VLAN-segmented secure wireless architecture and performed penetration testing using Nmap and Metasploit.",
      tools: "Cisco Packet Tracer · Ubuntu · Nmap · Metasploit",
      diagram: "/network-architecture.png"
      },

      {
      title: "Cloud Security with Deep Learning IDS",
      desc: "Hybrid CNN-RNN intrusion detection system using CICIDS2018 dataset to detect cyber threats in cloud environments.",
      tools: "Python · TensorFlow · CNN · RNN · Deep Learning"
      },

      {
      title: "Fitness Tracker Application",
      desc: "Java OOP-based fitness tracker with goal setting, progress visualization, and persistent data storage.",
      tools: "Java · JavaFX · UML"
      },

      {
      title: "Uber Data Breach Analysis (2016 & 2022)",
      desc: "Cybersecurity, legal and ethical analysis of Uber data breaches including MFA fatigue, credential leaks and governance failures.",
      tools: "Cybersecurity Analysis · GDPR · Ethics Frameworks"
      },

      {
      title: "Healthcare Data Analytics (Hadoop Ecosystem)",
      desc: "Built big-data healthcare pipeline using Hadoop, Hive and Impala for analytics on 55K medical records.",
      tools: "Hadoop · Hive · Impala · Python · MySQL"
      },

      {
      title: "Student Lifestyle & Academic Performance",
      desc: "Statistical analysis of lifestyle factors affecting GPA using correlation, regression and visualization.",
      tools: "R Language · Statistics · Data Visualization"
      },

      {
      title: "Ronin Network Hack Investigation",
      desc: "Digital forensic investigation of the Ronin blockchain hack linked to Lazarus Group including transaction analysis and forensic documentation.",
      tools: "Wireshark · Blockchain Forensics"
      },

      {
      title: "Market Basket Analysis – Apriori",
      desc: "Association rule mining on retail transactions to discover product bundles using support, confidence and lift metrics.",
      tools: "Python · Pandas · Data Mining · Visualization"
      },

      {
      title: "OECD Municipal Waste Dashboard",
      desc: "Interactive Tableau dashboard analyzing 30+ years of OECD waste generation trends aligned with SDG 12.5.",
      tools: "Tableau · Data Storytelling · EDA"
      }

      ].map((project, i) => (

      <div
      key={i}
      className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-blue-500 hover:-translate-y-1 transition duration-300"
      >

      <h3 className="text-xl font-semibold mb-3">
      {project.title}
      </h3>

      <p className="text-gray-400 mb-4">
      {project.desc}
      </p>

      <p className="text-sm text-gray-500 mb-4">
      {project.tools}
      </p>

      <div className="flex gap-4 flex-wrap">

      {project.github && (
      <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
      >
      GitHub
      </a>
      )}

      {project.live && (
      <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
      Live
      </a>
      )}

      </div>

      </div>

      ))}

      </div>
      </section>

     {/* TECHNICAL SKILLS */}
<section id="skills" className="max-w-6xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold text-center mb-16">
    Technical Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">

    {/* Python */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <i className="devicon-python-plain text-5xl text-yellow-400"></i>
      <p className="text-gray-300">Python</p>
    </div>

    {/* Java */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <i className="devicon-java-plain text-5xl text-red-500"></i>
      <p className="text-gray-300">Java</p>
    </div>

    {/* C++ */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <i className="devicon-cplusplus-plain text-5xl text-blue-400"></i>
      <p className="text-gray-300">C++</p>
    </div>

    {/* MySQL */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <i className="devicon-mysql-plain text-5xl text-blue-500"></i>
      <p className="text-gray-300">MySQL</p>
    </div>

    {/* R */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <i className="devicon-r-plain text-5xl text-blue-300"></i>
      <p className="text-gray-300">R</p>
    </div>

    {/* Next.js */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <i className="devicon-nextjs-original text-5xl"></i>
      <p className="text-gray-300">Next.js</p>
    </div>

  </div>

</section>

        {/* CYBERSECURITY TOOLS */}
<section id="security-tools" className="max-w-6xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold text-center mb-16">
    Cybersecurity & Networking Tools
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">

    {/* Wireshark */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <img
        src="/icons/wireshark.svg"
        className="h-14 mx-auto invert brightness-200"
        alt="Wireshark"
      />
      <p className="text-gray-300">Wireshark</p>
    </div>

    {/* Metasploit */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <img
        src="/icons/metasploit.svg"
        className="h-14 mx-auto invert brightness-200"
        alt="Metasploit"
      />
      <p className="text-gray-300">Metasploit</p>
    </div>

    {/* Docker */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <img
        src="/icons/docker.svg"
        className="h-14 mx-auto invert brightness-200"
        alt="Docker"
      />
      <p className="text-gray-300">Docker</p>
    </div>

    {/* Cisco */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <img
        src="/icons/cisco.svg"
        className="h-14 mx-auto invert brightness-200"
        alt="Cisco"
      />
      <p className="text-gray-300">Cisco</p>
    </div>

    {/* Kali Linux */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <img
        src="/icons/kalilinux.svg"
        className="h-14 mx-auto invert brightness-200"
        alt="Kali Linux"
      />
      <p className="text-gray-300">Kali Linux</p>
    </div>

    {/* Linux */}
    <div className="space-y-3 transform hover:scale-110 transition duration-300">
      <img
        src="/icons/linux.svg"
        className="h-14 mx-auto invert brightness-200"
        alt="Linux"
      />
      <p className="text-gray-300">Linux</p>
    </div>

  </div>

</section>
         {/* AI & DATA SCIENCE TOOLS */}
<section id="ai-tools" className="max-w-6xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold text-center mb-16">
    AI & Data Science Tools
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

    {/* Python */}
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-8 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-16 h-16 mb-4"/>
      <p className="text-lg font-semibold">Python</p>
    </div>

    {/* Pandas */}
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-8 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="w-16 h-16 mb-4"/>
      <p className="text-lg font-semibold">Pandas</p>
    </div>

    {/* NumPy */}
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-8 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="w-16 h-16 mb-4"/>
      <p className="text-lg font-semibold">NumPy</p>
    </div>

    {/* R */}
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-8 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" className="w-16 h-16 mb-4"/>
      <p className="text-lg font-semibold">R</p>
    </div>

    {/* Scikit Learn */}
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-8 hover:scale-105 transition">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" className="w-16 h-16 mb-4"/>
      <p className="text-lg font-semibold">Scikit-learn</p>
    </div>

    {/* TensorFlow */}
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-8 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="w-16 h-16 mb-4"/>
      <p className="text-lg font-semibold">TensorFlow</p>
    </div>

    {/* PyTorch */}
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-8 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" className="w-16 h-16 mb-4"/>
      <p className="text-lg font-semibold">PyTorch</p>
    </div>

    {/* Matplotlib */}
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-8 hover:scale-105 transition">
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" className="w-16 h-16 mb-4"/>
      <p className="text-lg font-semibold">Matplotlib</p>
    </div>

    {/* Tableau */}
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-xl p-8 hover:scale-105 transition">
      <img src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg" className="w-16 h-16 mb-4"/>
      <p className="text-lg font-semibold">Tableau</p>
    </div>
    

  </div>

</section>
      {/* CONTACT FORM */}
      <Contact />

       {/* FOOTER */}
<footer className="text-center py-10 border-t border-gray-800 text-gray-500">

  <p className="text-lg font-semibold">
    Alaaeldeen
  </p>

  <p className="mt-2">
    Cybersecurity Engineer | AI Security | DevSecOps
  </p>

  <div className="flex justify-center gap-6 mt-6">

    <a href="https://github.com/ialaaeldeen" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>

    <a href="https://linkedin.com/in/alaaeldeeneltayeb" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>

    <a href="mailto:allouah30@outlook.com">
      Email
    </a>

  </div>

  <p className="mt-6 text-sm">
    © {new Date().getFullYear()} Alaaeldeen
  </p>

</footer>

</main>
  );}