import ConsultantProfile from "@/components/ConsultantProfile";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";

const teamMembers = [
  {
    initials: "SS",
    name: "Sonia Singh",
    role: "Medical Secretary",
    bio: "Sonia manages appointment scheduling, answers professional and patient queries, and coordinates referrals to ensure communication is clear, timely, and confidential.",
    badge: "Scheduling & Enquiries",
  },
  {
    initials: "AS",
    name: "Aanya Singh",
    role: "IT Analyst",
    bio: "Aanya oversees the digital infrastructure and technology systems that support RK Healthcare's day-to-day operations, ensuring a seamless experience for both clinical and administrative teams.",
    badge: "Technology & Systems",
  },
];

export default function ConsultantsPage() {
  return (
    <>
      <section className="bg-primary pb-20 pt-[120px]">
        <div className="site-container">
          <Reveal className="max-w-[800px]">
            <span className="section-label">Our Consultants</span>
            <h1 className="heading-h1 mt-6 text-white">
              Meet the Specialist Behind Your Care
            </h1>
            <p className="mt-6 max-w-[560px] text-[1.0625rem] leading-[1.75] text-white/70">
              RK Healthcare is led by one of the UK&apos;s most experienced
              cardiothoracic anaesthetists, delivering consultant-level
              expertise from pre-operative planning to post-operative care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface pb-24 pt-20">
        <ConsultantProfile />
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal className="max-w-2xl">
            <span className="section-label">Our Team</span>
            <h2 className="heading-h2 mt-6 text-primary">
              The People Behind the Practice
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <Reveal key={member.name}>
                <article className="rounded-xl border border-border bg-white p-9 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:border-accent hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full text-[1.25rem] font-bold text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)",
                    }}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>

                  <h3 className="mt-5 text-[1.125rem] font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-accent">
                    {member.role}
                  </p>
                  <div className="my-4 h-0.5 w-8 bg-accent" aria-hidden="true" />
                  <p
                    className="text-[0.9375rem] leading-7 text-text-muted"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {member.bio}
                  </p>
                  <span className="mt-5 inline-block rounded-[20px] border border-border bg-surface px-[14px] py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-primary">
                    {member.badge}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
