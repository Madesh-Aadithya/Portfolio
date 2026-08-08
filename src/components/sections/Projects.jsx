import ProjectCard from "../common/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      year: "2026",
      description:
        "A modern personal portfolio built with React, Tailwind CSS, and an Express backend.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      github: "https://github.com/",
      demo: "",
    },
    {
      title: "Static Website Deployment",
      year: "2026",
      description:
        "A DevOps project focused on containerizing a website and deploying it with Docker and Nginx.",
      technologies: ["Linux", "Docker", "Nginx", "Git"],
      github: "https://github.com/",
      demo: "",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Projects
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Things I've built.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;