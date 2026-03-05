import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I am a final-year B.Tech Information Technology student with a strong passion for building 
                exceptional digital experiences. As a frontend-focused developer, I specialize in creating 
                responsive, accessible, and performant web applications.
              </p>
              <p>
                My core expertise lies in the modern JavaScript ecosystem, particularly <strong className="text-white font-medium">React.js, JavaScript, and TypeScript</strong>. 
                While I thrive on the frontend, I also have solid full-stack exposure, working with <strong className="text-white font-medium">Node.js and PostgreSQL</strong> to build end-to-end solutions.
              </p>
              <p>
                Recently, I've been deeply interested in the intersection of web development and artificial intelligence, 
                building AI-powered applications that solve real-world problems and enhance user experiences.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/workspace/800/800')] opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
              <div className="relative z-10">
                <div className="text-6xl font-display font-bold text-white mb-2">IT</div>
                <div className="text-xl text-zinc-400">Undergrad Student</div>
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    Frontend Engineering
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    Full-Stack Exposure
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    AI Integration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
