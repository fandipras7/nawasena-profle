import React, { useMemo, useState } from "react";

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  workingHours: string;
}

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
}

export default function ContactSection({
  title = "Get in touch",
  subtitle = "Two short calls are better than a long RFP. Share your constraints and timeline — we’ll propose a path and estimate.",
  contactInfo = {
    email: "hello@nawasena.dev",
    phone: "+62 812‑3456‑7890",
    address: "Bandung, Indonesia (remote‑first)",
    workingHours: "Mon–Fri, 09:00–18:00 WIB",
  },
}: ContactSectionProps) {
  const subjects = useMemo(
    () => [
      { v: "web-development", l: "Web Development" },
      { v: "mobile-development", l: "Mobile Development" },
      { v: "cloud-solutions", l: "Cloud Solutions" },
      { v: "data-analytics", l: "Data Analytics" },
      { v: "consulting", l: "IT Consulting" },
      { v: "other", l: "Other" },
    ],
    []
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
    /** Honeypot field to deter bots (hidden visually) */
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    )
      return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
    if (!formData.consent) return false;
    if (formData.website) return false; // honeypot tripped
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    try {
      setIsSubmitting(true);
      // Example POST — replace with your endpoint
      // const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      // if (!res.ok) throw new Error("Failed");
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        consent: false,
        website: "",
      });
    } catch (e) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-white py-20 sm:py-24">
      {/* hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-pretty text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-lg leading-8 text-gray-700">{subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Info column */}
          <aside className="lg:col-span-4">
            <div className="space-y-5">
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5">
                <div className="text-sm font-semibold text-primary-900">
                  Contact
                </div>
                <dl className="mt-3 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-block size-2 rounded-full bg-secondary-400" />
                    <div>
                      <dt className="text-gray-500">Email</dt>
                      <dd className="font-medium text-gray-900">
                        {contactInfo.email}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-block size-2 rounded-full bg-secondary-400" />
                    <div>
                      <dt className="text-gray-500">Phone</dt>
                      <dd className="font-medium text-gray-900">
                        {contactInfo.phone}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-block size-2 rounded-full bg-secondary-400" />
                    <div>
                      <dt className="text-gray-500">Address</dt>
                      <dd className="font-medium text-gray-900">
                        {contactInfo.address}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-block size-2 rounded-full bg-secondary-400" />
                    <div>
                      <dt className="text-gray-500">Hours</dt>
                      <dd className="font-medium text-gray-900">
                        {contactInfo.workingHours}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* tiny map / placeholder */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                <div className="h-48 w-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Bandung,ID&zoom=10&size=640x320&scale=2')] bg-cover bg-center" />
                <div className="p-3 text-xs text-gray-600">
                  Bandung, Indonesia — remote sessions available
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-sm font-semibold text-gray-900">
                  Response time
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  We usually reply within{" "}
                  <span className="font-medium text-gray-900">24 hours</span> on
                  business days.
                </p>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={onChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={onChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={onChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200"
                    placeholder="Optional"
                    autoComplete="organization"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={onChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((s) => (
                      <option key={s.v} value={s.v}>
                        {s.l}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  rows={6}
                  className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200"
                  placeholder="Tell us about your project, goals, constraints, and timeline"
                />
              </div>

              {/* Consent + Honeypot */}
              <div className="mt-4 flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={onChange}
                  className="mt-1 size-4 rounded border-gray-300 text-primary-700 focus:ring-primary-700"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  I agree that Nawasena may contact me about this inquiry. We’ll
                  keep your info private and never share it.
                </label>
              </div>
              <div aria-hidden className="hidden">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  onChange={onChange}
                />
              </div>

              {/* Submit */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-all ${
                    isSubmitting
                      ? "bg-gray-400"
                      : "bg-primary-700 hover:-translate-y-0.5 hover:bg-primary-800 shadow-sm"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="-ml-1 mr-2 size-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M15.66 15.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M15.66 8.34l2.12-2.12" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <svg
                        className="ml-2 size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 19l9 2-9-18-9 18 9-2m0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Alerts */}
              {status === "success" && (
                <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                  Thank you! We’ll reply within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                  Please complete all required fields correctly and accept the
                  consent.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
