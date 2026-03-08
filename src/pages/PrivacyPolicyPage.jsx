import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8"
      >
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 05 March 2026</p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700">
          <p>
            Dynamic Campus ("we", "our", "us") respects your privacy. This policy explains how we collect,
            use, store, and protect personal information shared through this website and admission enquiry forms.
          </p>

          <div>
            <h2 className="text-base font-semibold text-slate-900">1. Information We Collect</h2>
            <p className="mt-1">
              We may collect student name, parent name, phone number, class/program preference, and query details
              submitted through contact/enquiry forms.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">2. How We Use Information</h2>
            <p className="mt-1">
              We use the data to respond to enquiries, provide admission counselling, share academic updates,
              and improve support services.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">3. Data Sharing</h2>
            <p className="mt-1">
              We do not sell personal data. Information may be shared only with authorized internal staff or when
              required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">4. Data Security</h2>
            <p className="mt-1">
              We apply reasonable technical and administrative safeguards to protect submitted information.
              However, no internet transmission is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">5. Your Rights</h2>
            <p className="mt-1">
              You may request correction or deletion of your submitted personal information by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">6. Contact for Privacy Requests</h2>
            <p className="mt-1">
              Email: info@dynamiccampus.in | Phone: +91 96300 20827
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicyPage;
