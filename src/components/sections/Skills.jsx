function Skills() {
  const skills = [
    "Linux",
    "Git & GitHub",
    "Docker",
    "Nginx",
    "Networking",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Cloud",
  ];

  return (
    <section
      id="skills"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Skills
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Technologies I work with.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center transition hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="font-medium">
                {skill}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;