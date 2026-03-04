import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, School2, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Gallery", to: "/gallery" },
  { label: "Notice Board", to: "/notices" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-emerald-100/70 px-4 py-3 backdrop-blur-md transition-all duration-500 md:px-6 ${
          isScrolled
            ? "bg-white/90 shadow-xl shadow-emerald-900/10"
            : "bg-white/75 shadow-lg shadow-emerald-900/5"
        }`}
      >
        <Link to="/" className="group flex items-center gap-3">
          <span className="interactive-card flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-900 text-white shadow-lg shadow-emerald-900/30 group-hover:rotate-3">
            <School2 size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-wide text-emerald-900 md:text-base">Dynamic Campus</p>
            <p className="text-xs text-slate-600">Hajipur, Bihar</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20"
                    : "text-slate-700 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-emerald-800 hover:shadow-md hover:shadow-emerald-900/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="interactive-button inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 hover:shadow-emerald-900/20"
          >
            Enquire Now <ChevronRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-emerald-100 bg-white/80 p-2 text-emerald-900 shadow-sm shadow-emerald-900/10 transition hover:bg-white lg:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-3 right-3 top-full mt-2 md:left-6 md:right-6 lg:hidden"
          >
            <div className="mx-auto w-full max-w-7xl space-y-1 overflow-hidden rounded-2xl border border-emerald-100/80 bg-white/95 p-3 shadow-xl shadow-emerald-900/10 backdrop-blur-md">
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
                        isActive
                          ? "bg-emerald-600 text-white"
                          : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                      }`
                    }
                  >
                    {item.label}
                    <ChevronRight size={16} />
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="interactive-button mt-2 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
