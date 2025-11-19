import { Mail, Github, Linkedin, BookOpen } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative py-6 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <h2 className="text-cyan-400 font-mono flex items-center gap-3">
            <span className="text-cyan-600">04.</span>
            contact()
          </h2>

          <div className="border border-cyan-950 bg-black/40 p-8">
            <div className="space-y-6">
              <p className="text-cyan-600 font-mono">
                {'>'} Available for new opportunities! If you have a question, or just have a book recommendation, feel free to send me an email or connect via social media.
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="mailto:fedolficarlo@gmail.com"
                  className="flex items-center gap-3 text-cyan-400 hover:text-green-400 transition-colors font-mono"
                >
                  <Mail size={20} />
                  fedolficarlo@gmail.com
                </a>

                <div className="flex gap-6 pt-2">
                  <a
                    href="https://github.com/c-fido"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/giancarlo-fedolfi-652026306/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://goodreads.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-400 transition-colors"
                    aria-label="Goodreads"
                  >
                    <BookOpen size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
