import { Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-cyan-600">
            <Terminal size={24} />
            <span className="font-mono text-sm">~/portfolio</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-cyan-400 font-mono">
              <span className="text-cyan-600">{'>'}</span> Hello, I'm{' '}
              <span className="text-green-400">Giancarlo Fedolfi</span>
            </h1>

            <p className="text-cyan-600 font-mono max-w-2xl">
              Full-stack developer crafting digital experiences with clean code and modern technologies.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-transparent border border-cyan-600 text-cyan-400 font-mono text-sm hover:bg-cyan-950/30 transition-all"
            >
              view_projects()
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-cyan-600 text-black font-mono text-sm hover:bg-cyan-500 transition-all"
            >
              get_in_touch()
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
