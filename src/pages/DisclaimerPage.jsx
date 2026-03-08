import { motion } from "framer-motion";

const DisclaimerPage = () => {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8"
      >
        <h1 className="text-3xl font-bold text-slate-900">Disclaimer</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 05 March 2026</p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700">
          <p>
            The information on this website is published in good faith for general educational and admission
            awareness only.
          </p>

          <div>
            <h2 className="text-base font-semibold text-slate-900">1. No Guaranteed Results</h2>
            <p className="mt-1">
              Academic outcomes depend on student effort, attendance and multiple external factors. Past
              performance or testimonials do not guarantee future results.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">2. External Links</h2>
            <p className="mt-1">
              This site may contain links to third-party platforms. We are not responsible for content, privacy,
              or practices of external websites.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">3. Accuracy of Information</h2>
            <p className="mt-1">
              While we aim to keep all details accurate and updated, we make no warranties about completeness,
              reliability  or timeliness of information.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">4. Professional Advice</h2>
            <p className="mt-1">
              Website content should not be treated as legal, financial  or official policy advice. For confirmed
              institute decisions, contact our office directly.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DisclaimerPage;
