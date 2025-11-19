import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export function About() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="about" className="relative py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <h2 className="text-cyan-400 font-mono flex items-center gap-3">
            <span className="text-cyan-600">01.</span>
            {t('about.heading')}
          </h2>

          <p className="text-cyan-600 font-mono max-w-2xl">{t('about.body')}</p>
        </div>
      </div>
    </section>
  );
}
