"use client";

import { motion } from "framer-motion";
import { Code2, TrendingUp, ArrowRight, User, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function PortfolioSelection() {
  const { setPortfolioType } = usePortfolio();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Basic Information Section */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-md text-white border border-cyan-400/30 text-sm font-semibold mb-6"
            >
              <User size={16} />
              <span>Welcome to My Portfolio</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jatin Tuteja
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              A passionate <strong className="text-cyan-400">Full-Stack Web Developer</strong> and{" "}
              <strong className="text-purple-400">Digital Marketing Strategist</strong> based in Surat, India.
              I specialize in building fast, SEO-optimized web applications and helping brands grow through
              data-driven digital marketing strategies.
            </motion.p>

            {/* Contact Info Cards */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={itemVariants}
            >
              <motion.a
                href="mailto:jatintuteja013@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-all text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={16} />
                <span>jatintuteja013@gmail.com</span>
              </motion.a>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm"
              >
                <MapPin size={16} />
                <span>Surat, India</span>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center mb-12"
              variants={itemVariants}
            >
              <motion.a
                href="https://www.linkedin.com/in/jatin-tuteja-933ba1220/"
                className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/50 text-white flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/JatinTuteja013"
                className="w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-400/50 text-white flex items-center justify-center hover:bg-purple-500 hover:border-purple-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Portfolio Selection Section */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Portfolio
            </h2>
            <p className="text-gray-400 text-lg">
              Select which portfolio you'd like to explore
            </p>
          </motion.div>

          {/* Portfolio Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Frontend Developer Option */}
            <motion.div
              variants={itemVariants}
              className="group relative"
            >
              <motion.button
                onClick={() => setPortfolioType("frontend-developer")}
                className="w-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl">
                    <Code2 size={32} className="text-cyan-400" />
                  </div>
                  <ArrowRight
                    size={24}
                    className="text-cyan-400 group-hover:translate-x-2 transition-transform"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Frontend Developer
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Explore my expertise in building modern, responsive web applications using React, Next.js,
                  TypeScript, and cutting-edge frontend technologies. See projects focused on user experience,
                  performance optimization, and clean code architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            </motion.div>

            {/* Digital Marketing Option */}
            <motion.div
              variants={itemVariants}
              className="group relative"
            >
              <motion.button
                onClick={() => setPortfolioType("digital-marketing")}
                className="w-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-400/30 p-8 rounded-2xl hover:border-purple-400/50 transition-all duration-300 text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl">
                    <TrendingUp size={32} className="text-purple-400" />
                  </div>
                  <ArrowRight
                    size={24}
                    className="text-purple-400 group-hover:translate-x-2 transition-transform"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Digital Marketing
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Discover my digital marketing strategies, SEO optimization techniques, content marketing
                  campaigns, and analytics expertise. See how I help brands increase visibility, engagement,
                  and conversions through data-driven marketing approaches.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SEO", "Content Marketing", "Analytics", "Social Media", "PPC"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

