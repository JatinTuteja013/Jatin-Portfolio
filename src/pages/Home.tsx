"use client";

import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github, Code2, TrendingUp } from "lucide-react";
import React, { useRef } from "react";
import { useState, useEffect, useMemo } from "react";

export default function Home() {
  const [stars, setStars] = useState<Array<{
    left: number;
    top: number;
    xOffset: number;
    duration: number;
    delay: number;
  }>>([]);

  // Generate stars only on client side to prevent hydration mismatch
  useEffect(() => {
    setStars(
      [...Array(15)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        xOffset: Math.random() * 400 - 200,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Letter-by-letter variants
  const letterVariant = {
    hidden: { opacity: 0, y: `0.35em` },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  } as const;

  const headingPrefix = "Hi, I'm ";
  const headingName = "Jatin Tuteja";
  const headingPrefixChars = useMemo(() => headingPrefix.split(""), []);
  const headingNameChars = useMemo(() => headingName.split(""), []);

  const [showResumeDropdown, setShowResumeDropdown] = useState(false);

  const resumeDropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (resumeDropdownRef.current && !resumeDropdownRef.current.contains(e.target as Node)) {
        setShowResumeDropdown(false);
      }
    }
    if (showResumeDropdown) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showResumeDropdown]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-x-hidden pt-20">
      {/* Shooting Star Background */}
      <div className="absolute inset-0 overflow-x-hidden pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              y: [0, -1000],
              x: [0, star.xOffset],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]"></div>
          </motion.div>
        ))}
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Radiant Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="w-full container mx-auto px-4 md:px-6 lg:px-12 py-7 md:py-10 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Content */}
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-md text-white border border-cyan-400/30 text-sm font-semibold relative overflow-hidden"
                variants={itemVariants}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-0 hover:opacity-100 transition-opacity"></span>
                <Code2 size={16} className="relative z-10" />
                <span className="relative z-10">Full-Stack Web Developer & Digital Marketing Specialist</span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight relative px-4 md:px-0"
                variants={itemVariants}
              >
                <span aria-label={headingPrefix + headingName} className="inline-block align-top">
                  <motion.span
                    className="inline-block px-2"
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.05, delayChildren: 0.15 }}
                  >
                    {headingPrefixChars.map((ch, i) => (
                      <motion.span key={`hp-${i}`} className="inline-block" variants={letterVariant}>
                        {ch}
                      </motion.span>
                    ))}
                  </motion.span>
                  <span className="relative inline-block">
                    <motion.span
                      className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent inline-block"
                      initial="hidden"
                      animate="visible"
                      transition={{ staggerChildren: 0.06, delayChildren: 0.4 }}
                    >
                      {headingNameChars.map((ch, i) => (
                        <motion.span key={`hn-${i}`} className="inline-block" variants={letterVariant}>
                          {ch}
                        </motion.span>
                      ))}
                    </motion.span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-50 blur-lg hidden sm:block pointer-events-none">
                      Jatin
                    </span>
                  </span>
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed px-4 md:px-0"
                variants={itemVariants}
              >
                I design and develop high-performing, user-friendly websites that blend creative design with modern technology — helping businesses grow through data-driven digital marketing strategies.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-gray-500 px-4 md:px-0"
                variants={itemVariants}
              >
                Full-Stack Web Developer • Digital Marketing Strategist • SEO & Content Optimization Expert
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 px-4 md:px-0"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden group text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail size={18} />
                    Get In Touch
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.a>
                <div className="relative" ref={resumeDropdownRef}>
                  <motion.button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-transparent border-2 border-cyan-400/50 text-white rounded-full font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowResumeDropdown((v) => !v)}
                  >
                    <Download size={18} />
                    Download CV
                  </motion.button>
                  {showResumeDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-60 bg-white border border-cyan-100 rounded-lg shadow-lg z-30 overflow-hidden"
                    >
                      <a
                        href="/Web_Dev_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-5 py-3 text-cyan-900 hover:bg-cyan-50 hover:text-cyan-700 text-sm font-medium transition-colors duration-150"
                        onClick={() => setShowResumeDropdown(false)}
                      >
                        <span className="flex items-center gap-2">
                          <Download size={16} className="text-cyan-400" />
                          <span>Web Developer Resume</span>
                        </span>
                      </a>
                      <a
                        href="/Digital_Marketer_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-5 py-3 text-cyan-900 hover:bg-cyan-50 hover:text-cyan-700 text-sm font-medium transition-colors duration-150"
                        onClick={() => setShowResumeDropdown(false)}
                      >
                        <span className="flex items-center gap-2">
                          <Download size={16} className="text-cyan-400" />
                          <span>Digital Marketer Resume</span>
                        </span>
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4 pt-4 justify-center lg:justify-start px-4 md:px-0"
                variants={itemVariants}
              >
                <motion.a
                  href="https://www.linkedin.com/in/jatin-tuteja-933ba1220/"
                  className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/50 text-white flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/JatinTuteja013"
                  className="w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-400/50 text-white flex items-center justify-center hover:bg-purple-500 hover:border-purple-400 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Content */}
            <motion.div variants={itemVariants} className="relative mt-8 lg:mt-0 px-4 md:px-0">
              <div className="relative">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
                  {/* Stat Card 1 */}
                  <motion.div
                    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                    variants={itemVariants}
                  >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg">
                        <Code2 className="text-cyan-400" size={20} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center sm:text-left">50+</h3>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                      Projects Completed
                    </p>
                  </motion.div>

                  {/* Stat Card 2 */}
                  <motion.div
                    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-400/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                    variants={itemVariants}
                  >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg">
                        <TrendingUp className="text-purple-400" size={20} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center sm:text-left">100+</h3>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                      Happy Clients
                    </p>
                  </motion.div>

                  {/* Stat Card 3 */}
                  <motion.div
                    className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all col-span-2"
                    whileHover={{ scale: 1.05, y: -5 }}
                    variants={itemVariants}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg flex-shrink-0">
                        <Mail className="text-blue-400" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          Digital Marketing Expert
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          SEO, SEM, Social Media & Content Marketing
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .animate-shimmer-delayed {
          animation: shimmer 3s linear infinite 0.5s;
        }
      `}</style>
    </section>
  );
}
