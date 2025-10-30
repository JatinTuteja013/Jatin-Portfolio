"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 relative">
                Get In Touch
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let’s collaborate to build your next web development or digital marketing project that truly stands out.
              </p>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
              Looking to boost your brand visibility or create a modern website? Reach out today for a free consultation and let’s bring your ideas to life.
              </p>
            </motion.div>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 p-6 rounded-2xl mb-8 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={24} />
                <p>Thank you for reaching out! I’ve received your message and will get back to you within 24 hours.</p>
              </motion.div>
            )}

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                  I’m open to freelance collaborations, internship or full-time roles, and creative discussions about web development and digital marketing strategies.
                  </p>
                </div>

                {/* Contact Items */}
                <div className="space-y-6">
                  <motion.a
                    href="mailto:jatintuteja013@gmail.com"
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-colors">
                      <Mail size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">jatintuteja013@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+91 8469428543"
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl hover:border-purple-400/50 hover:bg-purple-500/20 transition-all group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-colors">
                      <Phone size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">+91 8469428543</p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-xl group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-colors">
                      <MapPin size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">Available Worldwide</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <p className="text-gray-400 mb-4">Connect with me on:</p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://www.linkedin.com/in/jatin-tuteja-933ba1220/"
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="https://github.com/JatinTuteja013"
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all"
                    placeholder="Ayush Yadav"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all"
                    placeholder="ayush@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all"
                    placeholder="Web Development Project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
  );
}

