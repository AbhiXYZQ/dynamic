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
        image: "https://i.pravatar.cc/240?img=32",
      },
      {
        name: "Satyam Raj",
        result: "97.9%",
        year: "2025",
        image: "https://i.pravatar.cc/240?img=12",
      },
      {
        name: "Pooja Kumari",
        result: "97.3%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=47",
      },
      {
        name: "Vivek Anand",
        result: "95.9%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=63",
      },
      {
        name: "Komal Rani",
        result: "95.1%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=39",
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
        image: "https://i.pravatar.cc/240?img=15",
      },
      {
        name: "Kajal Kumari",
        result: "97.1%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=29",
      },
      {
        name: "Ayush Raj",
        result: "95.6%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=68",
      },
      {
        name: "Nitesh Kumar",
        result: "95.0%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=11",
      },
      {
        name: "Soni Mishra",
        result: "94.7%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=26",
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
        image: "https://i.pravatar.cc/240?img=45",
      },
      {
        name: "Aman Verma",
        result: "96.6%",
        year: "2025",
        image: "https://i.pravatar.cc/240?img=22",
      },
      {
        name: "Nidhi Singh",
        result: "95.8%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=5",
      },
      {
        name: "Aarav Jain",
        result: "95.2%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=18",
      },
      {
        name: "Riya Sharma",
        result: "94.8%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=52",
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
        image: "https://i.pravatar.cc/240?img=59",
      },
      {
        name: "Ritika Sharma",
        result: "95.3%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=43",
      },
      {
        name: "Harshita Jha",
        result: "94.9%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=31",
      },
      {
        name: "Mayank Sinha",
        result: "94.5%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=65",
      },
      {
        name: "Sakshi Priya",
        result: "94.1%",
        year: "2024",
        image: "https://i.pravatar.cc/240?img=49",
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
        className="rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white p-8 shadow-xl shadow-yellow-900/10"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
            <Trophy size={18} />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-yellow-800 md:text-4xl">Board Top Performers</h1>
            <p className="mt-1 text-sm text-slate-600">
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
            className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/10"
          >
            <div className="mb-4 flex items-center gap-2">
              <Star size={16} className="text-emerald-700" />
              <h2 className="text-xl font-bold text-emerald-900">{group.title}</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">{group.description}</p>

            <div className="mt-5 space-y-3">
              {group.students.map((student, studentIndex) => (
                <div
                  key={`${student.name}-${student.year}`}
                  className={`rounded-2xl border p-4 transition-all ${
                    studentIndex < 3
                      ? "border-yellow-200 bg-gradient-to-r from-yellow-50 to-white shadow-md shadow-yellow-900/10"
                      : "border-emerald-100 bg-emerald-50/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <img
                        src={student.image}
                        alt={student.name}
                        className={`h-12 w-12 rounded-xl object-cover ring-2 ${
                          studentIndex < 3 ? "ring-yellow-200" : "ring-white"
                        }`}
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-semibold text-emerald-900">{student.name}</p>
                        <p className="text-xs text-slate-600">{group.title}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-emerald-900">{student.result}</p>
                      <p className="text-xs text-slate-600">Board Score</p>
                      {studentIndex < 3 && (
                        <span className="mt-1 mr-1 inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-800">
                          Rank #{studentIndex + 1}
                        </span>
                      )}
                      <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-emerald-700">
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
        className="mt-10 rounded-3xl border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-900/10"
      >
        <div className="flex items-center gap-2">
          <Star size={18} className="text-emerald-700" />
          <h2 className="text-2xl font-bold text-emerald-900">Other Achievements</h2>
        </div>
        <p className="mt-2 text-sm text-slate-600">
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
              className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5"
            >
              <h3 className="text-lg font-semibold text-emerald-900">{achievement.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{achievement.summary}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {achievement.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
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
