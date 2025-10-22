import React, { useMemo, useState } from "react";
import FadeIn from "./FadeIn";

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
  subtitle = "Two short calls beat a long RFP. Share constraints & timeline — we’ll propose a path and estimate.",
  contactInfo = {
    email: "nitasseptiani@nawasena.tech",
    phone: "+62 856-4903-0832",
    address: "Jakarta, Indonesia (remote-first)",
    workingHours: "Mon–Fri, 09:00–18:00 WIB",
  },
}: ContactSectionProps) {
  const subjects = useMemo(
    () => [
      { v: "web-development", l: "Web" },
      { v: "mobile-development", l: "Mobile" },
      { v: "cloud-solutions", l: "Cloud" },
      { v: "data-analytics", l: "Data" },
      { v: "consulting", l: "Consulting" },
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
    website: "", // honeypot
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

  const setQuickSubject = (v: string) =>
    setFormData((s) => ({ ...s, subject: v }));

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
    if (formData.website) return false;
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
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-white py-16 sm:py-20">
      {/* hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header (ringkas) */}
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-pretty text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-base sm:text-lg leading-relaxed text-gray-700">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Info compact */}
          <aside className="lg:col-span-4">
            <FadeIn delay={150} direction="left">
              <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
                <dl className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-block size-2 rounded-full bg-secondary-400" />
                    <div>
                      <dt className="text-gray-500">Email</dt>
                      <dd className="font-medium text-gray-900">
                        {contactInfo.email}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-block size-2 rounded-full bg-secondary-400" />
                    <div>
                      <dt className="text-gray-500">Phone</dt>
                      <dd className="font-medium text-gray-900">
                        {contactInfo.phone}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-block size-2 rounded-full bg-secondary-400" />
                    <div>
                      <dt className="text-gray-500">Address</dt>
                      <dd className="font-medium text-gray-900">
                        {contactInfo.address}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-block size-2 rounded-full bg-secondary-400" />
                    <div>
                      <dt className="text-gray-500">Hours</dt>
                      <dd className="font-medium text-gray-900">
                        {contactInfo.workingHours}
                      </dd>
                    </div>
                  </div>
                </dl>

                {/* mini map (subtle) */}
                <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                  <div className="h-28 w-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Bandung,ID&zoom=11&size=640x240&scale=2')] bg-cover bg-center" />
                </div>

                <p className="mt-3 text-xs text-gray-600">
                  Typical response in{" "}
                  <span className="font-medium text-gray-900">≤ 24h</span> on
                  business days.
                </p>
              </div>
            </FadeIn>
          </aside>

          {/* Form compact */}
          <div className="lg:col-span-8">
            <FadeIn delay={300} direction="right">
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white p-5 sm:p-6"
            >
              {/* Quick subject chips */}
              <div>
                <div className="mb-2 block text-sm font-medium text-gray-700">
                  Subject *
                </div>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <button
                      type="button"
                      key={s.v}
                      onClick={() => setQuickSubject(s.v)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                        formData.subject === s.v
                          ? "border-primary-300 bg-primary-50 text-primary-800"
                          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                      aria-pressed={formData.subject === s.v}
                    >
                      {s.l}
                    </button>
                  ))}
                </div>
                {/* fallback select for accessibility / keyboard */}
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={onChange}
                  required
                  className="sr-only"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((s) => (
                    <option key={s.v} value={s.v}>
                      {s.l}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
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
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
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
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={onChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200"
                    placeholder="Optional"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  rows={5}
                  className="w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200"
                  placeholder="Tell us about goals, constraints, and timeline"
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
                  className="mt-0.5 size-4 rounded border-gray-300 text-primary-700 focus:ring-primary-700"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  I agree that Nawasena may contact me about this inquiry. We’ll
                  keep your info private.
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
              <div className="mt-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all ${
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
          </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
