import { motion } from 'motion/react';
import { Code2, Terminal, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Node.js", "Express.js"]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MYSQL"]
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "GitHub", "Vercel", "OpenAI API"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Arsenal</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:bg-zinc-800/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all mb-6">
                {category.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 text-sm bg-black/40 border border-white/5 rounded-md text-zinc-400 group-hover:border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
