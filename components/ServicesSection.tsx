"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BookOpen,
  Heart,
  Shield,
  Stethoscope,
  Wind,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    icon: Heart,
    title: "Cardiothoracic Anaesthesia",
    body: "Specialist anaesthesia for cardiac and thoracic surgery, including valve replacement, CABG, and lung resection procedures.",
  },
  {
    icon: Activity,
    title: "Perioperative Echocardiography (TOE)",
    body: "BSE-accredited transoesophageal echocardiography to guide cardiac surgery and optimise haemodynamic management.",
  },
  {
    icon: Wind,
    title: "One Lung Ventilation",
    body: "Specialist one lung ventilation techniques for thoracic surgery, developed through Dr. Singh's role as national Course Director.",
  },
  {
    icon: Shield,
    title: "General & Regional Anaesthesia",
    body: "Safe, evidence-based anaesthetic care across a wide range of elective and complex surgical procedures.",
  },
  {
    icon: Stethoscope,
    title: "Pre-operative Assessment",
    body: "Thorough pre-operative consultation to optimise patient safety and plan individualised anaesthetic strategy.",
  },
  {
    icon: BookOpen,
    title: "Medico-Legal Services",
    body: "Expert anaesthetic opinion and reports for medico-legal cases, drawing on extensive clinical and academic experience.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-surface py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.21, 1, 0.35, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-label justify-center">Our Specialisms</span>
          <h2 className="heading-h2 mt-6 text-primary">
            Expert Care Across Every Stage of Your Procedure
          </h2>
          <p className="mt-6 text-base leading-7 text-text-muted">
            We provide specialist anaesthetic services in partnership with
            surgical teams and private healthcare facilities. Whether you are a
            referring surgeon, a private hospital, or a surgical centre, Dr.
            Singh offers flexible, consultant-led anaesthetic cover for complex
            cardiothoracic cases.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.21, 1, 0.35, 1] },
                  },
                }}
                className="group border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-card"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center border border-accent/55 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="heading-h3 mt-6 text-primary">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-text-muted">
                  {service.body}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
