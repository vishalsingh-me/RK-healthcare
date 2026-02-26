import Image from "next/image";

import Reveal from "@/components/Reveal";

const badges = [
  "FRCA Certified",
  "BSE London Accreditation",
  "University of Leeds Faculty",
  "Freeman Hospital Fellowship",
];

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-4 -top-4 h-full w-full border border-accent" />
              <div className="relative aspect-square overflow-hidden border border-border bg-surface">
                <Image
                  src="/cardiac-anes.jpg"
                  alt="Professional clinical setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 34vw"
                />
                <div className="absolute inset-0 bg-primary/25" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <span className="section-label">About The Practice</span>
            <h2 className="heading-h2 mt-6 max-w-xl text-primary">
              A Practice Built on Subspecialty Expertise
            </h2>

            <div className="body-base mt-8 space-y-5">
              <p>
                RK Healthcare was founded by Dr. Rajendra Singh to bring
                consultant-level cardiothoracic anaesthetic expertise to private
                patients in the UK. Dr. Singh has spent over two decades at the
                forefront of cardiac and thoracic anaesthesia, including a
                Fellowship at Freeman Hospital, Newcastle, one of the UK&apos;s
                leading cardiothoracic transplant centres.
              </p>
              <p>
                He is an accredited BSE Echocardiographer, a recognised examiner
                for the British Society of Echocardiography, and an Honorary
                Senior Lecturer at the University of Leeds, where he leads
                anaesthesia education for medical students.
              </p>
              <p>
                RK Healthcare works in close partnership with cardiothoracic
                surgeons, private hospitals, and surgical centres to provide
                seamless, consultant-led anaesthetic cover for complex cardiac
                and thoracic procedures.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center border border-accent/60 px-4 py-2 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-primary"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
