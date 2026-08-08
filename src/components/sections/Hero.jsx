function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Hi, I'm Madesh.
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-white/70 sm:text-3xl">
          Aspiring DevOps & Cloud Engineer
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
          I build, automate, and deploy applications while continuously
          learning about Linux, cloud infrastructure, containers, and DevOps.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <button
            onClick={() => scrollToSection("projects")}
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Contact Me
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;