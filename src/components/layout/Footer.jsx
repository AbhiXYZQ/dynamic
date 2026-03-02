import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  School2,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Gallery", to: "/gallery" },
  { label: "Notice Board", to: "/notices" },
  { label: "Contact", to: "/contact" },
];

const wings = [
  "Dynamic Public School (Playgroup to Class 6)",
  "Dynamic Coaching Centre (Class 7 to 12)",
  "JEE Foundation & Advanced Batches",
  "NEET Focused Medical Entrance Programs",
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-emerald-100 bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 rounded-3xl border border-emerald-100/80 bg-white/80 p-8 shadow-xl shadow-emerald-900/10 backdrop-blur-md md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-900 text-white shadow-lg shadow-emerald-900/30">
                <School2 size={20} />
              </span>
              <div>
                <h3 className="text-base font-bold text-emerald-900">Dynamic Campus</h3>
                <p className="text-xs text-slate-600">Hajipur, Bihar</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Building confident learners from early childhood to competitive excellence through values,
              discipline, and modern teaching pedagogy.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="rounded-xl border border-emerald-100 bg-white p-2 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-emerald-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-900">Academic Wings</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {wings.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-900">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-emerald-700" />
                <span>Near Hajipur Junction, Hajipur, Vaishali, Bihar - 844101</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-700" />
                <a href="tel:+919876543210" className="transition hover:text-emerald-700">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-700" />
                <a href="mailto:info@dynamiccampus.in" className="transition hover:text-emerald-700">
                  info@dynamiccampus.in
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-emerald-100 pt-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Dynamic Campus. All rights reserved.</p>
          <p>Designed for future-ready learning with care, rigor, and excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
