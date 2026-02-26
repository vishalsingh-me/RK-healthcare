"use client";

import { motion } from "framer-motion";

const credentials = [
  { value: "20+", label: "Years Experience" },
  { value: "FRCA", label: "Fellowship Trained" },
  { value: "BSE Accredited", label: "Echocardiographer" },
  { value: "NHS & Private", label: "Practice" },
];

export default function CredentialsBar() {
  return (
    <section className="relative overflow-hidden border-t-2 border-accent bg-primary py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.21, 1, 0.35, 1] }}
          className="mx-auto grid max-w-[1100px] grid-cols-4 gap-6"
        >
          {credentials.map((item, index) => (
            <div
              key={item.value}
              className="relative space-y-2 px-6 py-3 text-center"
            >
              <p className="whitespace-nowrap font-sans text-[clamp(1.25rem,2vw,1.75rem)] font-extrabold leading-[1.2] text-white">
                {item.value}
              </p>
              <p className="mt-2 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent">
                {item.label}
              </p>

              {index < credentials.length - 1 && (
                <span
                  className="absolute right-0 top-1/2 h-8 w-px -translate-y-1/2 self-center bg-white/15"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
