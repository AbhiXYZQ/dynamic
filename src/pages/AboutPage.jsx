import { motion } from "framer-motion";
import {
  BookOpen,
  Bus,
  Eye,
  FlaskConical,
  LibraryBig,
  MonitorSmartphone,
  Shield,
  Target,
  Trophy,
} from "lucide-react";

const missionVisionValues = [
  {
    title: "Our Mission",
    description:
      "To nurture curious minds through disciplined learning systems, modern pedagogy, and deep conceptual clarity from foundation to competitive readiness.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted educational ecosystem in Bihar where every learner receives quality mentorship, confidence, and direction for long-term success.",
    icon: Eye,
  },
  {
    title: "Our Values",
    description:
      "Integrity, consistency, student-first mentorship, and holistic development are at the core of every classroom practice and institutional decision.",
    icon: Shield,
  },
];

const legacyItems = [
  {
    year: "1999",
    title: "Foundation of Dynamic Coaching",
    description:
      "Dynamic Coaching Centre began with a clear commitment to disciplined academics and result-oriented preparation.",
  },
  {
    year: "2015",
    title: "First District Topper in JEE",
    description:
      "A major milestone that established Dynamic Campus as a serious center for high-performance competitive guidance.",
  },
  {
    year: "2020",
    title: "Launch of Dynamic Public School",
    description:
      "Expanded into foundational schooling with a focus on care, values, activity-based learning, and concept building.",
  },
  {
    year: "Present",
    title: "2000+ Success Stories",
    description:
      "Today, Dynamic Campus stands as a dual-wing academic institution shaping board achievers and competitive champions.",
  },
];

const facilities = [
  {
    title: "Smart Classrooms",
    description: "Interactive digital teaching aids for concept-rich and engaging classroom delivery.",
    icon: MonitorSmartphone,
  },
  {
    title: "Hi-Tech Labs",
    description: "Modern science and computer labs for practical exploration and analytical thinking.",
    icon: FlaskConical,
  },
  {
    title: "Rich Library",
    description: "Curated academic and reference resources that strengthen reading depth and exam readiness.",
    icon: LibraryBig,
  },
  {
    title: "Transport Facility",
    description: "Reliable and safe transportation support connecting students across Hajipur and nearby areas.",
    icon: Bus,
  },
];

const AboutPage = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 px-6 py-16 text-white shadow-xl shadow-emerald-900/20 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-100">
            <Trophy size={14} />
            Dynamic Campus Legacy
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">27 Years of Excellence in Education</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-emerald-100 md:text-base">
            Since 1999, Dynamic Campus has consistently delivered academic growth through disciplined systems,
            dedicated mentorship, and a learning culture that balances strong values with modern outcomes.
          </p>
        </motion.div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-yellow-300/20 blur-3xl" />
      </section>

      <section className="mt-10 grid gap-6 rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/10 lg:grid-cols-2 lg:p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-slate-100 to-emerald-50 p-4 shadow-lg shadow-emerald-900/10"
          >
            <div className="flex h-[350px] items-center justify-center rounded-2xl border-2 border-dashed border-emerald-200 bg-white/60 text-center">
              <div>
                <p className="text-sm font-semibold text-emerald-900">Director&apos;s Portrait</p>
                <p className="mt-1 text-xs text-slate-500">Professional Image Placeholder</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="text-sm font-semibold text-emerald-700">Director&apos;s Message</p>
          <h2 className="mt-2 text-3xl font-bold text-emerald-900">Discipline, Direction, and Distinction</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            At Dynamic Campus, we believe true education is built on consistency, character, and clarity.
            Our classrooms are designed to cultivate strong academic fundamentals while nurturing confidence,
            communication, and values. Every student is guided with structured planning, regular assessment,
            and personalized mentorship so that learning is not only exam-focused, but life-enriching.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Over the years, our commitment to disciplined systems and student-centered teaching has translated
            into board achievements, competitive outcomes, and holistic growth. We remain dedicated to shaping
            responsible learners who are prepared for both opportunities and challenges ahead.
          </p>
          <p className="mt-6 text-lg italic text-emerald-800">With best wishes,</p>
          <p className="text-2xl font-semibold tracking-wide text-emerald-900">Dr. Tarkeshwar Thakur, Ph.D.</p>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Director, Dynamic Campus | Retired Vice Principal, Women&apos;s College Hajipur
          </p>
        </motion.div>
      </section>

      <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold text-emerald-900">Mission, Vision & Values</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            The pillars that shape our academic culture and define our long-term commitment to student success.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="mt-6 grid gap-5 md:grid-cols-3"
        >
          {missionVisionValues.map((item) => (
            <motion.article
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="rounded-3xl border border-emerald-100/80 bg-white/70 p-6 shadow-xl shadow-emerald-900/10 backdrop-blur-md"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <item.icon size={18} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-emerald-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mt-10 rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/10 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold text-emerald-900">Our Legacy</h2>
          <p className="mt-2 text-sm text-slate-600">A journey of growth, trust, and measurable outcomes over 27 years.</p>
        </motion.div>

        <div className="relative mt-8 space-y-6 before:absolute before:left-[17px] before:top-0 before:h-full before:w-[2px] before:bg-emerald-200">
          {legacyItems.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-12"
            >
              <span className="absolute left-0 top-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-xs font-bold text-emerald-900">
                {index + 1}
              </span>
              <div className="rounded-2xl border border-emerald-100 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{item.year}</p>
                <h3 className="mt-1 text-lg font-bold text-emerald-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold text-emerald-900">Infrastructure & Facilities</h2>
          <p className="mt-2 text-sm text-slate-600">A premium campus environment designed for focused and joyful learning.</p>
        </motion.div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => (
            <motion.article
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-900/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <facility.icon size={18} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-emerald-900">{facility.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{facility.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-slate-50 p-6 shadow-lg shadow-emerald-900/10 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <BookOpen size={18} className="text-emerald-800" />
          <p className="text-sm font-semibold text-emerald-900 md:text-base">
            Dynamic Campus continues to build a future-ready generation with discipline, excellence, and purpose.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
