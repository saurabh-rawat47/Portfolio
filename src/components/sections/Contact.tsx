"use client";

import { useState, FormEvent } from "react";
import { PERSONAL } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import {
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconSend,
  IconMapPin,
} from "@/components/ui/Icons";

const socialLinks = [
  {
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    icon: <IconEmail size={18} />,
    external: false,
  },
  {
    label: "GitHub",
    value: "saurabh-rawat47",
    href: PERSONAL.github,
    icon: <IconGithub size={18} />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Saurabh Rawat",
    href: PERSONAL.linkedin,
    icon: <IconLinkedin size={18} />,
    external: true,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data — works without a backend
    const subject = encodeURIComponent(formData.subject || "Portfolio Enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Let's"
            highlight="Connect"
            description="Open to internship and entry-level backend opportunities. Feel free to reach out about roles, projects, or collaboration."
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability */}
            <div className="reveal bg-surface border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="avail-dot w-2 h-2 rounded-full bg-success" />
                <span className="font-mono text-xs text-success">
                  {PERSONAL.availability}
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Available for backend internships and entry-level roles in India and remotely. Feel free to reach out — I respond to all messages.
              </p>
            </div>

            {/* Location */}
            <div className="reveal reveal-delay-1 flex items-center gap-3 px-5 py-4 bg-surface border border-border rounded-xl">
              <div className="p-2 rounded-lg bg-accent/10">
                <IconMapPin size={16} className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                  Location
                </p>
                <p className="text-text-secondary text-sm">
                  {PERSONAL.location} · Open to Remote
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="reveal reveal-delay-2 space-y-3">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                Contact via
              </p>
              {socialLinks.map(({ label, value, href, icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-border-light hover:bg-surface-2 transition-all group"
                  aria-label={`Contact via ${label}`}
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    {icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="text-text-secondary text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form — 3 cols */}
          <div className="lg:col-span-3">
            <div className="reveal reveal-delay-1 bg-surface border border-border rounded-xl p-6 sm:p-8">
              <h3
                className="font-display text-lg font-semibold text-text-primary mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                aria-label="Contact form"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-[11px] text-text-muted uppercase tracking-widest mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[11px] text-text-muted uppercase tracking-widest mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-[11px] text-text-muted uppercase tracking-widest mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Backend Internship Opportunity"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[11px] text-text-muted uppercase tracking-widest mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Saurabh, I'd like to discuss..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  disabled={status === "sending"}
                  ariaLabel="Send message"
                >
                  {status === "sent" ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <IconSend size={16} />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="font-mono text-[11px] text-text-muted text-center">
                  This will open your email client with your message pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
