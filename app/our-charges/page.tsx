import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";

const chargeRows = [
  { service: "Initial pre-operative consultation", price: "GBP ---" },
  { service: "Cardiothoracic anaesthesia (major procedure)", price: "GBP ---" },
  { service: "Perioperative TOE echocardiography", price: "GBP ---" },
  { service: "Thoracic surgery anaesthetic care", price: "GBP ---" },
  { service: "Post-operative review", price: "GBP ---" },
  { service: "Medico-legal report preparation", price: "GBP ---" },
];

export default function OurChargesPage() {
  return (
    <>
      <section className="bg-primary pb-20 pt-[120px]">
        <div className="site-container">
          <Reveal className="max-w-[800px]">
            <span className="section-label">Our Charges</span>
            <h1 className="heading-h1 mt-6 text-white">
              Transparent Consultant Fees
            </h1>
            <p className="mt-6 max-w-[560px] text-[1.0625rem] leading-[1.75] text-white/70">
              We provide clear and transparent fee guidance for private
              anaesthetic care. A personalised estimate is issued after your
              initial consultation and procedural review.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="site-container">
          <Reveal className="mx-auto max-w-4xl border border-border bg-white">
            {chargeRows.map((row) => (
              <div
                key={row.service}
                className="grid gap-2 border-b border-border px-6 py-5 last:border-b-0 md:grid-cols-[1fr_auto] md:items-center"
              >
                <h2 className="heading-h3 text-primary">{row.service}</h2>
                <p className="font-sans text-lg font-medium text-primary">
                  {row.price}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mx-auto mt-8 max-w-4xl space-y-4 text-sm leading-7 text-text-muted">
            <p>
              All fees are inclusive of VAT. A full fee schedule will be
              provided following your initial consultation.
            </p>
            <p>
              If you are insured, please confirm authorisation with your insurer
              before treatment. Any shortfall between insurer reimbursement and
              consultant fees remains your responsibility.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
