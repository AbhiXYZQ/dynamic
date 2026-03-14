import { motion } from "framer-motion";
import {
  BookOpen,
  Bus,
  Eye,
  FlaskConical,
  Linkedin,
  LibraryBig,
  Mail,
  MonitorSmartphone,
  Shield,
  Target,
  Trophy,
} from "lucide-react";

const missionVisionValues = [
  {
    title: "Our Mission",
    description:
      "To nurture curious minds through disciplined learning systems, modern pedagogy and deep conceptual clarity from foundation to competitive readiness.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted educational ecosystem in Bihar where every learner receives quality mentorship, confidence and direction for long-term success.",
    icon: Eye,
  },
  {
    title: "Our Values",
    description:
      "Integrity, consistency, student-first mentorship and holistic development are at the core of every classroom practice and institutional decision.",
    icon: Shield,
  },
];

const legacyItems = [
  {
    year: "2011",
    title: "Strengthening Core Academic Model",
    description:
      "Structured pedagogy, daily discipline and concept-first teaching started shaping consistent board outcomes.",
  },
  {
    year: "2014",
    title: "Foundation & Olympiad Focus Introduced",
    description:
      "Junior batches adopted NTSE/Olympiad-focused learning tracks for early analytical skill development.",
  },
  {
    year: "2017",
    title: "Competitive Test-Series System",
    description:
      "Weekly assessments and performance analytics were institutionalized for classes 9-12 and aspirants.",
  },
  {
    year: "2020",
    title: "Launch of Dynamic Public School",
    description:
      "Public School wing expanded our ecosystem from Playgroup to Class 6 with activity-based foundational learning.",
  },
  {
    year: "2023",
    title: "Advanced Mentorship & Doubt Clinics",
    description:
      "Dedicated doubt counters, micro-batch mentoring and focused revision blocks improved rank conversion.",
  },
  {
    year: "2026",
    title: "Dual-Wing Excellence at Scale",
    description:
      "Today, Dynamic Campus stands strong with school and coaching integration driving board and foundation success.",
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

import { useEffect, useState } from "react";
import { fetchTeachers } from "../services/teacherService";


const directorProfile = {
  name: "Dr. Tarkeshwar Thakur, Ph.D.",
  role: "Director, Dynamic Campus",
  image: "/images/director_coaching.jpeg",
};

const isValidExternalLink = (url) => typeof url === "string" && url.startsWith("http");

const AboutPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadTeachers() {
      const data = await fetchTeachers();
      // Map Firestore fields to UI fields
      const mapped = data.map((t) => ({
        name: t.name || "",
        team: t.team || "school", // Default to school if missing
        image: t.photoUrl || "", // Use photoUrl as image
        tagline: t.description || "",
        quote: t.experience ? `Experience: ${t.experience} years` : "",
        subjects: Array.isArray(t.subjects) ? t.subjects : [t.subject || ""],
        linkedin: t.linkedin || "",
        email: t.email || "",
      }));
      setTeachers(mapped);
      setLoading(false);
    }
    loadTeachers();
  }, []);
  const schoolFacultyMembers = teachers.filter((member) => member.team === "school");
  const coachingFacultyMembers = teachers.filter((member) => member.team === "coaching");
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 px-6 py-16 text-white shadow-xl shadow-slate-900/25 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-gradient-to-r from-amber-100/25 via-yellow-100/20 to-amber-200/25 px-4 py-2 text-xs font-semibold tracking-wide text-amber-100 shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_10px_30px_rgba(245,158,11,0.18)] backdrop-blur-md">
            <Trophy size={14} className="text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.55)]" />
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
              Dynamic Campus Legacy
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">27 Years of Excellence in Education</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
            Since 1999, Dynamic Campus has consistently delivered academic growth through disciplined systems,
            dedicated mentorship and a learning culture that balances strong values with modern outcomes.
          </p>
        </motion.div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-amber-300/15 blur-3xl" />
      </section>

      <section className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10 lg:grid-cols-2 lg:p-8">
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
            className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 to-stone-100 p-4 shadow-lg shadow-slate-900/10"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={directorProfile.image}
                alt={directorProfile.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-slate-900/45 p-3 text-white backdrop-blur-md">
                <p className="text-sm font-semibold">{directorProfile.name}</p>
                <p className="mt-0.5 text-xs text-slate-100">{directorProfile.role}</p>
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
          <p className="text-sm font-semibold text-indigo-700">Director&apos;s Message</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Discipline, Direction and Distinction</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            At Dynamic Campus, we believe true education is built on consistency, character and clarity.
            Our classrooms are designed to cultivate strong academic fundamentals while nurturing confidence,
            communication and values. Every student is guided with structured planning, regular assessment,
            and personalized mentorship so that learning is not only exam-focused, but life-enriching.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Over the years, our commitment to disciplined systems and student-centered teaching has translated
            into board achievements, competitive outcomes and holistic growth. We remain dedicated to shaping
            responsible learners who are prepared for both opportunities and challenges ahead.
          </p>
          <p className="mt-6 text-lg italic text-slate-700">With best wishes,</p>
          <p className="text-2xl font-semibold tracking-wide text-slate-900">Dr. Tarkeshwar Thakur, Ph.D.</p>
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
          <h2 className="text-3xl font-bold text-slate-900">Mission, Vision & Values</h2>
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
              className="interactive-card rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <item.icon size={18} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 p-6 shadow-xl shadow-slate-900/10 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            Milestone Journey
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">27-Year Growth Timeline</h2>
          <p className="mt-2 text-sm text-slate-600">A focused journey of innovation, trust and measurable outcomes across 1999-2026.</p>
        </motion.div>

        <div className="relative mt-8">
          <div className="absolute left-[18px] top-0 h-full w-[2px] bg-gradient-to-b from-indigo-200 via-slate-300 to-indigo-200 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-5 md:space-y-7">
            {legacyItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-14 md:pl-0 ${index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}
              >
                <span className="absolute left-0 top-2 inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-indigo-200 bg-white px-2 text-[10px] font-bold text-indigo-700 shadow-sm md:left-1/2 md:-translate-x-1/2">
                  {item.year}
                </span>
                <div className="interactive-card rounded-2xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-900/5">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Phase {index + 1}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold text-slate-800">Learn from the Best</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">Dedicated teacher teams for Public School and Coaching Centre.</p>
        </motion.div>

        {[{ key: "school", title: "Dynamic Public School Team", members: schoolFacultyMembers }, { key: "coaching", title: "Dynamic Coaching Centre Team", members: coachingFacultyMembers }].map(
          (teamBlock) => (
            <div key={teamBlock.key} className="mt-6">
              <div className="mb-3 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                {teamBlock.title}
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {teamBlock.members.map((teacher, index) => (
                  <motion.article
                    key={`${teamBlock.key}-${teacher.name}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5"
                    style={{ perspective: 1200 }}
                    animate="rest"
                    whileHover="hover"
                  >
                    <motion.div
                      variants={{
                        rest: { rotateY: 0 },
                        hover: { rotateY: 180 },
                      }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div style={{ backfaceVisibility: "hidden" }}>
                        <div className="relative h-44 overflow-hidden sm:h-48">
                          <motion.img
                            src={teacher.image}
                            alt={teacher.name}
                            loading="lazy"
                            className="h-full w-full object-cover"
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          />
                          <motion.div
                            initial={{ y: 42, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="pointer-events-none absolute inset-x-3 bottom-3 hidden rounded-2xl border border-white/30 bg-slate-900/45 p-3 text-white backdrop-blur-md md:block"
                          >
                            <p className="text-xs leading-relaxed">“{teacher.quote}”</p>
                          </motion.div>
                        </div>

                        <div className="p-4">
                          <h3 className="text-lg font-bold text-slate-800">{teacher.name}</h3>
                          <p className="mt-1 text-sm text-slate-500">{teacher.tagline}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {teacher.subjects.map((subject) => (
                              <span
                                key={subject}
                                className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 p-4 text-white"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
                          <p className="text-sm font-semibold text-indigo-100">{teacher.name}</p>
                          <p className="mt-1 text-[11px] text-slate-200">{teacher.tagline}</p>
                          <p className="mt-3 text-xs leading-relaxed text-slate-100">“{teacher.quote}”</p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {teacher.subjects.map((subject) => (
                              <span key={subject} className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-semibold text-indigo-100">
                                {subject}
                              </span>
                            ))}
                          </div>
                          <div className="mt-auto pt-3">
                            <div className="flex items-center gap-2">
                              {isValidExternalLink(teacher.linkedin) ? (
                                <a
                                  href={teacher.linkedin}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`${teacher.name} LinkedIn`}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/25"
                                >
                                  <Linkedin size={14} />
                                </a>
                              ) : (
                                <span
                                  aria-label={`${teacher.name} LinkedIn unavailable`}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60"
                                >
                                  <Linkedin size={14} />
                                </span>
                              )}
                              <a
                                href={`mailto:${teacher.email}`}
                                aria-label={`${teacher.name} Email`}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/25"
                              >
                                <Mail size={14} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.article>
                ))}
              </div>
            </div>
          )
        )}
      </section>

      <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold text-slate-900">Infrastructure & Facilities</h2>
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
              className="interactive-card rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <facility.icon size={18} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{facility.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{facility.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-100 to-stone-100 p-6 shadow-lg shadow-slate-900/10 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <BookOpen size={18} className="text-slate-800" />
          <p className="text-sm font-semibold text-slate-900 md:text-base">
            Dynamic Campus continues to build a future-ready generation with discipline, excellence and purpose.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;