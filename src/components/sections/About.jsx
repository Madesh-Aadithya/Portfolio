function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          About Me
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Building my skills through real projects.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-white/60 sm:text-lg">
          <p>
            I'm a developer interested in DevOps, cloud infrastructure,
            Linux, automation, and backend technologies.
          </p>

          <p>
            I enjoy learning by building practical projects and
            understanding how applications work from development to
            deployment.
          </p>

          <p>
            This portfolio documents my projects, technical skills,
            certifications, and the technologies I'm learning.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;