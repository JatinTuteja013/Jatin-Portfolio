// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   Code2,
//   Palette,
//   Rocket,
//   Target,
//   TrendingUp,
//   Database,
//   Cloud,
//   Globe,
//   GraduationCap,
//   School,
//   BookOpen,
// } from "lucide-react";
// import { useRef } from "react";

// export default function About() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
//   const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

//   const skills = [
//     { name: "React/Next.js", level: 95, icon: Code2, color: "white" },
//     { name: "UI/UX Design", level: 90, icon: Palette, color: "white" },
//     { name: "Digital Marketing", level: 85, icon: Target, color: "white" },
//     { name: "SEO Optimization", level: 90, icon: TrendingUp, color: "white" },
//     { name: "Database Management", level: 88, icon: Database, color: "white" },
//     { name: "Cloud Services", level: 80, icon: Cloud, color: "white" },
//     { name: "Web Development", level: 95, icon: Globe, color: "white" },
//     { name: "API Development", level: 92, icon: Rocket, color: "white" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   // 🧠 Education data
//   const educationData = [
//     {
//       year: "2024 - 2026",
//       // title: "MSC (Computer Application)",
//       title: "MSC (CA)",
//       subtitle: "SDJ International College, VNSGU",
//       icon: GraduationCap,
//       color: "blue",
//     },
//     {
//       year: "2022 - 2024",
//       // title: "Bachelor of Computer Application",
//       title: "BCA",
//       subtitle: "SDJ International College, VNSGU",
//       icon: School,
//       color: "purple",
    
//     },
//   ];

//   const colors = {
//     cyan: {
//       bg: "from-cyan-500/10 to-blue-500/10",
//       border: "border-cyan-400/30",
//       icon: "text-cyan-400",
//       iconBg: "from-cyan-500/30 to-blue-500/30",
//       number: "from-cyan-400 to-blue-400",
//     },
//     purple: {
//       bg: "from-purple-500/10 to-pink-500/10",
//       border: "border-purple-400/30",
//       icon: "text-purple-400",
//       iconBg: "from-purple-500/30 to-pink-500/30",
//       number: "from-purple-400 to-pink-400",
//     },
//     blue: {
//       bg: "from-blue-500/10 to-cyan-500/10",
//       border: "border-blue-400/30",
//       icon: "text-blue-400",
//       iconBg: "from-blue-500/30 to-cyan-500/30",
//       number: "from-blue-400 to-cyan-400",
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       id="about"
//       className="relative py-5 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//             backgroundSize: "50px 50px",
//           }}
//         ></div>
//       </div>

//       <motion.div
//         style={{ opacity, y }}
//         className="container mx-auto px-6 lg:px-12 relative z-10"
//       >
//         <motion.div
//           className="max-w-6xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerVariants}
//         >
//           {/* Header */}
//           <motion.div className="text-center mb-16" variants={itemVariants}>
//             <motion.h2
//               className="text-4xl lg:text-6xl font-bold text-white mb-4 relative"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               About Me
//               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
//             </motion.h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               I’m a passionate <strong>Web Developer</strong> and{" "}
//               <strong>Digital Marketing Strategist</strong> based in Surat,
//               specializing in building fast, SEO-optimized, and visually
//               stunning web applications.
//             </p>
//             <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
//               Specializing in React, Next.js, TypeScript, and modern web
//               technologies combined with proven digital marketing strategies.
//             </p>
//           </motion.div>

//           {/* Content Grid */}
//           <div className="grid lg:grid-cols-2 gap-12 mb-16">
//             {/* Left Side */}
//             <motion.div variants={itemVariants} className="space-y-6">
//               <motion.div
//                 className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 p-8 rounded-2xl"
//                 whileHover={{
//                   scale: 1.02,
//                   borderColor: "rgba(6,182,212,0.5)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
//                   Full-Stack Web Developer
//                 </h3>
//                 <p className="text-gray-400 leading-relaxed">
//                   As a Full-Stack Developer, I focus on crafting seamless
//                   digital experiences using{" "}
//                   <strong className="text-cyan-400">React</strong>,{" "}
//                   <strong className="text-blue-400">Next.js</strong>, and{" "}
//                   <strong className="text-purple-400">Node.js</strong>.
//                 </p>
//               </motion.div>

//               <motion.div
//                 className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-400/30 p-8 rounded-2xl"
//                 whileHover={{
//                   scale: 1.02,
//                   borderColor: "rgba(168,85,247,0.5)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
//                   Digital Marketing & SEO Expert
//                 </h3>
//                 <p className="text-gray-400 leading-relaxed">
//                   As a{" "}
//                   <strong className="text-purple-400">
//                     Digital Marketing
//                   </strong>{" "}
//                   and{" "}
//                   <strong className="text-purple-400">SEO Expert</strong>, I
//                   help brands build a strong online presence.
//                 </p>
//               </motion.div>
//             </motion.div>

//             {/* Right Side - Education Timeline */}
//             <section className="relative md:py-0 py-10">
//               {/* <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                 Education Timeline
//               </h2> */}
//               <div className="relative">
//                 <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-cyan-500/40"></div>

//                 <div className="md:space-y-5 space-y-20">
//                   {educationData.map((item, index) => {
//                     const color = colors[item.color as keyof typeof colors];
//                     const Icon = item.icon;

//                     return (
//                       <motion.div
//                         key={item.title}
//                         variants={itemVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className={`relative flex flex-col md:flex-row items-center ${
//                           index % 2 === 0
//                             ? "md:justify-start"
//                             : "md:justify-end"
//                         }`}
//                       >
//                         <motion.div
//                           whileHover={{ scale: 1.05 }}
//                           className={`bg-gradient-to-br ${color.bg} backdrop-blur-md border ${color.border} p-5 rounded-2xl md:w-5/12 ${
//                             index % 2 === 0
//                               ? "md:mr-auto md:text-right"
//                               : "md:ml-auto md:text-left"
//                           }`}
//                         >
//                           <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
//                             {/* <div
//                               className={`p-2 bg-gradient-to-br ${color.iconBg} rounded-lg`}
//                             >
//                               <Icon className={`${color.icon}`} size={22} />
//                             </div> */}
//                             <div className={`lg:hidden block p-2 bg-gradient-to-br ${color.iconBg} rounded-lg`}>
//                               <Icon className={`${color.icon}`} size={22} />
//                             </div>
//                             <h3
//                               className={`text-xl font-bold bg-gradient-to-r ${color.number} bg-clip-text text-transparent`}
//                             >
//                               {item.title}
//                             </h3>
//                           </div>
//                           <p className="text-gray-300 text-start font-medium">
//                             {item.subtitle}
//                           </p>
//                           <p className="text-sm text-gray-400 text-start mt-2">
//                             {item.year}
//                           </p>
//                         </motion.div>

//                         <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-gray-950"></div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Skills Section (unchanged) */}
//           <motion.div variants={itemVariants}>
//             <motion.h3
//               className="text-3xl font-bold text-white text-center mb-12"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//             >
//               Technical Skills & Digital Marketing Expertise
//             </motion.h3>

//             <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
//               Here are my core competencies in web development, digital
//               marketing, and SEO optimization that I bring to every project.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {skills.map((skill, index) => {
//                 const SkillIcon = skill.icon;
//                 return (
//                   <motion.div
//                     key={skill.name}
//                     className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl group hover:border-white/30 transition-all"
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{
//                       scale: 1.02,
//                       boxShadow: "0 20px 60px rgba(255,255,255,0.1)",
//                     }}
//                   >
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center gap-3">
//                         <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
//                           <SkillIcon size={20} className="text-white" />
//                         </div>
//                         <span className="font-semibold text-white">
//                           {skill.name}
//                         </span>
//                       </div>
//                       <span className="text-sm font-medium text-gray-400">
//                         {skill.level}%
//                       </span>
//                     </div>

//                     <div className="w-full bg-gray-900 rounded-full h-2.5 overflow-hidden border border-white/10">
//                       <motion.div
//                         className="h-2.5 bg-gradient-to-r from-white via-gray-300 to-white rounded-full relative overflow-hidden"
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         viewport={{ once: true }}
//                         transition={{
//                           duration: 1.5,
//                           ease: "easeOut",
//                           delay: index * 0.1,
//                         }}
//                       >
//                         <motion.div
//                           className="absolute inset-0 bg-white/50"
//                           animate={{ x: ["-100%", "100%"] }}
//                           transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             ease: "linear",
//                           }}
//                         />
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }




"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
  Target,
  TrendingUp,
  Database,
  Cloud,
  Globe,
} from "lucide-react";
import { useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      title: "Frontend Developer",
      company: "YASH WORLD PRODUCTS PVT LTD - SURAT",
      duration: "June 2024 – March 2025",
      description: `Built dynamic, responsive web applications using React.js and its component-based architecture.
Gained basic knowledge of Next.js, including routing, API handling, and project structure.
Contributed to live projects by implementing front-end features and collaborating with cross-functional teams to support seamless deployment and real-time updates.
Enhanced skills in modern JavaScript frameworks and applied them to deliver user-friendly web applications.`,
    },
    {
      title: "Digital Marketing Intern",
      company: "Electro Global Solutions - JAIPUR",
      duration: "June 2025 – September 2025",
      description: `Worked as part of the SEO team, managing blog creation, optimization, and publishing to enhance organic reach.
Conducted keyword research, on-page SEO, and content structuring to make blogs engaging and search engine–friendly.
Collaborated with the team on content strategy, link-building activities, and performance tracking using tools like Google Analytics and Search Console.
Strengthened expertise in SEO strategy, content marketing, and digital growth techniques while contributing to the company’s online presence.`,
    },
    
  ];

  const skills = [
    { name: "React/Next.js", level: 95, icon: Code2 },
    { name: "UI/UX Design", level: 90, icon: Palette },
    { name: "Digital Marketing", level: 85, icon: Target },
    { name: "SEO Optimization", level: 90, icon: TrendingUp },
    { name: "Database Management", level: 88, icon: Database },
    { name: "Cloud Services", level: 80, icon: Cloud },
    { name: "Web Development", level: 95, icon: Globe },
    { name: "API Development", level: 92, icon: Rocket },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-5 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Background Grid */}
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

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-6 lg:px-12 relative z-10"
      >
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
              transition={{ duration: 0.8 }}
            >
              About Me
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I’m a passionate <strong>Web Developer</strong> and{" "}
              <strong>Digital Marketing Strategist</strong> based in Surat,
              specializing in building fast, SEO-optimized, and visually stunning
              web applications.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left side */}
            {/* <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 p-8 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Full-Stack Web Developer
                </h3>
                <p className="text-gray-400">
                  Crafting seamless digital experiences using{" "}
                  <strong className="text-cyan-400">React</strong>,{" "}
                  <strong className="text-blue-400">Next.js</strong>, and{" "}
                  <strong className="text-purple-400">Node.js</strong>.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-400/30 p-8 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Digital Marketing & SEO Expert
                </h3>
                <p className="text-gray-400">
                  Helping brands grow through{" "}
                  <strong className="text-purple-400">SEO</strong> and{" "}
                  <strong className="text-purple-400">strategic marketing</strong>.
                </p>
              </motion.div>
            </motion.div> */}

<motion.div variants={itemVariants} className="space-y-6">
  {/* 🌐 Full-Stack Web Developer Card */}
  <motion.div
    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 p-8 rounded-2xl"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
      Full-Stack Web Developer
    </h3>

    <p className="text-gray-400 leading-relaxed mb-3">
      Passionate about crafting responsive, high-performance web applications
      using <strong className="text-cyan-400">React</strong>,{" "}
      <strong className="text-blue-400">Next.js</strong>, and{" "}
      <strong className="text-purple-400">Node.js</strong>. Focused on
      delivering seamless user experiences backed by efficient backend logic.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Skilled in integrating APIs, managing databases like{" "}
      <strong className="text-cyan-300">MongoDB</strong>, and optimizing
      websites for speed and SEO. I value clean code, modern design, and scalable
      solutions.
    </p>
  </motion.div>

  {/* 🚀 Digital Marketing & SEO Expert Card */}
  <motion.div
    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-400/30 p-8 rounded-2xl"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
      Digital Marketing & SEO Expert
    </h3>

    <p className="text-gray-400 leading-relaxed mb-3">
      Helping brands boost their online visibility through{" "}
      <strong className="text-pink-400">data-driven SEO</strong> and{" "}
      <strong className="text-purple-400">content strategies</strong>. I focus on
      improving rankings, traffic, and user engagement with precision.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Experienced in{" "}
      <strong className="text-purple-300">on-page optimization</strong>,{" "}
      <strong className="text-purple-300">technical SEO</strong>, and{" "}
      <strong className="text-pink-300">Google Analytics</strong>. My goal is to
      create meaningful digital impact that converts visitors into loyal users.
    </p>
  </motion.div>
</motion.div>

            {/* Right side — Work Experience */}
            <motion.section
              className="relative md:py-0 py-10"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Work Experience
              </h2>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-cyan-500/40"></div>

                <div className="md:space-y-5 space-y-20">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      className={`relative flex flex-col md:flex-row items-center ${
                        index % 2 === 0
                          ? "md:justify-start"
                          : "md:justify-end"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-cyan-400/30 p-5 rounded-2xl md:w-5/12 ${
                          index % 2 === 0
                            ? "md:mr-auto md:text-right"
                            : "md:ml-auto md:text-left"
                        }`}
                      >
                        <h3 className="text-xl text-left font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          {exp.title}
                        </h3>
                        <p className="text-gray-300 text-left font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-left text-gray-400 mt-1">
                          {exp.duration}
                        </p>
                        <p className="text-gray-400 text-left mt-2 line-clamp-2">
                          {exp.description}
                        </p>
                        {/* <button
                          onClick={() => setSelectedExp(exp)}
                          className="mt-2 text-cyan-400 text-sm hover:text-cyan-300"
                        >
                          Read More →
                        </button> */}
                        <div className="flex justify-start mt-2">
  <button
    onClick={() => setSelectedExp(exp)}
    className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-all duration-200 flex items-center gap-1"
  >
    <span>Read More</span>
    <span className="text-lg leading-none">→</span>
  </button>
</div>
                      </motion.div>

                      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-gray-950"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Technical Skills & Marketing Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl group hover:border-white/30 transition-all"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20">
                          <Icon size={20} className="text-white" />
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
                        className="h-2.5 bg-gradient-to-r from-white via-gray-300 to-white rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modal Popup */}
      {selectedExp && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSelectedExp(null)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl max-w-lg w-11/12 border border-cyan-400/30 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedExp.title}
            </h3>
            <p className="text-gray-400 text-sm">{selectedExp.company}</p>
            <p className="text-gray-500 text-xs mb-4">{selectedExp.duration}</p>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {selectedExp.description}
            </p>
            <button
              onClick={() => setSelectedExp(null)}
              className="mt-6 px-5 py-2 bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition-all duration-200"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
