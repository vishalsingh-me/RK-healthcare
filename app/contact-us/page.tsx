import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export default function ContactUsPage() {
  return (
    <>
      <section className="border-b border-border bg-white py-20">
        <div className="site-container">
          <Reveal className="max-w-3xl">
            <span className="section-label">Contact Us</span>
            <h1 className="heading-h1 mt-6 text-primary">
              Professional Enquiries
            </h1>
            <p className="mt-6 text-base leading-7 text-text-muted">
              Contact RK Healthcare for referral coordination, surgical team
              collaboration, consultant anaesthetic cover, and specialist
              medico-legal enquiries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-8 border-t border-border bg-surface py-20">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="space-y-8 border border-border bg-white p-7 md:p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
                  <div>
                    <h2 className="heading-h3 text-primary">Address</h2>
                    <p className="mt-1 text-sm leading-7 text-text-muted">
                      Private Consulting Rooms, Leeds, West Yorkshire, United
                      Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
                  <div>
                    <h2 className="heading-h3 text-primary">Phone</h2>
                    <p className="mt-1 text-sm leading-7 text-text-muted">
                      <a
                        href="tel:+441133000000"
                        className="transition-colors duration-300 hover:text-accent"
                      >
                        +44 (0)113 300 0000
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
                  <div>
                    <h2 className="heading-h3 text-primary">Email</h2>
                    <p className="mt-1 text-sm leading-7 text-text-muted">
                      <a
                        href="mailto:info@rkhealthcare.com"
                        className="transition-colors duration-300 hover:text-accent"
                      >
                        info@rkhealthcare.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
                  <div>
                    <h2 className="heading-h3 text-primary">Hours</h2>
                    <p className="mt-1 text-sm leading-7 text-text-muted">
                      Monday to Friday, 08:00 to 18:00
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="heading-h3 text-primary">Location</h2>
                <div className="mt-4 overflow-hidden border border-border">
                  <iframe
                    title="RK Healthcare location map"
                    src="https://www.google.com/maps?q=Leeds+General+Infirmary&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Google map showing Leeds General Infirmary area"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal className="border border-border bg-white p-7 md:p-8">
              <h2 className="heading-h2 text-primary">Professional Enquiry</h2>
              <p className="mt-3 text-sm leading-7 text-text-muted">
                Complete the form below and our team will respond with the next
                steps.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
