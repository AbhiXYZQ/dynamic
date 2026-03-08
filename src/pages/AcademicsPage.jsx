import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Calculator,
  CalendarDays,
  ChevronRight,
  Cpu,
  GraduationCap,
  Microscope,
  MonitorPlay,
  School2,
  Sparkles,
  Smartphone,
  Trophy,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const tabs = [
  { id: "school", label: "Dynamic Public School", icon: School2 },
  { id: "coaching", label: "Dynamic Coaching Centre", icon: GraduationCap },
];

const logoByTab = {
  school: "/images/dynamic_school-logo.jpeg",
  coaching: "/images/dynamic_coaching-logo.jpeg",
};

const directorsByWing = {
  school: {
    name: "Director, Dynamic Public School",
    title: "School Wing Director",
    subtitle: "Dynamic Public School",
    message: "Leading foundational learning with discipline, values, and joyful classroom experiences.",
    image: "/images/director_school.jpeg",
  },
  coaching: {
    name: "Director, Dynamic Coaching Centre",
    title: "Coaching Wing Director",
    subtitle: "Dynamic Coaching Centre",
    message: "Driving board-focused excellence with data-backed practice and strong academic mentoring.",
    image: "/images/director_coaching.jpeg",
  },
};

const subjectIcons = [BookOpen, Microscope, Calculator, Trophy];

const schoolCurriculum = [
  {
    title: "Pre-Primary (Play-KG)",
    points: ["Activity-based learning", "Phonics foundation", "Moral values & habits"],
  },
  {
    title: "Primary (1-6)",
    points: ["Conceptual core subjects", "Creative expression", "Values-led discipline"],
  },
];

const schoolFeatures = [
  { title: "No Bag Day", subtitle: "Hands-on, activity-focused school day", icon: CalendarDays },
  { title: "Smart Class", subtitle: "Visual and interactive classroom sessions", icon: MonitorPlay },
  { title: "Parents App", subtitle: "Attendance, homework, and updates in one place", icon: Smartphone },
];

const coachingBatches = [
  {
    title: "Foundation (7-10)",
    focus: "NTSE/Olympiad focus",
    detail: "Strong concepts, habit building, and analytical thinking.",
  },
  {
    title: "Target (11-12)",
    focus: "Boards + Foundation",
    detail: "Integrated preparation with time-bound test practice.",
  },
  {
    title: "Achiever (Droppers)",
    focus: "Rank booster",
    detail: "High-intensity revision, advanced tests, and mentoring.",
  },
];

const dynamicEdge = ["Daily DPPs", "Weekly Tests", "Doubt Counters", "AI-Based Analysis"];

const highlightsByTab = {
  school: [
    "Playgroup to Class 6",
    "Activity-based pedagogy",
    "Safe & value-driven environment",
    "Parent communication support",
  ],
  coaching: [
    "Class 7-12 + Competitive",
    "Boards + Foundation integration",
    "Performance analytics",
    "Mentor-led improvement cycles",
  ],
};

const tabContentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

const AcademicsPage = () => {
  const [searchParams] = useSearchParams();
  const wingParam = searchParams.get("wing");
  const initialTab = wingParam === "coaching" ? "coaching" : "school";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (wingParam === "school" || wingParam === "coaching") {
      setActiveTab(wingParam);
    }
  }, [wingParam]);

  const isSchool = activeTab === "school";

  const accents = isSchool
    ? {
        ring: "ring-cyan-200",
        text: "text-blue-700",
        softBg: "bg-cyan-50",
        heading: "text-blue-900",
        panelBorder: "border-cyan-100",
        panelShadow: "shadow-cyan-900/10",
        gradient: "from-blue-100 via-cyan-100 to-white",
        badgeBg: "bg-blue-600",
      }
    : {
        ring: "ring-amber-200",
        text: "text-blue-900",
        softBg: "bg-amber-50",
        heading: "text-blue-950",
        panelBorder: "border-blue-100",
        panelShadow: "shadow-blue-950/10",
        gradient: "from-blue-100 via-blue-50 to-amber-50",
        badgeBg: "bg-amber-500",
      };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div
        className={`rounded-3xl border ${accents.panelBorder} bg-gradient-to-br ${accents.gradient} p-6 shadow-xl ${accents.panelShadow} sm:p-8`}
      >
        <div className="pointer-events-none absolute" />
        <div className="mx-auto max-w-3xl text-center">
          <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accents.softBg} ${accents.text}`}>
            Academic Wing
          </p>
          <div className="mt-3 flex justify-center">
            <span className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white shadow-md">
              <img
                src={logoByTab[activeTab]}
                alt={activeTab === "school" ? "Dynamic Public School logo" : "Dynamic Coaching Centre logo"}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </span>
          </div>
          <h1 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${accents.heading}`}>Academic Excellence</h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            From Playgroup Foundation to Board Success
          </p>
        </div>

        <div className="mx-auto mt-6 grid w-full max-w-3xl grid-cols-2 gap-2 rounded-2xl border border-slate-200/80 bg-white/80 p-2 backdrop-blur sm:flex sm:rounded-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex min-h-[56px] items-center justify-center rounded-xl px-3 py-3 text-center text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 sm:min-h-0 sm:flex-1 sm:rounded-full sm:px-4 sm:py-2.5 sm:text-sm ${accents.ring} ${
                  isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="academics-tab-pill"
                    transition={{ type: "spring", stiffness: 450, damping: 36 }}
                    className={`absolute inset-0 rounded-xl sm:rounded-full ${isSchool ? "bg-cyan-200/70" : "bg-amber-200/80"}`}
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-1.5 leading-tight">
                  <TabIcon className="h-4 w-4" />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 grid w-full max-w-5xl gap-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlightsByTab[activeTab].map((item) => (
            <div
              key={item}
              className={`rounded-xl border bg-white/80 px-3 py-2 text-center text-xs font-semibold text-slate-700 shadow-sm backdrop-blur ${
                isSchool ? "border-cyan-100" : "border-amber-100"
              }`}
            >
              {item}
            </div>
          ))}
        </motion.div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {isSchool ? (
              <motion.div
                key="school-content"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-700" />
                  <p className="text-sm font-semibold text-cyan-800">Public School Programs (Playgroup - Class 6)</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {schoolCurriculum.map((item, index) => {
                    const SubjectIcon = subjectIcons[index];

                    return (
                      <div
                        key={item.title}
                        className="interactive-card rounded-2xl border border-cyan-100 bg-white p-5 shadow-sm shadow-cyan-900/5"
                      >
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                          <SubjectIcon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                          {item.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <ChevronRight className="mt-0.5 h-4 w-4 text-cyan-600" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-2xl border border-cyan-100 bg-white p-5 shadow-sm shadow-cyan-900/5">
                  <h3 className="text-lg font-semibold text-slate-900">Our Methodology</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {["Learn", "Explore", "Implement"].map((step, index) => (
                      <div
                        key={step}
                        className="interactive-card flex items-center justify-center rounded-xl bg-cyan-50 px-4 py-4 text-center text-sm font-semibold text-cyan-800"
                      >
                        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 text-xs font-bold text-cyan-900">
                          {index + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {schoolFeatures.map((feature) => (
                    <div key={feature.title} className="interactive-card rounded-2xl border border-cyan-100 bg-cyan-50/50 p-5">
                      <feature.icon className="h-5 w-5 text-cyan-700" />
                      <h4 className="mt-3 font-semibold text-slate-900">{feature.title}</h4>
                      <p className="mt-1 text-sm text-slate-600">{feature.subtitle}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-6 rounded-3xl border border-cyan-100 bg-white p-6 shadow-xl shadow-cyan-900/10 lg:grid-cols-2 lg:p-8">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-4 shadow-lg shadow-cyan-900/10"
                  >
                    <div className="relative h-[320px] overflow-hidden rounded-2xl">
                      <img
                        src={directorsByWing.school.image}
                        alt="Dynamic Public School director"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/35 bg-slate-900/45 p-3 text-white backdrop-blur-md">
                        <p className="text-sm font-semibold">{directorsByWing.school.name}</p>
                        <p className="mt-0.5 text-xs text-slate-100">{directorsByWing.school.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-cyan-700">Director&apos;s Message</p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900">{directorsByWing.school.title}</h3>
                    <p className="mt-1 text-sm font-medium text-cyan-700">{directorsByWing.school.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                      {directorsByWing.school.message}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                      We ensure every child receives individual attention, activity-based engagement, and value-driven guidance to grow with confidence.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="coaching-content"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  <p className="text-sm font-semibold text-blue-900">Coaching Programs (Class 7-12 & Competitive)</p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm shadow-blue-950/5">
                  <div className="grid gap-px bg-blue-100 md:grid-cols-3">
                    {coachingBatches.map((batch, index) => {
                      const SubjectIcon = subjectIcons[index + 1] ?? Trophy;

                      return (
                        <div key={batch.title} className="interactive-card bg-white p-5">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                            <SubjectIcon className="h-5 w-5" />
                          </div>
                          <h3 className="mt-3 text-lg font-semibold text-slate-900">{batch.title}</h3>
                          <p className="mt-2 text-sm font-medium text-amber-600">{batch.focus}</p>
                          <p className="mt-2 text-sm text-slate-600">{batch.detail}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-blue-900" />
                    <h3 className="text-lg font-semibold text-blue-950">The Dynamic Edge</h3>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {dynamicEdge.map((item) => (
                      <div
                        key={item}
                        className="interactive-card rounded-xl border border-blue-100 bg-white px-4 py-4 text-sm font-semibold text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/10 lg:grid-cols-2 lg:p-8">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 shadow-lg shadow-blue-950/10"
                  >
                    <div className="relative h-[320px] overflow-hidden rounded-2xl">
                      <img
                        src={directorsByWing.coaching.image}
                        alt="Dynamic Coaching Centre director"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/35 bg-slate-900/45 p-3 text-white backdrop-blur-md">
                        <p className="text-sm font-semibold">{directorsByWing.coaching.name}</p>
                        <p className="mt-0.5 text-xs text-slate-100">{directorsByWing.coaching.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-blue-800">Director&apos;s Message</p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900">{directorsByWing.coaching.title}</h3>
                    <p className="mt-1 text-sm font-medium text-blue-800">{directorsByWing.coaching.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                      {directorsByWing.coaching.message}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                      Our focus remains on board outcomes, regular test analysis, and structured mentorship that helps students improve consistently.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ${accents.badgeBg}`}>
                Scholarship - DSAT
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">Dynamic Scholarship Admission Test</h2>
              <p className="mt-1 text-sm text-slate-600">
                Unlock merit scholarships for school and coaching programs with DSAT.
              </p>
            </div>
            <Link
              to="/contact"
              className={`interactive-button inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white ${
                isSchool ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-900 hover:bg-blue-950"
              }`}
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsPage;
