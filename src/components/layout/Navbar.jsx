import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BellRing,
  BookOpen,
  ChevronRight,
  Home,
  Image,
  Info,
  LogIn,
  Menu,
  Phone,
  School2,
  Trophy,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", to: "/", icon: Home, subtitle: "Campus overview" },
  { label: "About", to: "/about", icon: Info, subtitle: "Legacy & leadership" },
  { label: "Academics", to: "/academics", icon: BookOpen, subtitle: "Programs & batches" },
  { label: "Gallery", to: "/gallery", icon: Image, subtitle: "Campus moments" },
  { label: "Notice Board", to: "/notices", icon: BellRing, subtitle: "Latest updates" },
  { label: "Contact", to: "/contact", icon: Phone, subtitle: "Admissions help" },
  { label: "Login", to: "/login", icon: LogIn, subtitle: "Student/Admin portal" },
];

const themeByRoute = {
  home: {
    border: "border-emerald-100/70",
    shadowScrolled: "shadow-emerald-900/10",
    shadowTop: "shadow-emerald-900/5",
    logoGradient: "from-emerald-600 to-emerald-900",
    logoShadow: "shadow-emerald-900/30",
    brandText: "text-emerald-900",
    active: "bg-emerald-600 text-white shadow-md shadow-emerald-900/20",
    inactive: "text-slate-700 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-emerald-800 hover:shadow-md hover:shadow-emerald-900/10",
    cta: "bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-900/20",
    menuBtn: "border-emerald-100 text-emerald-900",
    mobileBox: "border-emerald-100/80 shadow-emerald-900/10",
    mobileActive: "bg-emerald-600 text-white",
    mobileInactive: "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800",
    navGlow: "bg-gradient-to-r from-emerald-100/40 via-white/10 to-emerald-100/35",
  },
  about: {
    border: "border-indigo-100/70",
    shadowScrolled: "shadow-indigo-900/10",
    shadowTop: "shadow-indigo-900/5",
    logoGradient: "from-indigo-600 to-indigo-900",
    logoShadow: "shadow-indigo-900/30",
    brandText: "text-indigo-900",
    active: "bg-indigo-600 text-white shadow-md shadow-indigo-900/20",
    inactive: "text-slate-700 hover:-translate-y-0.5 hover:bg-indigo-50 hover:text-indigo-800 hover:shadow-md hover:shadow-indigo-900/10",
    cta: "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-900/20",
    menuBtn: "border-indigo-100 text-indigo-900",
    mobileBox: "border-indigo-100/80 shadow-indigo-900/10",
    mobileActive: "bg-indigo-600 text-white",
    mobileInactive: "text-slate-700 hover:bg-indigo-50 hover:text-indigo-800",
    navGlow: "bg-gradient-to-r from-indigo-100/40 via-white/10 to-indigo-100/35",
  },
  academics: {
    border: "border-cyan-100/70",
    shadowScrolled: "shadow-cyan-900/10",
    shadowTop: "shadow-cyan-900/5",
    logoGradient: "from-cyan-600 to-blue-900",
    logoShadow: "shadow-cyan-900/30",
    brandText: "text-cyan-900",
    active: "bg-cyan-600 text-white shadow-md shadow-cyan-900/20",
    inactive: "text-slate-700 hover:-translate-y-0.5 hover:bg-cyan-50 hover:text-cyan-800 hover:shadow-md hover:shadow-cyan-900/10",
    cta: "bg-cyan-600 hover:bg-cyan-700 hover:shadow-cyan-900/20",
    menuBtn: "border-cyan-100 text-cyan-900",
    mobileBox: "border-cyan-100/80 shadow-cyan-900/10",
    mobileActive: "bg-cyan-600 text-white",
    mobileInactive: "text-slate-700 hover:bg-cyan-50 hover:text-cyan-800",
    navGlow: "bg-gradient-to-r from-cyan-100/40 via-white/10 to-blue-100/35",
  },
  gallery: {
    border: "border-violet-100/70",
    shadowScrolled: "shadow-violet-900/10",
    shadowTop: "shadow-violet-900/5",
    logoGradient: "from-violet-600 to-purple-900",
    logoShadow: "shadow-violet-900/30",
    brandText: "text-violet-900",
    active: "bg-violet-600 text-white shadow-md shadow-violet-900/20",
    inactive: "text-slate-700 hover:-translate-y-0.5 hover:bg-violet-50 hover:text-violet-800 hover:shadow-md hover:shadow-violet-900/10",
    cta: "bg-violet-600 hover:bg-violet-700 hover:shadow-violet-900/20",
    menuBtn: "border-violet-100 text-violet-900",
    mobileBox: "border-violet-100/80 shadow-violet-900/10",
    mobileActive: "bg-violet-600 text-white",
    mobileInactive: "text-slate-700 hover:bg-violet-50 hover:text-violet-800",
    navGlow: "bg-gradient-to-r from-violet-100/40 via-white/10 to-purple-100/35",
  },
  notices: {
    border: "border-blue-100/70",
    shadowScrolled: "shadow-blue-900/10",
    shadowTop: "shadow-blue-900/5",
    logoGradient: "from-blue-600 to-blue-900",
    logoShadow: "shadow-blue-900/30",
    brandText: "text-blue-900",
    active: "bg-blue-600 text-white shadow-md shadow-blue-900/20",
    inactive: "text-slate-700 hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-800 hover:shadow-md hover:shadow-blue-900/10",
    cta: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-900/20",
    menuBtn: "border-blue-100 text-blue-900",
    mobileBox: "border-blue-100/80 shadow-blue-900/10",
    mobileActive: "bg-blue-600 text-white",
    mobileInactive: "text-slate-700 hover:bg-blue-50 hover:text-blue-800",
    navGlow: "bg-gradient-to-r from-blue-100/40 via-white/10 to-blue-100/35",
  },
  contact: {
    border: "border-sky-100/70",
    shadowScrolled: "shadow-sky-900/10",
    shadowTop: "shadow-sky-900/5",
    logoGradient: "from-sky-600 to-blue-900",
    logoShadow: "shadow-sky-900/30",
    brandText: "text-sky-900",
    active: "bg-sky-600 text-white shadow-md shadow-sky-900/20",
    inactive: "text-slate-700 hover:-translate-y-0.5 hover:bg-sky-50 hover:text-sky-800 hover:shadow-md hover:shadow-sky-900/10",
    cta: "bg-sky-600 hover:bg-sky-700 hover:shadow-sky-900/20",
    menuBtn: "border-sky-100 text-sky-900",
    mobileBox: "border-sky-100/80 shadow-sky-900/10",
    mobileActive: "bg-sky-600 text-white",
    mobileInactive: "text-slate-700 hover:bg-sky-50 hover:text-sky-800",
    navGlow: "bg-gradient-to-r from-sky-100/45 via-white/10 to-blue-100/35",
  },
  login: {
    border: "border-slate-200/70",
    shadowScrolled: "shadow-slate-900/15",
    shadowTop: "shadow-slate-900/10",
    logoGradient: "from-slate-700 to-slate-900",
    logoShadow: "shadow-slate-900/40",
    brandText: "text-slate-900",
    active: "bg-slate-800 text-white shadow-md shadow-slate-900/25",
    inactive: "text-slate-700 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-slate-900 hover:shadow-md hover:shadow-slate-900/10",
    cta: "bg-slate-800 hover:bg-slate-900 hover:shadow-slate-900/20",
    menuBtn: "border-slate-200 text-slate-900",
    mobileBox: "border-slate-200/80 shadow-slate-900/15",
    mobileActive: "bg-slate-800 text-white",
    mobileInactive: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
    navGlow: "bg-gradient-to-r from-slate-100/45 via-white/10 to-slate-200/35",
  },
};

const getRouteThemeKey = (pathname) => {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/academics")) return "academics";
  if (pathname.startsWith("/gallery")) return "gallery";
  if (pathname.startsWith("/notices")) return "notices";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/login") || pathname.startsWith("/LoginPage")) return "login";
  return "home";
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const theme = themeByRoute[getRouteThemeKey(location.pathname)];
  const themeKey = getRouteThemeKey(location.pathname);
  const ctaTo = "/toppers";
  const ctaLabel = "Top Performers";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 md:px-6 md:pt-3">
      <nav
        className={`relative mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md md:px-6 ${theme.border} ${theme.shadowScrolled}`}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`nav-glow-${themeKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-none absolute inset-0 z-0 rounded-2xl ${theme.navGlow}`}
          />
        </AnimatePresence>

        <Link to="/" className="group relative z-10 flex items-center gap-3">
          <span
            className={`interactive-card flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg group-hover:rotate-3 ${theme.logoGradient} ${theme.logoShadow}`}
          >
            <School2 size={20} />
          </span>
          <div>
            <p className={`text-sm font-semibold tracking-wide md:text-base ${theme.brandText}`}>Dynamic Campus</p>
            <p className="text-xs text-slate-600">Chaurasiya Chowk, Hajipur</p>
          </div>
        </Link>

        <div className="relative z-10 hidden items-center gap-2 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive ? theme.active : theme.inactive
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}

        </div>

        <div className="relative z-10 hidden lg:block">
          <Link
            to={ctaTo}
            className="interactive-button group relative inline-flex overflow-hidden rounded-xl border border-amber-300/70 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2 text-sm font-semibold text-amber-100 shadow-lg shadow-slate-900/30"
          >
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [0.35, 0.9, 0.35] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0 rounded-xl border border-amber-200/80"
            />
            <motion.span
              aria-hidden="true"
              animate={{ x: ["-150%", "260%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-amber-200/35 to-transparent"
            />
            <span className="relative inline-flex items-center gap-2 tracking-wide">
              <Trophy size={16} /> {ctaLabel}
            </span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`relative z-10 inline-flex items-center justify-center rounded-xl border bg-white/80 p-2 shadow-sm transition hover:bg-white lg:hidden ${theme.menuBtn}`}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-3 right-3 top-full mt-2 md:left-6 md:right-6 lg:hidden"
          >
            <div className={`mx-auto w-full max-w-7xl space-y-1 overflow-hidden rounded-2xl border bg-white/95 p-3 shadow-xl backdrop-blur-md ${theme.mobileBox}`}>
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive ? theme.mobileActive : theme.mobileInactive
                      }`
                    }
                  >
                    <span className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </span>
                    <ChevronRight size={16} />
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to={ctaTo}
                className="interactive-button group relative mt-2 inline-flex w-full overflow-hidden rounded-xl border border-amber-300/70 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-3 text-sm font-semibold text-amber-100 shadow-md shadow-slate-900/30"
              >
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [0.35, 0.9, 0.35] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-0 rounded-xl border border-amber-200/80"
                />
                <motion.span
                  aria-hidden="true"
                  animate={{ x: ["-150%", "260%"] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-amber-200/35 to-transparent"
                />
                <span className="relative inline-flex w-full items-center justify-center gap-2 tracking-wide">
                  <Trophy size={16} /> {ctaLabel}
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
