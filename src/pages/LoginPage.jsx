import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
      >
        <div className="rounded-full bg-white/10 p-1">
          <div className="flex items-center">
            {roleTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex-1 rounded-full px-4 py-2 text-sm font-semibold"
                >
                  {isActive && (
                    <motion.span
                      layoutId="login-role-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white"
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-slate-900" : "text-slate-200"}`}>{tab.label}</span>
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
            className="mt-7"
          >
            <h1 className="text-2xl font-bold text-white">{panelTitle}</h1>
            <p className="mt-1 text-sm text-slate-300">Access your Dynamic Campus portal securely.</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-sm text-white placeholder:text-gray-300 outline-none transition focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-11 text-sm text-white placeholder:text-gray-300 outline-none transition focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 transition hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {errorMessage ? <p className="text-sm text-rose-300">{errorMessage}</p> : null}

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Signing in..." : "Login"}
              </button>
            </form>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default LoginPage;
