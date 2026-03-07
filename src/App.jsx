import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import SeoManager from "./components/seo/SeoManager";
import AdminDashboard from "./pages/AdminDashboard";
import AcademicsPage from "./pages/AcademicsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import GalleryPage from "./pages/GalleryPage";
import GrievancePage from "./pages/GrievancePage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NoticeBoard from "./pages/NoticeBoard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Toppers from "./pages/Toppers";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();

  const getPageShellTheme = (pathname) => {
    if (pathname === "/") return { key: "home", bg: "bg-gradient-to-b from-emerald-50/40 via-slate-50 to-slate-50" };
    if (pathname.startsWith("/about")) return { key: "about", bg: "bg-gradient-to-b from-indigo-50/55 via-slate-50 to-slate-50" };
    if (pathname.startsWith("/academics")) return { key: "academics", bg: "bg-gradient-to-b from-cyan-50/50 via-slate-50 to-slate-50" };
    if (pathname.startsWith("/gallery")) return { key: "gallery", bg: "bg-gradient-to-b from-violet-50/55 via-slate-50 to-slate-50" };
    if (pathname.startsWith("/notices")) return { key: "notices", bg: "bg-gradient-to-b from-blue-50/55 via-slate-50 to-slate-50" };
    if (pathname.startsWith("/contact")) return { key: "contact", bg: "bg-gradient-to-b from-sky-50/55 via-slate-50 to-slate-50" };
    if (pathname.startsWith("/admin") || pathname.startsWith("/AdminDashboard")) {
      return { key: "admin", bg: "bg-slate-50" };
    }
    if (pathname.startsWith("/login") || pathname.startsWith("/LoginPage")) {
      return { key: "login", bg: "bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950" };
    }
    if (pathname.startsWith("/privacy-policy")) return { key: "privacy", bg: "bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50" };
    if (pathname.startsWith("/terms") || pathname.startsWith("/terms-conditions")) {
      return { key: "terms", bg: "bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50" };
    }
    if (pathname.startsWith("/disclaimer")) return { key: "disclaimer", bg: "bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50" };
    if (pathname.startsWith("/grievance")) return { key: "grievance", bg: "bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50" };
    return { key: "default", bg: "bg-slate-50" };
  };

  const theme = getPageShellTheme(location.pathname);
  const isAdminRoute = location.pathname.startsWith("/admin") || location.pathname.startsWith("/AdminDashboard");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-800">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-none absolute inset-0 ${theme.bg}`}
        />
      </AnimatePresence>

      <div className="relative z-10">
        <ScrollToTop />
        <SeoManager />
        {!isAdminRoute && <Navbar />}
        <main className={isAdminRoute ? "" : "pt-24 sm:pt-28"}>
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/toppers" element={<Toppers />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/notices" element={<NoticeBoard />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/grievance" element={<GrievancePage />} />
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </div>
  );
};

export default App;
