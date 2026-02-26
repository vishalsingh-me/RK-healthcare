"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const headlineLines = [
  ["Precision", "Anaesthesia."],
  ["Exceptional", "Outcomes."],
];

export default function HeroSection() {
  let wordPosition = 0;

  return (
    <section className="flex min-h-screen items-center bg-white">
      <div className="site-container w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.21, 1, 0.35, 1] }}
            className="max-w-3xl"
          >
            <span className="section-label">
              Consultant Cardiothoracic Anaesthesia - Leeds, UK
            </span>

            <h1 className="heading-h1 mt-8 text-primary">
              {headlineLines.map((line, lineIndex) => (
                <span key={`line-${lineIndex}`} className="block">
                  {line.map((word, index) => {
                    const delay = wordPosition * 0.1;
                    wordPosition += 1;

                    return (
                      <motion.span
                        key={`${word}-${index}`}
                        className="mr-[0.35ch] inline-block"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay, ease: "easeOut" }}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-[520px] text-base leading-[1.6] text-text-muted">
              Dr. Rajendra Singh is a Consultant Cardiothoracic Anaesthetist at
              Leeds Teaching Hospitals NHS Trust, available for specialist
              anaesthetic sessions, surgical team collaboration, and private
              patient referrals across Yorkshire and the wider UK.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="btn-primary"
                aria-label="Submit a referral enquiry"
              >
                Submit a Referral Enquiry
              </Link>
              <Link
                href="/consultants"
                className="btn-secondary"
                aria-label="About Dr. Singh"
              >
                About Dr. Singh
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 1, 0.35, 1] }}
            className="relative h-[26rem] overflow-hidden border border-border sm:h-[32rem] lg:h-[calc(100vh-5rem)]"
          >
            <Image
              src="/cardiac-anes.jpg"
              alt="Cardiothoracic operating theatre"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-primary/45" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-primary/70 px-6 py-5 backdrop-blur-sm">
              <p className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white/75">
                Consultant-led private anaesthetic care
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
