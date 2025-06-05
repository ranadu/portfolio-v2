
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Brain, Rocket } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "MATLAB", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "R", level: 75 }
      ]
    },
    {
      title: "Aerospace Tools",
      icon: <Rocket className="w-6 h-6" />,
      skills: [
        { name: "Simulink", level: 95 },
        { name: "ANSYS", level: 85 },
        { name: "SolidWorks", level: 80 },
        { name: "X-Plane", level: 75 },
        { name: "STK", level: 70 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "Keras", level: 85 },
        { name: "OpenCV", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across aerospace engineering, programming, and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-purple-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-orbitron font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="skill-bar h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-orbitron font-semibold text-white mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "FAA Private Pilot License",
              "MATLAB Certified Professional",
              "AWS Cloud Practitioner"
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 rounded-xl"
              >
                <span className="text-gray-300 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
