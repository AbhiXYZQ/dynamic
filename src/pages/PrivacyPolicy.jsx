import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sectionHeadingClass = "text-xl font-semibold text-slate-900";
const paragraphClass = "text-slate-600 leading-relaxed";

const PrivacyPolicy = () => {
  return (
    <section className="bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-slate-200/80"
      >
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
          <p className="mt-3 text-sm font-medium text-slate-500">Last updated: March 2026</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <div className="space-y-6">
            <section>
              <h2 className={sectionHeadingClass}>Information We Collect</h2>
              <p className={`${paragraphClass} mt-3`}>
                We may collect personal details submitted through enquiry forms, including student or parent name,
                phone number, and email address. This information is voluntarily provided by users who seek admission
                guidance or institutional communication.
              </p>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>How We Use Your Info</h2>
              <p className={`${paragraphClass} mt-3`}>
                Your information is used to contact you for admission counselling, answer academic queries, provide
                enrollment updates, and share relevant notices related to school and coaching programs.
              </p>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>Data Security</h2>
              <p className={`${paragraphClass} mt-3`}>
                We apply reasonable technical and organizational safeguards to secure your data. Information is stored
                on protected systems and may be managed through secure infrastructure (including Firebase-backed tools
                or equivalent secure servers) to reduce unauthorized access risks.
              </p>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>Cookies Policy</h2>
              <p className={`${paragraphClass} mt-3`}>
                This website may use essential cookies or similar technologies to improve browsing experience,
                performance, and basic analytics. You can manage cookie preferences through browser settings. Disabling
                some cookies may affect certain website features.
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
