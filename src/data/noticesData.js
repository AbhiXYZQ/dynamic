export const NOTICE_STORAGE_KEY = "dynamicCampusNotices";

export const noticeFilters = ["All", "Exams", "Holidays", "General", "Downloads"];
export const noticeWings = ["school", "coaching"];

export const noticeSeedData = [
  {
    id: 1,
    title: "Class 10 Pre-Board Exam Schedule Released",
    date: "2026-03-15",
    category: "Exams",
    description: "Check subject-wise dates, reporting timings and exam hall guidelines for Class 10.",
    targetWing: "coaching",
    isNew: true,
    downloadLink: "",
    downloadFileName: "",
    hasPdf: false,
    autoDeleteIn30Days: false,
  },
  {
    id: 2,
    title: "Holi Break Notification",
    date: "2026-03-10",
    category: "Holidays",
    description: "Campus remains closed from 14 Mar to 16 Mar. Regular classes resume from 17 Mar.",
    targetWing: "all",
    isNew: false,
    downloadLink: "",
    downloadFileName: "",
    hasPdf: false,
    autoDeleteIn30Days: false,
  },
  {
    id: 3,
    title: "New Foundation Batch (Class 7-10) Registration",
    date: "2026-03-08",
    category: "General",
    description: "Admissions open for new Foundation batch with NTSE/Olympiad integrated curriculum.",
    targetWing: "coaching",
    isNew: true,
    downloadLink: "",
    downloadFileName: "",
    hasPdf: false,
    autoDeleteIn30Days: false,
  },
  {
    id: 4,
    title: "Board Weekly Test Paper - Set 07",
    date: "2026-03-05",
    category: "Downloads",
    description: "Download this week’s practice paper and answer key for rank improvement review.",
    targetWing: "coaching",
    isNew: true,
    downloadLink: "",
    downloadFileName: "",
    hasPdf: false,
    autoDeleteIn30Days: false,
  },
  {
    id: 5,
    title: "Parent-Teacher Meeting Circular",
    date: "2026-03-02",
    category: "General",
    description: "PTM for classes 1-8 scheduled on Sunday. Time slot details shared section-wise.",
    targetWing: "school",
    isNew: false,
    downloadLink: "",
    downloadFileName: "",
    hasPdf: false,
    autoDeleteIn30Days: false,
  },
  {
    id: 6,
    title: "Class 12 Practical Examination Dates",
    date: "2026-02-28",
    category: "Exams",
    description: "Physics, Chemistry, Biology and Computer practical schedule with lab batch allocations.",
    targetWing: "coaching",
    isNew: false,
    downloadLink: "",
    downloadFileName: "",
    hasPdf: false,
    autoDeleteIn30Days: false,
  },
  {
    id: 7,
    title: "Holiday List (April to June 2026)",
    date: "2026-02-24",
    category: "Holidays",
    description: "Updated holiday calendar for both school and coaching wings is now available.",
    targetWing: "all",
    isNew: false,
    downloadLink: "",
    downloadFileName: "",
    hasPdf: false,
    autoDeleteIn30Days: false,
  },
  {
    id: 8,
    title: "Physics Formula Handbook PDF",
    date: "2026-02-20",
    category: "Downloads",
    description: "Chapter-wise quick revision formula handbook for Class 11-12 board aspirants.",
    targetWing: "coaching",
    isNew: false,
    downloadLink: "",
    downloadFileName: "",
    hasPdf: false,
    autoDeleteIn30Days: false,
  },
];

const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;

const normalizeNotice = (notice) => {
  const safeLink = typeof notice.downloadLink === "string" && notice.downloadLink !== "#" ? notice.downloadLink : "";
  const safeFileName = typeof notice.downloadFileName === "string" ? notice.downloadFileName : "";
  const hasPdf = typeof notice.hasPdf === "boolean" ? notice.hasPdf : Boolean(safeLink);
  const autoDeleteIn30Days = typeof notice.autoDeleteIn30Days === "boolean" ? notice.autoDeleteIn30Days : false;
  const targetWing = ["school", "coaching", "all"].includes(notice.targetWing) ? notice.targetWing : "all";

  return {
    ...notice,
    downloadLink: safeLink,
    downloadFileName: safeFileName,
    hasPdf,
    autoDeleteIn30Days,
    targetWing,
  };
};

const isAutoDeleteExpired = (notice) => {
  if (!notice.autoDeleteIn30Days) return false;

  const postedAt = new Date(notice.date).getTime();
  if (Number.isNaN(postedAt)) return false;

  return Date.now() - postedAt >= THIRTY_DAYS_IN_MS;
};

export const getStoredNotices = () => {
  if (typeof window === "undefined") return noticeSeedData.map(normalizeNotice);

  try {
    const rawNotices = window.localStorage.getItem(NOTICE_STORAGE_KEY);
    if (!rawNotices) return noticeSeedData.map(normalizeNotice);

    const parsedNotices = JSON.parse(rawNotices);
    if (!Array.isArray(parsedNotices)) return noticeSeedData.map(normalizeNotice);

    const normalizedNotices = parsedNotices.map(normalizeNotice);
    const activeNotices = normalizedNotices.filter((notice) => !isAutoDeleteExpired(notice));

    if (activeNotices.length !== normalizedNotices.length) {
      window.localStorage.setItem(NOTICE_STORAGE_KEY, JSON.stringify(activeNotices));
    }

    return activeNotices;
  } catch {
    return noticeSeedData.map(normalizeNotice);
  }
};

export const saveStoredNotices = (notices) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(NOTICE_STORAGE_KEY, JSON.stringify(notices));
};
