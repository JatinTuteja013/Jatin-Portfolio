"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Palette, Rocket, Target, TrendingUp, Database, Cloud, Globe } from "lucide-react";
import { useRef } from "react";
export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const skills = [
    { name: "React/Next.js", level: 95, icon: Code2, color: "white" },
    { name: "UI/UX Design", level: 90, icon: Palette, color: "white" },
    { name: "Digital Marketing", level: 85, icon: Target, color: "white" },
    { name: "SEO Optimization", level: 90, icon: TrendingUp, color: "white" },
    { name: "Database Management", level: 88, icon: Database, color: "white" },
    { name: "Cloud Services", level: 80, icon: Cloud, color: "white" },
    { name: "Web Development", level: 95, icon: Globe, color: "white" },
    { name: "API Development", level: 92, icon: Rocket, color: "white" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} id="about" className="relative py-20 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <motion.div style={{ opacity, y }} className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-white mb-4 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About Me
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            </motion.h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I’m a passionate <strong> Web Developer</strong> and <strong>Digital Marketing Strategist</strong> based in Surat, specializing in building fast, SEO-optimized, and visually stunning web applications. With hands-on experience in React, Next.js, and TypeScript, I blend design, technology, and marketing strategies to create web experiences that convert visitors into loyal customers.
              </p>
              <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
                Specializing in React, Next.js, TypeScript, and modern web technologies combined with proven digital marketing strategies.
              </p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Left Side - Description */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.div
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 p-8 rounded-2xl"
                  whileHover={{ scale: 1.02, borderColor: "rgba(6,182,212,0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    Full-Stack Web Developer
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                  As a Full-Stack Developer, I focus on crafting seamless digital experiences using <strong className="text-cyan-400"> React </strong>, <strong className="text-blue-400"> Next.js </strong>, and <strong className="text-purple-400"> Node.js </strong>. My expertise lies in creating responsive, high-performance web applications optimized for both user experience (UX) and search engine visibility (SEO). Every line of code I write aligns with clean architecture and modern best practices to deliver exceptional web performance.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-400/30 p-8 rounded-2xl"
                  whileHover={{ scale: 1.02, borderColor: "rgba(168,85,247,0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    Digital Marketing & SEO Expert
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                  As a <strong className="text-purple-400">Digital Marketing</strong> and <strong className="text-purple-400">SEO Expert</strong>, I help brands build a strong online presence through strategic marketing campaigns. From SEO optimization and content strategy to social media growth and Google Ads, I design marketing funnels that attract, engage, and convert. My focus is on measurable success — improving organic rankings, boosting traffic, and increasing ROI.
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Side - Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                {[
                  { number: "50+", label: "Projects", icon: Code2, color: "cyan" },
                  { number: "100+", label: "Happy Clients", icon: Target, color: "purple" },
                  { number: "5+", label: "Years Experience", icon: Rocket, color: "blue" },
                  { number: "100%", label: "Client Satisfaction", icon: TrendingUp, color: "pink" },
                ].map((stat) => {
                  const colors = {
                    cyan: { bg: "from-cyan-500/10 to-blue-500/10", border: "border-cyan-400/30", icon: "text-cyan-400", iconBg: "from-cyan-500/30 to-blue-500/30", number: "from-cyan-400 to-blue-400", shadow: "shadow-cyan-500/20" },
                    purple: { bg: "from-purple-500/10 to-pink-500/10", border: "border-purple-400/30", icon: "text-purple-400", iconBg: "from-purple-500/30 to-pink-500/30", number: "from-purple-400 to-pink-400", shadow: "shadow-purple-500/20" },
                    blue: { bg: "from-blue-500/10 to-cyan-500/10", border: "border-blue-400/30", icon: "text-blue-400", iconBg: "from-blue-500/30 to-cyan-500/30", number: "from-blue-400 to-cyan-400", shadow: "shadow-blue-500/20" },
                    pink: { bg: "from-pink-500/10 to-purple-500/10", border: "border-pink-400/30", icon: "text-pink-400", iconBg: "from-pink-500/30 to-purple-500/30", number: "from-pink-400 to-purple-400", shadow: "shadow-pink-500/20" },
                  };
                  const colorScheme = colors[stat.color as keyof typeof colors];
                  
                  return (
                    <motion.div
                      key={stat.label}
                      className={`bg-gradient-to-br ${colorScheme.bg} backdrop-blur-md border ${colorScheme.border} p-6 rounded-2xl hover:shadow-2xl hover:${colorScheme.shadow} transition-all`}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 bg-gradient-to-br ${colorScheme.iconBg} rounded-lg`}>
                          <stat.icon className={colorScheme.icon} size={20} />
                        </div>
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${colorScheme.number} bg-clip-text text-transparent`}>{stat.number}</h3>
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-3xl font-bold text-white text-center mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Technical Skills & Digital Marketing Expertise
              </motion.h3>
              <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                Here are my core competencies in web development, digital marketing, and SEO optimization that I bring to every project.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl group hover:border-white/30 transition-all"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(255,255,255,0.1)" }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                            <SkillIcon size={20} className="text-white" />
                          </div>
                          <span className="font-semibold text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-900 rounded-full h-2.5 overflow-hidden border border-white/10">
                        <motion.div
                          className="h-2.5 bg-gradient-to-r from-white via-gray-300 to-white rounded-full relative overflow-hidden"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/50"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
  );
}
