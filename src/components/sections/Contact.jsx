function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Contact
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Let's connect.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          If you'd like to discuss a project, opportunity, or just
          connect, feel free to reach out.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">
              Get in touch
            </h3>

            <div className="mt-6 space-y-4 text-white/60">
              <p>
                Email: your-email@example.com
              </p>

              <p>
                GitHub: github.com/yourusername
              </p>

              <p>
                LinkedIn: linkedin.com/in/yourusername
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <div>
              <label
                htmlFor="name"
                className="text-sm text-white/60"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="text-sm text-white/60"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm text-white/60"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;