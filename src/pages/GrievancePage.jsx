import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const GrievancePage = () => {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8"
      >
        <h1 className="text-3xl font-bold text-slate-900">Contact & Grievance Redressal</h1>
        <p className="mt-2 text-sm text-slate-500">For legal notice, grievance, and complaint submissions</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Institution</p>
            <p className="mt-1 text-sm text-slate-600">Dynamic Campus</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Jurisdiction</p>
            <p className="mt-1 text-sm text-slate-600">Chaurasiya Chowk, Hajipur, Vaishali, Bihar, India</p>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm text-slate-700">
          <div className="flex items-start gap-2 rounded-xl border border-slate-200 p-3">
            <MapPin className="mt-0.5 h-4 w-4 text-slate-700" />
            <span>Dynamic Coaching Centre / Dynamic Public School, Chaurasiya Chowk, Hajipur, Vaishali, Bihar</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 p-3">
            <Phone className="h-4 w-4 text-slate-700" />
            <a href="tel:+919630020827" className="hover:text-blue-700">+91 96300 20827</a>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 p-3">
            <Mail className="h-4 w-4 text-slate-700" />
            <a href="mailto:info@dynamiccampus.in" className="hover:text-blue-700">info@dynamiccampus.in</a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-sm text-blue-900">
          <p className="font-semibold">Submission Note</p>
          <p className="mt-1">
            Please include your full name, contact number, student details (if applicable), and relevant
            documents while raising a grievance or legal notice to ensure timely resolution.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default GrievancePage;
