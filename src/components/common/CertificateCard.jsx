function CertificateCard({ certificate }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            {certificate.name}
          </h3>

          <p className="mt-2 text-sm text-white/50">
            {certificate.issuer}
          </p>
        </div>

        <span className="text-sm text-white/40">
          {certificate.year}
        </span>
      </div>

      <p className="mt-4 leading-7 text-white/60">
        {certificate.description}
      </p>

      {certificate.link && (
        <a
          href={certificate.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm font-medium text-white/70 transition hover:text-white"
        >
          View Certificate →
        </a>
      )}
    </article>
  );
}

export default CertificateCard;