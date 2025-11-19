export function About() {
  return (
    <section id="about" className="relative py-6 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-cyan-400 font-mono flex items-center gap-3">
            <span className="text-cyan-600">01.</span>
            about_me()
          </h2>

          <div className="border border-cyan-950 bg-black/40 p-8">
            <div className="space-y-4 text-cyan-600 font-mono text-sm leading-relaxed">
              <p>
                {'>'} Junior at Wesleyan Univerisity studying Computer Science and German. Member of the varsity track and field team, where I achieved All-New England Honors.
              </p>
              <p>
                {'>'} When I'm not coding, you can find me running, hiking, reading, or playing video games! I'm a big fantasy fan, so you can always catch me reading a new book.
              </p>
              <p>
                {'>'} I love coding new things and learning as much as I can! Always open to new opportunities and conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
