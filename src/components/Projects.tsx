import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "SensAI – AI Integrated Learning Platform",
    description: "An AI-powered learning platform that helps students improve career readiness through AI-based resume review, interview simulations, and personalized recommendations.",
    image: "https://i.postimg.cc/nLDb4zsx/sensai.png",
    tags: ["React.js", "Node.js", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://sensaii-vwfu.vercel.app/",
    githubUrl: "https://github.com/Ishaan1606/SensAI",
    status: "Completed"
  },
  {
    title: "Finance Dashboard",
    description: "Developed a modern finance dashboard with data visualization, transaction tracking, and insights using React.js and Context API Focused on scalable components, responsive design, and efficient state handling.",
    image: "https://i.postimg.cc/XJnMNrmw/finance-dashboard.png",
    tags: ["React.js", "Java Script", "CSS",],
    liveUrl: "https://finance-dashboard-eight-rust.vercel.app/",
    githubUrl: "https://github.com/Ishaan1606/finance-dashboard",
    status: "Completed"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A selection of my recent work, focusing on modern web technologies and AI integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {project.status === "Upcoming Project" && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-zinc-300">
                    Upcoming
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  {project.liveUrl !== "#" && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
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
