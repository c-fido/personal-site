import { useState, useEffect, useContext } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <AppInner scrolled={scrolled} />
    </LanguageProvider>
  );
}

function AppInner({ scrolled }: { scrolled: boolean }) {
  const { t } = useContext(LanguageContext);

  return (
    <div className="min-h-screen bg-black text-cyan-400">
      {/* Background grid effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />
      
      <Navigation scrolled={scrolled} />
      
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="relative border-t border-cyan-950 bg-black py-8">
        <div className="container mx-auto px-6 text-center text-cyan-700">
          <p className="font-mono text-sm">{t('footer.copy')}</p>
        </div>
      </footer>
    </div>
  );
}
