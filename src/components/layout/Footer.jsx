import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Facebook,
  Github,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Gallery", to: "/gallery" },
  { label: "Notice Board", to: "/notices" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Contact / Grievance", to: "/grievance" },
];

const academicLinks = [
  "Dynamic Public School (Playgroup to Class 6)",
  "Dynamic Coaching Centre (Class 7 to 12)",
  "Foundation & Scholarship Batches",
  "Board Excellence & Career Guidance Programs",
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const devLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/AbhiXYZQ" },
  { icon: Mail, label: "Contact Developer", href: "mailto:abhixyzq@gmail.com" },
  { icon: Globe, label: "Visit Nainix", href: "https://nainix.me" },
  { icon: Linkedin, label: "LinkedIn /in/abhixyzq", href: "https://linkedin.com/in/abhixyzq" },
];

const isValidExternalLink = (url) => typeof url === "string" && url.startsWith("http");

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <footer className="relative mt-20 border-t border-slate-800 bg-slate-950 text-slate-200">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="interactive-card flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white shadow-lg shadow-emerald-900/30">
                  <img src="/school-logo.png" alt="Dynamic Campus logo" className="h-full w-full object-cover" loading="eager" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">Dynamic Campus</h3>
                  <p className="text-xs text-slate-400">Chaurasiya Chowk, Hajipur</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Building confident learners from early childhood to competitive excellence through
                values, discipline, and modern teaching pedagogy.
              </p>
              <div className="flex items-center gap-2">
                {socials.map((item) => (
                  isValidExternalLink(item.href) ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="interactive-button rounded-xl border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:border-emerald-400/70 hover:text-emerald-300"
                    >
                      <item.icon size={16} />
                    </a>
                  ) : (
                    <span
                      key={item.label}
                      aria-label={`${item.label} unavailable`}
                      className="rounded-xl border border-slate-800 bg-slate-900/50 p-2 text-slate-500"
                    >
                      <item.icon size={16} />
                    </span>
                  )
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-100">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="interactive-link inline-flex items-center hover:text-emerald-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-100">Academics</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {academicLinks.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-100">Contact Info</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Dynamic Coaching Centre / Dynamic Public School, Chaurasiya Chowk, Hajipur, Vaishali, Bihar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-emerald-400" />
                  <a href="tel:+919876543210" className="interactive-link inline-flex hover:text-emerald-300">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-emerald-400" />
                  <a href="mailto:info@dynamiccampus.in" className="interactive-link inline-flex hover:text-emerald-300">
                    info@dynamiccampus.in
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400 md:justify-start">
              {legalLinks.map((link) => (
                <Link key={link.to} to={link.to} className="interactive-link hover:text-emerald-300">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
              <p>© {new Date().getFullYear()} Dynamic Campus. All rights reserved.</p>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="interactive-button inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400/70 hover:text-white"
              >
                Designed & Developed with <Heart size={13} className="text-rose-400" fill="currentColor" /> by Nainix
              </button>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-6 text-white shadow-2xl shadow-black/40 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-emerald-400/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-14 -right-10 h-36 w-36 rounded-full bg-indigo-400/30 blur-3xl" />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close developer profile"
                className="interactive-button absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20"
              >
                <X size={16} />
              </button>

              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="inline-flex rounded-full border border-emerald-200/40 bg-emerald-300/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
                  Developer Profile
                </span>

                <img
                  src="/images/developer_profile.jpg"
                  alt="Abhishek Kumar"
                  className="mt-4 h-24 w-24 rounded-full border-2 border-white/40 object-cover shadow-lg shadow-emerald-900/30"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=320&q=80";
                  }}
                />

                <h3 className="mt-4 text-2xl font-bold text-white">Abhishek Kumar</h3>
                <p className="mt-1 text-sm font-medium text-emerald-200">
                  Full Stack Developer & Founder at Nainix
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  Crafting premium, high-performance web applications and digital experiences.
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-100">
                    abhixyzq@gmail.com
                  </span>
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-100">
                    nainix.me
                  </span>
                </div>

                <div className="mt-5 flex w-full flex-col gap-2">
                  {devLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="interactive-button inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:border-emerald-300/70 hover:bg-white/20"
                    >
                      <item.icon size={16} /> {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
