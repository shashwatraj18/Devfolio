import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in React, Node.js, and modern web technologies'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building fast, scalable, and efficient applications'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communication and project management skills'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating
            digital solutions that drive business growth and user satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-6">
                Started as a computer science graduate with a passion for solving complex problems.
                Over the years, I've developed expertise in both frontend and backend technologies,
                with a keen eye for design and user experience.
              </p>
              <p className="text-gray-300">
                I believe in writing clean, maintainable code and creating applications that not
                only work flawlessly but also provide exceptional user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <highlight.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
