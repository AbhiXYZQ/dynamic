import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sectionHeadingClass = "text-xl font-semibold text-slate-900";
const paragraphClass = "text-slate-600 leading-relaxed";

const Terms = () => {
  return (
    <section className="bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-slate-200/80"
      >
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms & Conditions</h1>
          <p className="mt-3 text-sm font-medium text-slate-500">Last updated: March 2026</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <div className="space-y-6">
            <section>
              <h2 className={sectionHeadingClass}>Admissions Policy</h2>
              <p className={`${paragraphClass} mt-3`}>
                Admissions in school and coaching programs are subject to seat availability, eligibility criteria,
                document verification and institute-level screening norms. Dynamic Campus reserves the right to
                approve, defer  or deny applications based on policy and academic fit.
              </p>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>Fee & Refund Policy</h2>
              <p className={`${paragraphClass} mt-3`}>
                Fee schedules, payment deadlines and applicable charges are communicated at the time of admission.
                Registration fees are non-refundable. Any tuition-related refund, if applicable, is governed strictly
                by written institute policy and management approval.
              </p>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>Code of Conduct</h2>
              <p className={`${paragraphClass} mt-3`}>
                Students are expected to maintain discipline, respect faculty and peers and follow campus rules.
                Misconduct, repeated absenteeism  or policy violations may lead to corrective action, suspension  or
                cancellation of enrollment as per institutional guidelines.
              </p>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>Intellectual Property</h2>
              <p className={`${paragraphClass} mt-3`}>
                Study materials, notes, digital resources, branding assets and website content are intellectual
                property of Dynamic Campus unless otherwise stated. Unauthorized copying, resale  or redistribution is
                strictly prohibited.
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

export default Terms;
