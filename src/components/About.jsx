
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Award } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "B. Eng. Aerospace Engineering, Toronto Metropolitan University"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission",
      description: "Advancing aerospace technology through innovation"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Committed to precision and cutting-edge solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate aerospace engineer with expertise in control systems and advanced simulations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-semibold text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With a deep passion for aerospace engineering and cutting-edge technology, 
                I specialize in developing sophisticated control systems, implementing machine 
                learning algorithms, and creating high-fidelity aerospace simulations. My work 
                bridges the gap between theoretical aerospace principles and practical, 
                real-world applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm driven by the challenge of solving complex engineering problems and 
                contributing to the advancement of aerospace technology. My goal is to join 
                leading aerospace companies to work on next-generation 
                aircraft and space exploration systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <img  
                className="w-full h-80 object-cover rounded-2xl glass-card"
                alt="Aerospace engineer working on advanced control systems"
               src="https://images.unsplash.com/photo-1677104272554-12ca73130b22" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>

            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 rounded-xl flex items-center space-x-4"
                >
                  <div className="text-purple-400">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{achievement.title}</h4>
                    <p className="text-sm text-gray-300">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
