"use client";

import { useState} from "react";
import { PERSONAL } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  IconEmail,
  IconGithub,
  IconLinkedin,
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
  return (
    <section
      id="contact"
      className="section-padding bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Let&apos;s"
            highlight="Connect"
          />
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-5 gap-6 mt-10 items-stretch">

          {/* LEFT: Social Links */}
          <div className="lg:col-span-2 flex">
            <div className="reveal reveal-delay-1 flex flex-col gap-4 w-full h-full">

              {socialLinks.map(({ label, value, href, icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl 
                  hover:border-accent/40 hover:bg-surface-2 transition-all duration-300 group min-h-[80px]"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition">
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

          {/* RIGHT: What I'm Looking For */}
          <div className="lg:col-span-3 flex">
            <div className="reveal reveal-delay-1 bg-surface border border-border rounded-xl 
            p-6 sm:p-7 w-full h-full max-w-xl">

              <h3 className="font-display text-lg font-semibold text-text-primary mb-5">
                What I&apos;m Looking For
              </h3>

              <ul className="space-y-2 text-sm text-text-secondary leading-relaxed">
                <li>• Backend internship or entry-level role</li>
                <li>• Work involving Spring Boot & REST APIs</li>
                <li>• Opportunity to contribute to real backend systems</li>
                <li>• Learning from experienced engineers</li>
                <li>• Improving production-level backend skills</li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}