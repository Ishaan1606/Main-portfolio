import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's build something together.</h2>
            <p className="text-zinc-400 text-lg mb-10">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:IshaanKumar059@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Say Hello
              </a>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
                <a 
                  href="https://github.com/Ishaan1606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ishaankumar1606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center justify-center">
              <p className="text-sm text-zinc-500 mb-2">Or email me directly at</p>
              <a 
                href="mailto:IshaanKumar059@gmail.com" 
                className="text-lg md:text-xl font-medium text-white hover:text-blue-400 transition-colors"
              >
                IshaanKumar059@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
