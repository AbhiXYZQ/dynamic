import { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react";
import Footer from "../components/layout/Footer";

const roleTabs = [
  { id: "student", label: "Student" },
  { id: "admin", label: "Admin" },
];

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const panelTitle = useMemo(
    () => (activeTab === "student" ? "Student Login" : "Admin/Staff Login"),
    [activeTab]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (!normalizedEmail || !normalizedPassword) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    const loginPayload = {
      role: activeTab,
      email: normalizedEmail,
      password: normalizedPassword,
      requestedAt: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);
      await signInWithEmailAndPassword(auth, normalizedEmail, normalizedPassword);
      navigate("/admin");
    } catch (error) {
      setErrorMessage(error && error.message ? error.message : "Unable to login right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Logo and Brand */}
      <Link to="/" className="mb-8 flex items-center gap-3 text-white hover:opacity-90 transition">
        <img src="/images/main_logo.png" alt="Dynamic Campus Logo" className="h-12 w-12 rounded-full shadow-lg border-2 border-white/30 bg-white/80" />
        <span className="text-2xl font-bold tracking-tight drop-shadow-lg">Dynamic Campus</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-blue-200/30 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
      >
        {/* Back to Home */}
        <Link to="/" className="mb-4 flex items-center gap-2 text-blue-200 hover:text-white transition text-sm font-medium">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        {/* Role Tabs */}
        <div className="rounded-full bg-white/10 p-1 mb-4">
          <div className="flex items-center">
            {roleTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? "bg-white text-blue-900 shadow" : "text-blue-100 hover:bg-white/10"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="login-role-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white/80"
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-blue-900" : "text-blue-100"}`}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "student" ? -14 : 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "student" ? 14 : -14 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2"
          >
            <h1 className="text-2xl font-bold text-white drop-shadow">{panelTitle}</h1>
            <p className="mt-1 text-sm text-blue-100">Access your Dynamic Campus portal securely.</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-300" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-blue-200/20 bg-white/20 py-3 pl-10 pr-3 text-sm text-white placeholder:text-blue-200 outline-none transition focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-blue-200/20 bg-white/20 py-3 pl-10 pr-11 text-sm text-white placeholder:text-blue-200 outline-none transition focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-200 transition hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {errorMessage ? <p className="text-sm text-rose-300">{errorMessage}</p> : null}

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-200 transition hover:text-white"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                    Signing in...
                  </span>
                ) : "Login"}
              </button>
            </form>
          </motion.div>
        </AnimatePresence>
      </motion.div>

    </section>
  );
};

export default LoginPage;
