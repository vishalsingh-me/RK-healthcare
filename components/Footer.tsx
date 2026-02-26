import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/patient-information", label: "Patient Information" },
  { href: "/consultants", label: "Consultants" },
  { href: "/our-charges", label: "Our Charges" },
  { href: "/contact-us", label: "Contact Us" },
];

const serviceLinks = [
  "Cardiothoracic Anaesthesia",
  "Perioperative Echocardiography",
  "One Lung Ventilation",
  "Pre-operative Assessment",
  "Medico-Legal Services",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="site-container py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-5 xl:pr-6">
            <Link href="/" aria-label="RK Healthcare home" className="inline-flex items-center">
              <Image
                src="/RkHealthcareLogo.png"
                alt="RK Healthcare logo"
                width={200}
                height={58}
                className="h-50 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-7 text-white/75">
              Specialist anaesthetic care, delivered with precision and
              compassion.
            </p>
            <a
              href="https://www.linkedin.com"
              aria-label="RK Healthcare LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/30 text-white/80 transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="font-sans text-xl text-white">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xl text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {serviceLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xl text-white">Contact</h3>
            <address className="mt-5 space-y-3 text-sm not-italic leading-7 text-white/75">
              <p>Private Consulting Rooms</p>
              <p>Leeds, West Yorkshire</p>
              <p>
                <a
                  href="tel:+441133000000"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  +44 (0)113 300 0000
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@rkhealthcare.com"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  info@rkhealthcare.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-sm text-white/65">
          <p>
            &copy; 2026 RK Healthcare. All rights reserved. | Registered in
            England &amp; Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
