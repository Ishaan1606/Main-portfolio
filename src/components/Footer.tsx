const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 text-center text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {currentYear} Ishaan Kumar. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Ishaan1606" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/ishaankumar1606" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:ishaankumar059@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
