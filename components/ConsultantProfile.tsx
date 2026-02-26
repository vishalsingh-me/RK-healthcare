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

const profileStats = [
  { value: "20+", label: "YEARS EXPERIENCE" },
  { value: "FRCA", label: "FELLOWSHIP" },
  { value: "BSE", label: "ACCREDITED" },
];

export default function ConsultantProfile() {
  return (
    <div className="mx-auto max-w-[1100px] px-6">
      <Reveal>
        <article className="mx-auto grid max-w-[960px] grid-cols-1 overflow-hidden rounded-[16px] bg-white shadow-[0_4px_40px_rgba(11,31,58,0.12)] md:grid-cols-[280px_1fr]">
          <div
            className="flex flex-col items-center justify-start rounded-t-[16px] px-6 pb-10 pt-10 md:rounded-l-[16px] md:rounded-r-none md:px-8 md:pb-10 md:pt-12"
            style={{ background: "linear-gradient(170deg, #0B1F3A 0%, #162d4e 100%)" }}
          >
            <div
              className="relative h-[160px] w-[160px] overflow-hidden rounded-full border-[3px] border-accent/60 md:h-[170px] md:w-[170px]"
              style={{
                boxShadow:
                  "0 0 0 5px rgba(184, 150, 110, 0.14), 0 16px 36px rgba(0, 0, 0, 0.35)",
              }}
            >
              <Image
                src="/dr-raj-profile-pic.jpeg"
                alt="Portrait of Dr. Rajendra Singh"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 160px, 170px"
              />
            </div>

            <p className="mt-4 text-center text-[0.9375rem] font-bold text-white">
              Dr. Rajendra Singh
            </p>
            <p className="mt-1 text-center text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-accent">
              Cardiothoracic Anaesthetist
            </p>

            <div className="my-6 h-px w-8 bg-[rgba(184,150,110,0.4)]" />

            <div className="flex w-full flex-col gap-5">
              {profileStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-[1.125rem] font-extrabold leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-[2px] text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-[rgba(255,255,255,0.45)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-b-[16px] bg-white px-6 py-10 md:rounded-b-none md:rounded-r-[16px] md:px-10 md:py-[44px]">
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
              CONSULTANT CARDIOTHORACIC ANAESTHETIST
            </p>
            <div className="mb-6 mt-3 h-0.5 w-8 bg-accent" />

            <div className="space-y-4 text-[0.9375rem] leading-[1.8] text-[#4B5563]">
              <p>
                Dr. Rajendra Kumar Singh is a Consultant Cardiothoracic Anaesthetist at Leeds
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

            <div className="mt-7 flex flex-wrap gap-2">
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="inline-flex items-center rounded-[6px] border border-border bg-surface px-[14px] py-[6px] font-sans text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-primary"
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
