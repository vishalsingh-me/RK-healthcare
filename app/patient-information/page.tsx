import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";

const faqItems = [
  {
    question: "Will I meet Dr. Singh before surgery?",
    answer:
      "Yes. A full pre-operative review is completed before your procedure so your medical history, investigations, and anaesthetic plan can be discussed in detail.",
  },
  {
    question: "When should I stop eating and drinking?",
    answer:
      "For most procedures, avoid solid food for six hours before surgery. Clear fluids are usually permitted until two hours before admission unless specific instructions are provided by your hospital team.",
  },
  {
    question: "Should I take my regular medications on the day of surgery?",
    answer:
      "Most routine medications continue as normal, but anticoagulants, diabetes therapies, and some blood pressure medicines may need adjustment. Always follow your personalised instructions.",
  },
  {
    question: "How is pain and nausea managed after the operation?",
    answer:
      "A tailored post-operative strategy is discussed in advance and may include multimodal analgesia, regional techniques, anti-sickness medication, and enhanced monitoring where appropriate.",
  },
  {
    question: "How quickly can I return to normal activity?",
    answer:
      "Recovery varies by procedure and personal health factors. You will receive clear discharge guidance on driving, work, activity levels, and follow-up support.",
  },
];

export default function PatientInformationPage() {
  return (
    <>
      <section className="bg-primary pb-20 pt-[120px]">
        <div className="site-container">
          <Reveal className="max-w-[800px]">
            <span className="section-label">Patient Information</span>
            <h1 className="heading-h1 mt-6 text-white">
              Preparing for Anaesthesia with Confidence
            </h1>
            <p className="mt-6 max-w-[560px] text-[1.0625rem] leading-[1.75] text-white/70">
              Clear guidance from consultation to recovery, designed to help you
              feel informed, reassured, and fully prepared for your procedure.
            </p>
            <div className="mt-8 rounded-lg border border-white/25 bg-white/95 p-5 shadow-soft">
              <div className="border-l-2 border-accent pl-4">
                <p className="text-[0.9375rem] leading-8 text-text-muted">
                  This information is provided as a resource for patients
                  referred to Dr. Singh via their surgeon or GP. To make a
                  referral, please use our professional enquiry form.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="site-container">
          <Reveal className="mx-auto max-w-4xl">
            <article className="prose-medical">
              <h2>What to Expect Before Your Anaesthetic</h2>
              <p>
                Your pre-operative assessment focuses on safety, individual risk,
                and planning. Dr. Singh will review your medical history,
                investigations, allergies, previous anaesthetic experiences, and
                current medications. This consultation also provides time to
                discuss concerns, expected recovery, and the most appropriate
                anaesthetic approach for your procedure.
              </p>

              <h2>On the Day of Your Procedure</h2>
              <p>
                On arrival, final checks are completed and your monitoring plan
                is confirmed. In theatre, your anaesthesia is delivered with
                continuous specialist monitoring of heart, blood pressure,
                oxygenation, ventilation, and haemodynamic status. Care is
                coordinated closely with your surgical and nursing teams
                throughout.
              </p>

              <h2>Recovery and Aftercare</h2>
              <p>
                Following surgery, recovery priorities include comfort,
                haemodynamic stability, and early detection of any complications.
                You will receive an individualised plan for pain and nausea
                control, as well as advice on mobilisation and discharge.
                Ongoing support is available if you have concerns after your
                procedure.
              </p>

              <h2>How to Prepare: Fasting Guidelines and Medications</h2>
              <p>
                Your personalised instructions always take precedence, but the
                following principles are commonly used:
              </p>
              <ul>
                <li>Do not eat solid food for six hours before anaesthesia.</li>
                <li>
                  Clear fluids may be taken up to two hours before admission,
                  unless advised otherwise.
                </li>
                <li>
                  Continue routine medicines unless your consultant provides a
                  specific stop or dose-adjustment instruction.
                </li>
                <li>
                  Bring an up-to-date medication list, including supplements and
                  anticoagulants.
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal className="mx-auto mt-16 max-w-4xl">
            <h2 className="heading-h2 text-primary">FAQ</h2>
            <p className="mt-4 text-base leading-7 text-text-muted">
              Answers to common questions from private cardiothoracic surgery
              patients.
            </p>
            <div className="mt-8">
              <FAQAccordion items={faqItems} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
