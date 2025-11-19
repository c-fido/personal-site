interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-cyan-950' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {'<portfolio />'}
          </button>
          
          <ul className="flex gap-8 font-mono text-sm">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-cyan-600 hover:text-cyan-400 transition-colors"
              >
                about
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-cyan-600 hover:text-cyan-400 transition-colors"
              >
                projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-cyan-600 hover:text-cyan-400 transition-colors"
              >
                skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-cyan-600 hover:text-cyan-400 transition-colors"
              >
                contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
