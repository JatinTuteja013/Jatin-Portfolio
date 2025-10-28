"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Code2, Globe, Smartphone, ShoppingCart, TrendingUp, Search, BarChart3 } from "lucide-react";
import { useRef } from "react";
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: typeof Code2;
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      description: "Full-stack e-commerce platform with payment integration",
      longDescription: "Built a modern e-commerce solution using Next.js with features like cart management, payment processing, order tracking, and admin dashboard. Implemented SEO optimization and performance enhancements.",
      tags: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS", "SEO"],
      icon: ShoppingCart,
      image: "/project-ecommerce.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Digital Marketing Dashboard",
      description: "Analytics dashboard for digital marketing metrics",
      longDescription: "Created an intuitive marketing dashboard displaying KPIs, conversion rates, traffic sources, and campaign performance. Features real-time data updates and comprehensive reporting tools for marketing teams.",
      tags: ["React", "Chart.js", "REST API", "CSS3", "Data Visualization"],
      icon: BarChart3,
      image: "/project-dashboard.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "SEO Optimized Business Website",
      description: "Business website with advanced SEO and performance optimization",
      longDescription: "Developed a lightning-fast business website with Google Lighthouse score of 95+. Implemented technical SEO best practices, structured data markup, and mobile-first responsive design for optimal search rankings.",
      tags: ["Next.js", "SEO", "Performance", "Accessibility", "PWA"],
      icon: Search,
      image: "/project-seo.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "React Mobile App",
      description: "Cross-platform mobile application for task management",
      longDescription: "Built a responsive mobile-first application using React with PWA capabilities. Features include offline mode, push notifications, and native-like user experience across all devices.",
      tags: ["React", "PWA", "Mobile", "Responsive", "Firebase"],
      icon: Smartphone,
      image: "/project-mobile.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section ref={ref} id="projects" className="relative py-20 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <motion.div style={{ opacity, y }} className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 relative">
                Featured Web Development Projects
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Showcasing my expertise in web development, digital marketing, and SEO optimization
              </p>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                From e-commerce platforms to marketing dashboards, each project demonstrates technical skills and strategic thinking
              </p>
            </motion.div>

            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {projects.slice(0, 2).map((project, index) => {
                const gradients = index === 0 
                  ? { bg: "from-cyan-500/10 to-blue-500/10", border: "border-cyan-400/30", iconBg: "from-cyan-500/20 to-blue-500/20", hover: "group-hover:bg-cyan-500/20" }
                  : { bg: "from-purple-500/10 to-pink-500/10", border: "border-purple-400/30", iconBg: "from-purple-500/20 to-pink-500/20", hover: "group-hover:bg-purple-500/20" };
                
                return (
                  <motion.div
                    key={project.id}
                    className={`bg-gradient-to-br ${gradients.bg} backdrop-blur-md border ${gradients.border} rounded-2xl overflow-hidden hover:border-white/50 transition-all duration-300 group`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Project Image Placeholder */}
                    <div className={`h-64 bg-gradient-to-br ${gradients.iconBg} flex items-center justify-center relative overflow-hidden`}>
                      <project.icon size={64} className="text-white/30" />
                      <div className={`absolute inset-0 bg-white/5 ${gradients.hover} transition-all`}></div>
                    </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400">{project.description}</p>
                      </div>
                      <Globe className="text-white/30 flex-shrink-0 ml-4" size={24} />
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">{project.longDescription}</p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/10 hover:border-white/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'} text-white rounded-full font-semibold hover:shadow-2xl ${index === 0 ? 'hover:shadow-cyan-500/50' : 'hover:shadow-purple-500/50'} transition-all text-sm`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        View Live
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className={`flex items-center gap-2 px-6 py-3 bg-white/10 border ${index === 0 ? 'border-cyan-400/30' : 'border-purple-400/30'} text-white rounded-full font-semibold ${index === 0 ? 'hover:bg-cyan-500/20' : 'hover:bg-purple-500/20'} transition-all text-sm`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code2 size={18} />
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
              })}
            </div>

            {/* Other Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.slice(2).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-48 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative overflow-hidden">
                    <project.icon size={48} className="text-white/20" />
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <project.icon className="text-white/30 flex-shrink-0 ml-4" size={20} />
                    </div>

                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-semibold text-xs hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={14} />
                        Live
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-full font-semibold text-xs hover:bg-white/20 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code2 size={14} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-400 mb-4">Looking to build your next web project?</p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp size={20} />
                Let's Work Together
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
  );
}

