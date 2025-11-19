const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-6 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <h2 className="text-cyan-400 font-mono flex items-center gap-3">
            <span className="text-cyan-600">03.</span>
            skills()
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="border border-cyan-950 bg-black/40 p-6"
              >
                <h3 className="text-cyan-400 font-mono mb-4">
                  {category.category.toLowerCase()}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-cyan-600 font-mono text-sm flex items-center gap-2"
                    >
                      <span className="text-green-500">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
