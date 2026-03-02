import { useEffect } from "react";
import { motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import Toppers from "./pages/Toppers";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const pageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const PagePlaceholder = ({ title, subtitle }) => (
  <motion.section
    variants={pageVariants}
    initial="hidden"
    animate="visible"
    className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
  >
    <div className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-xl shadow-emerald-900/10">
      <h1 className="text-3xl font-bold text-emerald-900 md:text-4xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-slate-600">{subtitle}</p>
    </div>
  </motion.section>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/toppers" element={<Toppers />} />
          <Route
            path="/academics"
            element={<PagePlaceholder title="Academics" subtitle="Academics page scaffold ready." />}
          />
          <Route path="/gallery" element={<PagePlaceholder title="Gallery" subtitle="Gallery page scaffold ready." />} />
          <Route
            path="/notices"
            element={<PagePlaceholder title="Notice Board" subtitle="Notice Board page scaffold ready." />}
          />
          <Route path="/contact" element={<PagePlaceholder title="Contact" subtitle="Contact page scaffold ready." />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
