import CertificateCard from "../common/CertificateCard";

function Certificates() {
  const certificates = [
    {
      name: "Your Certification",
      issuer: "Certification Provider",
      year: "2026",
      description:
        "A short description of what this certification covers.",
      link: "",
    },
    {
      name: "Another Certification",
      issuer: "Certification Provider",
      year: "2026",
      description:
        "A short description of what this certification covers.",
      link: "",
    },
  ];

  return (
    <section
      id="certificates"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Certifications
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Certifications & learning.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <CertificateCard
              key={`${certificate.name}-${certificate.year}`}
              certificate={certificate}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;