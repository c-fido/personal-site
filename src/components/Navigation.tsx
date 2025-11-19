import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const { lang, setLanguage, t } = useContext(LanguageContext);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLang = () => setLanguage(lang === 'en' ? 'de' : 'en');

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
            {t('nav.brand')}
          </button>
          
          <ul className="flex gap-8 font-mono text-sm">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-cyan-600 hover:text-cyan-400 transition-colors"
              >
                {t('nav.about')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-cyan-600 hover:text-cyan-400 transition-colors"
              >
                {t('nav.projects')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-cyan-600 hover:text-cyan-400 transition-colors"
              >
                {t('nav.skills')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-cyan-600 hover:text-cyan-400 transition-colors"
              >
                {t('nav.contact')}
              </button>
            </li>
            <li>
              <button
                onClick={toggleLang}
                className="text-cyan-600 hover:text-cyan-400 transition-colors"
                aria-label="Toggle language"
              >
                {t('nav.german')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
