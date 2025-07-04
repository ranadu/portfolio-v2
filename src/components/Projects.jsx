
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Settings, Code, Brain, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chatbot",
      category: "Control Systems",
      icon: <Settings className="w-6 h-6" />,
      description: "Developed a sophisticated AI chatbot with natural language processing capabilities, enabling seamless interactions and personalized user experiences.",
      image: "AI chatbot interface showcasing conversation flow and user interactions",
      technologies: ["Python", "TensorFlow", "Natural Language Processing", "Flask"],
      demoUrl: "https://ai-chatbot-cyan-alpha.vercel.app/",
      githubUrl: "https://github.com/ranadu/AI-chatbot.git"
    },
    {
      id: 2,
      title: "Aerospace Simulation Platform",
      category: "Aerospace Simulations",
      icon: <Plane className="w-6 h-6" />,
      description: "Built a comprehensive 6-DOF aircraft simulation environment with high-fidelity aerodynamic modeling, environmental effects, and real-time visualization for flight testing scenarios.",
      image: "Comprehensive aerospace simulation platform with 3D aircraft modeling",
      technologies: ["Python", "NumPy", "OpenGL", "Physics Engine"],
      demoUrl: "https://aerospace-simulation-platform.vercel.app/",
      githubUrl: "https://github.com/ranadu/aerospace-Simulation-platform.git"
    },
    {
      id: 3,
      title: "Machine Learning Flight Predictor",
      category: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      description: "Implemented neural networks to predict aircraft performance parameters and optimize flight paths using historical flight data and real-time atmospheric conditions.",
      image: "Machine learning interface showing flight prediction algorithms and data visualization",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      demoUrl: "https://flight-predictor-wak8.onrender.com",
      githubUrl: "https://github.com/ranadu/Flight-predictor.git"
    },
    {
      id: 4,
      title: "Rocket Trajectory Optimizer",
      category: "Coding",
      icon: <Code className="w-6 h-6" />,
      description: "Created an optimization algorithm for rocket launch trajectories considering atmospheric drag, gravitational effects, and fuel consumption constraints.",
      image: "Rocket trajectory optimization software with 3D trajectory visualization",
      technologies: ["Python", "SciPy", "Matplotlib", "Optimization"],
      demoUrl: "https://your-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/rocket-optimizer"
    },
    {
      id: 5,
      title: "Satellite Attitude Control",
      category: "Control Systems",
      icon: <Settings className="w-6 h-6" />,
      description: "Designed and implemented a three-axis attitude control system for small satellites using reaction wheels and magnetorquers with Kalman filtering for state estimation.",
      image: "Satellite attitude control system interface with 3D satellite orientation display",
      technologies: ["MATLAB", "Control Theory", "Kalman Filters", "Embedded Systems"],
      demoUrl: "https://your-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/satellite-control"
    },
    {
      id: 6,
      title: "Computational Fluid Dynamics Solver",
      category: "Aerospace Simulations",
      icon: <Plane className="w-6 h-6" />,
      description: "Developed a custom CFD solver for analyzing airflow around aircraft components, featuring mesh generation, boundary condition handling, and parallel processing capabilities.",
      image: "CFD simulation showing airflow patterns around aircraft wing with pressure visualization",
      technologies: ["C++", "OpenMPI", "Mesh Generation", "Numerical Methods"],
      demoUrl: "https://your-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/cfd-solver"
    }
  ];

  const categories = ["All", "Control Systems", "Coding", "Machine Learning", "Aerospace Simulations"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative aerospace engineering solutions and cutting-edge technology implementations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img  
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  alt={`${project.title} project screenshot`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="text-purple-400">
                    {project.icon}
                  </div>
                  <span className="text-sm font-medium text-white bg-black/30 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
