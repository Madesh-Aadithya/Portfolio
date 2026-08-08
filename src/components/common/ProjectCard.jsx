function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        <span className="text-sm text-white/40">
          {project.year}
        </span>
      </div>

      <p className="mt-4 leading-7 text-white/60">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            GitHub →
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Live Demo →
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;