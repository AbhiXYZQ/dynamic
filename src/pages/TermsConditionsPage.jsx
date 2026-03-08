import { motion } from "framer-motion";

const TermsConditionsPage = () => {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8"
      >
        <h1 className="text-3xl font-bold text-slate-900">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 05 March 2026</p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700">
          <p>
            By accessing and using the Dynamic Campus website, you agree to these terms and conditions.
            If you do not agree, please discontinue use of this website.
          </p>

          <div>
            <h2 className="text-base font-semibold text-slate-900">1. Website Content</h2>
            <p className="mt-1">
              Content is provided for general academic and admission information. We may update content at any
              time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">2. Admission & Programme Information</h2>
            <p className="mt-1">
              Course details, schedules and eligibility shown online are indicative. Final admission decisions and
              policies are governed by institute rules and official communication.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">3. User Conduct</h2>
            <p className="mt-1">
              Users must not misuse forms, submit false information, attempt unauthorized access  or disrupt
              website functionality.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">4. Intellectual Property</h2>
            <p className="mt-1">
              Logos, design elements, text and media on this site are the property of Dynamic Campus unless
              otherwise stated. Unauthorized reproduction is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">5. Limitation of Liability</h2>
            <p className="mt-1">
              Dynamic Campus is not liable for indirect or incidental losses arising from use of this website or
              reliance on website content.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">6. Governing Jurisdiction</h2>
            <p className="mt-1">
              These terms are governed by applicable laws of India. Jurisdiction shall remain with courts having
              authority over Hajipur, Bihar.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TermsConditionsPage;
