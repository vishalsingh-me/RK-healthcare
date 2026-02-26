import Link from "next/link";

import Reveal from "@/components/Reveal";

export default function CTABanner() {
  return (
    <section className="bg-primary py-20">
      <div className="site-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="heading-h2 text-white">
            Interested in Working With Us?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            Whether you are a surgeon seeking a specialist anaesthetic partner,
            a private hospital looking for consultant cover, or a healthcare
            professional with a referral enquiry - we would be glad to hear
            from you.
          </p>

          <Link
            href="/contact-us"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 font-sans text-[0.875rem] font-bold uppercase tracking-[0.04em] text-primary transition-colors duration-300 hover:bg-accent-soft"
            aria-label="Get in touch"
          >
            Get in Touch {"->"}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
