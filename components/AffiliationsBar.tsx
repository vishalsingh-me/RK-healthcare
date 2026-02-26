import Reveal from "@/components/Reveal";

const affiliations = [
  "Leeds Teaching Hospitals NHS Trust",
  "University of Leeds",
  "British Society of Echocardiography",
  "Freeman Hospital",
  "Royal College of Anaesthetists (FRCA)",
];

export default function AffiliationsBar() {
  return (
    <section className="border-y border-border bg-surface py-16">
      <div className="site-container">
        <Reveal className="text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            Affiliations &amp; Accreditations
          </p>
          <h2 className="mt-4 font-sans text-[1.5rem] font-bold text-primary">
            Trusted by Leading Institutions
          </h2>

          <div className="mx-auto mt-8 flex max-w-[900px] flex-wrap items-center justify-center gap-y-3">
            {affiliations.map((name, index) => (
              <span key={name} className="inline-flex items-center">
                <span className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF] transition-colors duration-200 ease-in-out hover:text-primary">
                  {name}
                </span>
                {index < affiliations.length - 1 && (
                  <span
                    className="mx-4 inline-block text-[1.25rem] leading-none text-accent/50 md:mx-6"
                    aria-hidden="true"
                  >
                    &middot;
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
