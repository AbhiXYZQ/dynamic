import { motion } from "framer-motion";
import { Medal, Star, Trophy } from "lucide-react";

const topperGroups = [
  {
    title: "BSEB Class 10 Toppers",
    description: "Bihar School Examination Board - Class 10 outstanding performers.",
    students: [
      {
        name: "Ananya Sinha",
        result: "98.6%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Satyam Raj",
        result: "97.9%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Pooja Kumari",
        result: "97.3%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Vivek Anand",
        result: "95.9%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Komal Rani",
        result: "95.1%",
        year: "2026",
        image: "/school-logo.png",
      },
    ],
  },
  {
    title: "BSEB Class 12 Toppers",
    description: "Bihar School Examination Board - Class 12 stream-wise top achievers.",
    students: [
      {
        name: "Rohan Kumar",
        result: "96.8%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Kajal Kumari",
        result: "97.1%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Ayush Raj",
        result: "95.6%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Nitesh Kumar",
        result: "95.0%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Soni Mishra",
        result: "94.7%",
        year: "2026",
        image: "/school-logo.png",
      },
    ],
  },
  {
    title: "CBSE Class 10 Toppers",
    description: "CBSE Class 10 high scorers with strong foundation and consistency.",
    students: [
      {
        name: "Shreya Gupta",
        result: "97.4%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Aman Verma",
        result: "96.6%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Nidhi Singh",
        result: "95.8%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Aarav Jain",
        result: "95.2%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Riya Sharma",
        result: "94.8%",
        year: "2026",
        image: "/school-logo.png",
      },
    ],
  },
  {
    title: "CBSE Class 12 Toppers",
    description: "CBSE Class 12 board achievers across Science, Commerce, and Humanities.",
    students: [
      {
        name: "Aditya Raj",
        result: "95.9%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Ritika Sharma",
        result: "95.3%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Harshita Jha",
        result: "94.9%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Mayank Sinha",
        result: "94.5%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Sakshi Priya",
        result: "94.1%",
        year: "2026",
        image: "/school-logo.png",
      },
    ],
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const otherAchievements = [
  {
    title: "Olympiad Milestones",
    summary: "State and national-level recognition in Maths, Science, and English Olympiads.",
    highlights: ["42 District Merit Certificates", "11 State Rank Holders", "3 National Final Qualifiers"],
  },
  {
    title: "Sports Excellence",
    summary: "Consistent podium finishes across athletics, kabaddi, and inter-school championships.",
    highlights: ["6 District Gold Medals", "Inter-school Football Runner-up", "Annual Sports Meet Champions"],
  },
  {
    title: "Cultural & Co-curricular",
    summary: "Outstanding student performances in debate, quiz, art, and stage events.",
    highlights: ["Debate League Winners", "Quiz Bowl Top 3", "Fine Arts Special Jury Award"],
  },
  {
    title: "Discipline & Attendance",
    summary: "A strong culture of consistency, punctuality, and academic commitment.",
    highlights: ["95%+ Attendance Club", "Best House Discipline Award", "Weekly Mentoring Excellence"],
  },
];

const Toppers = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-amber-300/50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 shadow-2xl shadow-slate-900/40"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-300/60 bg-amber-200/10 text-amber-200">
            <Trophy size={18} />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-amber-100 md:text-4xl">Board Top Performers</h1>
            <p className="mt-1 text-sm text-slate-300">
              Celebrating excellence in BSEB and CBSE Class 10 & Class 12 board examinations.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {topperGroups.map((group, index) => (
          <motion.article
            key={group.title}
            variants={cardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08 }}
            className="interactive-card rounded-3xl border border-amber-300/40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-xl shadow-slate-900/35"
          >
            <div className="mb-4 flex items-center gap-2">
              <Star size={16} className="text-amber-300" />
              <h2 className="text-xl font-bold text-amber-100">{group.title}</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">{group.description}</p>

            <div className="mt-5 space-y-3">
              {group.students.map((student, studentIndex) => (
                <div
                  key={`${student.name}-${student.year}`}
                  className={`interactive-card rounded-2xl border p-4 ${
                    studentIndex < 3
                      ? "border-amber-300/60 bg-gradient-to-r from-amber-200/20 to-yellow-200/10 shadow-md shadow-amber-600/20"
                      : "border-slate-600/70 bg-slate-800/70"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        aria-label="Updated Soon"
                        className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-extrabold ring-2 ${
                          studentIndex < 3
                            ? "bg-amber-100/20 text-amber-100 ring-yellow-200"
                            : "bg-slate-700 text-slate-100 ring-white"
                        }`}
                      >
                        ?
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-100">Updated Soon</p>
                        <p className="text-xs text-slate-300">{group.title}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-amber-100">?</p>
                      <p className="text-xs text-slate-300">Score Pending</p>
                      {studentIndex < 3 && (
                        <span className="mt-1 mr-1 inline-flex items-center gap-1 rounded-full border border-amber-300/60 bg-amber-200/20 px-2.5 py-1 text-xs font-semibold text-amber-100">
                          Rank #{studentIndex + 1}
                        </span>
                      )}
                      <span className="mt-1 inline-flex items-center gap-1 rounded-full border border-slate-500 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200">
                        <Medal size={12} /> {student.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 rounded-3xl border border-amber-300/40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-7 shadow-xl shadow-slate-900/35"
      >
        <div className="flex items-center gap-2">
          <Star size={18} className="text-amber-300" />
          <h2 className="text-2xl font-bold text-amber-100">Other Achievements</h2>
        </div>
        <p className="mt-2 text-sm text-slate-300">
          Beyond board excellence, our learners continue to shine in competitive, cultural, and discipline-oriented milestones.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {otherAchievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              variants={cardAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="interactive-card rounded-2xl border border-slate-600/70 bg-slate-800/70 p-5"
            >
              <h3 className="text-lg font-semibold text-amber-100">{achievement.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{achievement.summary}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {achievement.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Toppers;
