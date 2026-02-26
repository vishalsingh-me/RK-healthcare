"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/patient-information", label: "Patient Information" },
  { href: "/consultants", label: "Consultants" },
  { href: "/our-charges", label: "Our Charges" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled
            ? "border-b border-border shadow-soft"
            : "border-b border-transparent"
        }`}
      >
        <div className="site-container">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              aria-label="RK Healthcare home"
              className="inline-flex items-center"
            >
              <Image
                src="/RkHealthcareLogo.png"
                alt="RK Healthcare logo"
                width={480}
                height={320}
                priority
                className="h-40 w-auto object-contain"
              />
            </Link>

            <nav
              className="hidden items-center gap-8 lg:flex"
              aria-label="Primary"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-6 py-2.5 font-sans text-[0.875rem] font-bold uppercase tracking-[0.04em] text-white transition-colors duration-300 hover:bg-primary-dark"
                aria-label="Make an enquiry"
              >
                Make an Enquiry
              </Link>
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center text-primary lg:hidden"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((previous) => !previous)}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-primary/25 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.aside
              className="absolute inset-y-0 right-0 flex w-full flex-col items-center justify-center bg-primary px-10 text-white"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              aria-label="Mobile navigation"
            >
              <button
                type="button"
                className="absolute right-6 top-6 text-white"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-8 w-8" />
              </button>

              <nav className="flex flex-col items-center gap-8" aria-label="Mobile">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-sans text-3xl font-medium leading-none transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  href="/contact-us"
                  className="mt-4 rounded-md border border-white bg-white px-8 py-3 font-sans text-[0.875rem] font-bold uppercase tracking-[0.04em] text-primary"
                  aria-label="Make an enquiry"
                >
                  Make an Enquiry
                </Link>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
