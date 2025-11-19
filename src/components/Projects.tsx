import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A real-time collaboration platform built with React and WebSocket technology.',
    tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'E-commerce platform with advanced filtering and payment integration.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'AI-powered content generation tool with natural language processing.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-6 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <h2 className="text-cyan-400 font-mono flex items-center gap-3">
            <span className="text-cyan-600">02.</span>
            projects()
          </h2>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-cyan-950 bg-black/40 p-6 hover:border-cyan-800 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-cyan-400 font-mono group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-cyan-600 hover:text-cyan-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-cyan-600 hover:text-cyan-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-cyan-600 font-mono text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-950/50 border border-cyan-900 text-cyan-500 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
