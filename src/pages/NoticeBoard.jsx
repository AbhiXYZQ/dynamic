import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Download, Search } from "lucide-react";

const filters = ["All", "Exams", "Holidays", "General", "Downloads"];

const notices = [
  {
    id: 1,
    title: "Class 10 Pre-Board Exam Schedule Released",
    date: "2026-03-15",
    category: "Exams",
    description: "Check subject-wise dates, reporting timings and exam hall guidelines for Class 10.",
    isNew: true,
    downloadLink: "#",
  },
  {
    id: 2,
    title: "Holi Break Notification",
    date: "2026-03-10",
    category: "Holidays",
    description: "Campus remains closed from 14 Mar to 16 Mar. Regular classes resume from 17 Mar.",
    isNew: false,
    downloadLink: "",
  },
  {
    id: 3,
    title: "New Foundation Batch (Class 7-10) Registration",
    date: "2026-03-08",
    category: "General",
    description: "Admissions open for new Foundation batch with NTSE/Olympiad integrated curriculum.",
    isNew: true,
    downloadLink: "",
  },
  {
    id: 4,
    title: "Board Weekly Test Paper - Set 07",
    date: "2026-03-05",
    category: "Downloads",
    description: "Download this week’s practice paper and answer key for rank improvement review.",
    isNew: true,
    downloadLink: "#",
  },
  {
    id: 5,
    title: "Parent-Teacher Meeting Circular",
    date: "2026-03-02",
    category: "General",
    description: "PTM for classes 1-8 scheduled on Sunday. Time slot details shared section-wise.",
    isNew: false,
    downloadLink: "#",
  },
  {
    id: 6,
    title: "Class 12 Practical Examination Dates",
    date: "2026-02-28",
    category: "Exams",
    description: "Physics, Chemistry, Biology and Computer practical schedule with lab batch allocations.",
    isNew: false,
    downloadLink: "#",
  },
  {
    id: 7,
    title: "Holiday List (April to June 2026)",
    date: "2026-02-24",
    category: "Holidays",
    description: "Updated holiday calendar for both school and coaching wings is now available.",
    isNew: false,
    downloadLink: "#",
  },
  {
    id: 8,
    title: "Physics Formula Handbook PDF",
    date: "2026-02-20",
    category: "Downloads",
    description: "Chapter-wise quick revision formula handbook for Class 11-12 board aspirants.",
    isNew: false,
    downloadLink: "#",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const formatDate = (dateValue) => {
  const date = new Date(dateValue);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  return { day, month };
};

const isValidDownloadLink = (url) => typeof url === "string" && url.length > 0 && url !== "#";

const NoticeBoard = () => {
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredNotices = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return notices.filter((notice) => {
      const categoryMatch = activeFilter === "All" || notice.category === activeFilter;
      const queryMatch =
        query.length === 0 ||
        notice.title.toLowerCase().includes(query) ||
        notice.description.toLowerCase().includes(query) ||
        notice.category.toLowerCase().includes(query);

      return categoryMatch && queryMatch;
    });
  }, [activeFilter, searchText]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-6 py-12 text-white shadow-xl shadow-slate-900/25 sm:px-10"
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Notice Board & Updates</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-200 md:text-base">
          Stay updated with the latest announcements, schedules and downloads.
        </p>
      </motion.div>

      <div className="sticky top-20 z-20 mt-6 rounded-2xl border border-slate-200 bg-slate-50/95 p-4 shadow-sm backdrop-blur md:top-24">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search notices, exams, holidays, downloads..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 transition hover:border-slate-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div variants={listVariants} initial="hidden" animate="visible" className="mt-6 space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => {
              const { day, month } = formatDate(notice.date);

              return (
                <motion.article
                  key={notice.id}
                  layout
                  variants={cardVariants}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-xl border border-blue-100 bg-blue-50 px-2 py-2 text-center">
                        <CalendarDays className="mb-1 h-4 w-4 text-blue-700" />
                        <span className="text-sm font-bold leading-none text-blue-900">{day}</span>
                        <span className="mt-0.5 text-[11px] font-semibold uppercase text-blue-700">{month}</span>
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold text-slate-800 sm:text-lg">{notice.title}</h3>
                          {notice.isNew && (
                            <span className="animate-pulse rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700">
                              🔴 NEW
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-slate-600">{notice.description}</p>
                        <span className="mt-2 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                          {notice.category}
                        </span>
                      </div>
                    </div>

                    {isValidDownloadLink(notice.downloadLink) ? (
                      <a
                        href={notice.downloadLink}
                        className="interactive-button inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                      >
                        <Download className="h-4 w-4" /> Download PDF
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-500"
                      >
                        Available Soon <ArrowRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </motion.article>
              );
            })
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600"
            >
              No notices found for your search/filter.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default NoticeBoard;
