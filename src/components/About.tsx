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

          {/* Render about paragraphs (support either array or legacy single-string) */}
          <div className="text-cyan-600 font-mono max-w-2xl space-y-4">
            {(() => {
              const p = t('about.paragraphs');
              if (Array.isArray(p)) {
                return p.map((txt: string, i: number) => (
                  <p key={i}>{txt}</p>
                ));
              }
              // fallback to legacy single string
              const single = t('about.body');
              return <p>{single}</p>;
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
