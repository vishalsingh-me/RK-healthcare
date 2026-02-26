import Image from "next/image";

import Reveal from "@/components/Reveal";

const credentials = [
  "FRCA",
  "BSE London Accreditation",
  "Honorary Senior Lecturer, Univ. of Leeds",
  "Freeman Hospital Fellowship",
  "BSEcho Examiner",
  "One Lung Ventilation Course Director",
];

export default function ConsultantProfile() {
  return (
    <div className="mx-auto max-w-[1100px] px-6">
      <Reveal>
        <article className="grid gap-0 overflow-hidden rounded-[12px] border border-border bg-white shadow-[0_2px_24px_rgba(0,0,0,0.07)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center justify-center bg-surface p-8 md:p-10 lg:p-12">
            <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-full border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
              <Image
                src="/dr-raj-profile-pic.jpeg"
                alt="Portrait of Dr. Rajendra Singh"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
            </div>
          </div>

          <div className="p-8 md:p-10 lg:p-12">
            <h2 className="text-[1.625rem] font-bold leading-[1.2] text-primary">
              Dr. Rajendra Singh
            </h2>
            <p className="mt-2 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-accent">
              MB BS | FRCA | BSE ACCREDITED
            </p>
            <p className="mt-6 text-lg text-primary">
              Consultant Cardiothoracic Anaesthetist
            </p>

            <div className="mt-6 h-px w-20 bg-accent" />

            <div className="mt-7 space-y-4 text-[0.9375rem] leading-[1.8] text-text-muted">
              <p>
                Dr. Singh is a Consultant Cardiothoracic Anaesthetist at Leeds
                Teaching Hospitals NHS Trust, where he has practiced for over
                11 years. He holds the Fellowship of the Royal College of
                Anaesthetists (FRCA) and a BSE London Accreditation in
                Perioperative Transoesophageal Echocardiography.
              </p>
              <p>
                Following specialist anaesthesia training in the UK, Dr. Singh
                undertook a prestigious Fellowship in Cardiothoracic and
                Transplant Anaesthesia at Freeman Hospital, Newcastle, a
                nationally recognised centre for cardiac transplantation.
              </p>
              <p>
                He is an examiner for the British Society of Echocardiography
                and served as Lead Assessor from 2023 to 2025. Since 2021, he
                has led anaesthesia education for fourth-year medical students
                at the University of Leeds, where he holds an Honorary Senior
                Lectureship.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="rounded-lg border border-accent/60 px-4 py-3 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-primary"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </div>
  );
}
