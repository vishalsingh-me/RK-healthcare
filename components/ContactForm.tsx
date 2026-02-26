"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  reason: "",
  message: "",
};

const reasonOptions = [
  "Surgical team / anaesthetic partnership",
  "Private hospital or surgical centre enquiry",
  "Patient referral",
  "Medico-legal instruction",
  "General professional enquiry",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(defaultValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter a contact number.";
    }

    if (!values.reason.trim()) {
      nextErrors.reason = "Please select a reason for contact.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please provide a short message.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setValues(defaultValues);
  };

  const inputClassName =
    "w-full border border-border bg-white px-4 py-3 text-base text-text outline-none transition-colors duration-200 focus:border-accent";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact RK Healthcare"
      className="space-y-5"
      id="contact-form"
    >
      {isSubmitted && (
        <div
          className="border border-accent/70 bg-surface px-4 py-3 text-sm text-primary"
          role="status"
        >
          Thank you for your enquiry. Our team will respond shortly.
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(event) =>
            setValues((previous) => ({ ...previous, name: event.target.value }))
          }
          className={inputClassName}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-sm text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) =>
            setValues((previous) => ({ ...previous, email: event.target.value }))
          }
          className={inputClassName}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-sm text-red-700">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(event) =>
            setValues((previous) => ({ ...previous, phone: event.target.value }))
          }
          className={inputClassName}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-2 text-sm text-red-700">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="reason"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Reason for Contact
        </label>
        <select
          id="reason"
          name="reason"
          value={values.reason}
          onChange={(event) =>
            setValues((previous) => ({ ...previous, reason: event.target.value }))
          }
          className={inputClassName}
          aria-invalid={Boolean(errors.reason)}
          aria-describedby={errors.reason ? "reason-error" : undefined}
        >
          <option value="">Please select</option>
          {reasonOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p id="reason-error" className="mt-2 text-sm text-red-700">
            {errors.reason}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) =>
            setValues((previous) => ({ ...previous, message: event.target.value }))
          }
          className={inputClassName}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full" aria-label="Submit contact form">
        Submit Enquiry
      </button>
    </form>
  );
}
