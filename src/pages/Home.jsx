import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  BookOpen,
  GraduationCap,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Years of Academic Legacy", value: 27, suffix: "+", icon: BookOpen },
  { label: "Students Mentored", value: 4200, suffix: "+", icon: Users },
  { label: "Board & Competitive Toppers", value: 380, suffix: "+", icon: Trophy },
  { label: "Expert Faculty Members", value: 65, suffix: "+", icon: GraduationCap },
];

const noticeByClass = {
  "Class 1-6": [
    "📢 Admissions Open for Playgroup to Class 6 (Session 2026-27)",
    "🎨 Activity Week for Classes 3-6 starts from Monday",
    "👨‍👩‍👧 Parent Orientation Program this Sunday at 11:00 AM",
  ],
  "Class 7-10": [
    "📝 Scholarship Test for Class 7-10 on 15th March",
    "📚 New Foundation Batch for Class 9-10 starts next week",
    "📊 Monthly Progress Meeting for Class 10 on Saturday",
  ],
  "Class 11-12/JEE-NEET": [
    "🏆 Congratulations to our JEE Advanced Toppers",
    "🧪 NEET Crash Revision Batch admissions now live",
    "⏰ Board + Entrance Combined Test Series starts this month",
  ],
};

const heroSlides = [
  {
    title: "Dynamic Public School - Nurturing the Future",
    subtitle:
      "A joyful and caring learning space where young minds build confidence, values, and strong academic foundations.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Dynamic Coaching Centre - Rank Makers of Bihar",
    subtitle:
      "Structured classes, personalized mentorship, and data-driven practice that transforms effort into top ranks.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "State-of-the-Art Infrastructure",
    subtitle:
      "Smart classrooms, hi-tech labs, and a focused campus ecosystem designed for modern, result-oriented education.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1800&q=80",
  },
];

const toppers = [
  { name: "Ananya Sinha", score: "98.6% - BSEB Class 10" },
  { name: "Rohan Kumar", score: "96.8% - BSEB Class 12" },
  { name: "Shreya Gupta", score: "97.4% - CBSE Class 10" },
  { name: "Aditya Raj", score: "95.9% - CBSE Class 12" },
  { name: "Kajal Kumari", score: "97.1% - BSEB Class 12" },
  { name: "Aman Verma", score: "96.6% - CBSE Class 10" },
];

const testimonials = [
  {
    name: "Priya Kumari",
    role: "Parent, Dynamic Public School",
    quote:
      "The school has created a nurturing environment where my child has become confident, expressive, and academically stronger every term.",
  },
  {
    name: "Rahul Singh",
    role: "Student, NEET Batch",
    quote:
      "The test-series analysis and mentor feedback gave me a structured plan. I improved consistently and gained real exam confidence.",
  },
  {
    name: "Neha Sinha",
    role: "Parent, Class 12 Student",
    quote:
      "What stands out is discipline with personal attention. Teachers are approachable, and progress reports are transparent and actionable.",
  },
];

const wings = [
  {
    title: "Dynamic Public School",
    subtitle: "Playgroup to Class 6",
    description:
      "A joyful foundation with activity-based learning, life skills, values, communication building, and strong conceptual clarity from the early years.",
    points: ["Safe and caring campus", "Activity and project learning", "Foundation in English, Math, EVS"],
    cta: "Explore School Wing",
  },
  {
    title: "Dynamic Coaching Centre",
    subtitle: "Class 7 to 12, JEE / NEET",
    description:
      "Result-oriented academics with a competitive ecosystem, chapter-wise testing, doubt solving clinics, and focused mentorship for board and entrance exams.",
    points: ["Regular tests and analytics", "Dedicated JEE / NEET modules", "Performance tracking with mentorship"],
    cta: "Explore Coaching Wing",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId;
    const duration = 1800;
    const startTime = performance.now();

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Home = () => {
  const noticeClasses = useMemo(() => Object.keys(noticeByClass), []);
  const [activeNoticeClass, setActiveNoticeClass] = useState(noticeClasses[0]);
  const [activeNotice, setActiveNotice] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const activeNoticeList = noticeByClass[activeNoticeClass] ?? [];

  useEffect(() => {
    setActiveNotice(0);
  }, [activeNoticeClass]);

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setSlideDirection(1);
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(sliderTimer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialTimer);
  }, []);

  const nextSlide = () => {
    setSlideDirection(1);
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setSlideDirection(-1);
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setSlideDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 1.01,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (direction) => ({
      x: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 1.01,
      transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const marqueeData = useMemo(() => [...toppers, ...toppers], []);

  return (
    <div className="overflow-x-hidden">
      <section className="mx-auto w-full max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="relative h-[300px] overflow-hidden rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/15 sm:h-[380px] md:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <img
                  src={heroSlides[activeSlide].image}
                  alt={heroSlides[activeSlide].title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-10 flex items-end px-4 pb-10 sm:px-8 md:items-center md:pb-0 lg:px-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`slide-content-${activeSlide}`}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl"
                >
                  <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur-md">
                    Dynamic Campus, Hajipur
                  </p>
                  <h1 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">
                    {heroSlides[activeSlide].title}
                  </h1>
                  <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-100 sm:text-sm md:text-base">
                    {heroSlides[activeSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2.5 text-white backdrop-blur-md transition hover:bg-black/50 md:inline-flex"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2.5 text-white backdrop-blur-md transition hover:bg-black/50 md:inline-flex"
            >
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.title}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === idx ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[260px] flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white p-4 shadow-xl shadow-emerald-900/10 md:h-[520px]"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <BellRing size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-emerald-900">Notice Board</p>
                  <p className="text-[11px] text-slate-500">Class-wise updates</p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-red-500/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white animate-pulse">
                New
              </span>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-1 lg:overflow-visible lg:pb-0">
              {noticeClasses.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveNoticeClass(item)}
                  className={`shrink-0 rounded-xl px-3 py-2 text-left text-xs font-semibold transition lg:shrink ${
                    activeNoticeClass === item
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20"
                      : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-1 flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 p-3 md:min-h-0">
              <div className="mb-2 flex items-center justify-between text-[11px] font-medium text-slate-500">
                <span>{activeNoticeClass}</span>
                <span>
                  {String(activeNotice + 1).padStart(2, "0")} / {String(activeNoticeList.length).padStart(2, "0")}
                </span>
              </div>

              <div className="max-h-40 space-y-2 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:rgb(16_185_129)_transparent] md:min-h-0 md:flex-1 md:max-h-none [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-400 [&::-webkit-scrollbar-track]:bg-transparent">
                {activeNoticeList.map((item, index) => (
                  <button
                    key={`${activeNoticeClass}-${index}`}
                    type="button"
                    onClick={() => setActiveNotice(index)}
                    className={`w-full rounded-xl border px-3 py-2 text-left text-[11px] font-medium leading-relaxed transition sm:text-xs ${
                      activeNotice === index
                        ? "border-emerald-300 bg-white text-emerald-900 shadow-sm"
                        : "border-transparent bg-emerald-100/60 text-slate-700 hover:bg-emerald-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-3 shrink-0 rounded-xl border border-emerald-100 bg-white px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700">Selected Notice</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${activeNoticeClass}-selected-${activeNotice}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-1 text-sm font-medium leading-relaxed text-slate-700"
                  >
                    {activeNoticeList[activeNotice]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-4">
              <Link
                to="/notices"
                className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                Go to Notice Page
              </Link>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 pb-14 pt-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:pt-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-800 shadow-md shadow-emerald-900/10">
            <Star size={14} className="text-yellow-500" />
            Welcome to Dynamic Campus
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-emerald-950 sm:text-4xl md:text-5xl">
            Where Foundations Meet Future Excellence
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
            From early childhood care to competitive exam mastery, Dynamic Campus empowers learners with
            strong concepts, disciplined practice, and mentorship that drives measurable academic growth.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 sm:w-auto"
            >
              Book Campus Visit <ArrowRight size={16} />
            </Link>
            <Link
              to="/academics"
              className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition-all duration-300 hover:bg-emerald-50 sm:w-auto"
            >
              View Academic Programs
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-xl shadow-emerald-900/10 backdrop-blur-md"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">School Wing</p>
                <p className="mt-2 text-sm text-slate-600">Playgroup to Class 6 with joyful foundation learning.</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-yellow-700">Coaching Wing</p>
                <p className="mt-2 text-sm text-slate-600">Class 7–12, JEE/NEET focused academic rigor.</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-white to-emerald-50 p-4 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Result-Driven Culture</p>
                <p className="mt-2 text-sm text-slate-600">
                  Daily discipline, chapter-wise practice, and mentor-driven feedback loops for long-term success.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-8 -right-4 h-28 w-28 rounded-full bg-emerald-200/50 blur-2xl"
          />
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {wings.map((wing, index) => (
            <motion.article
              key={wing.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-900/10"
            >
              <p className="text-sm font-semibold text-emerald-700">{wing.subtitle}</p>
              <h3 className="mt-1 text-2xl font-bold text-emerald-900">{wing.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{wing.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {wing.points.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100">
                {wing.cta} <ArrowRight size={15} />
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-900/10"
        >
          <h2 className="text-2xl font-bold text-emerald-900 md:text-3xl">Dynamic by Numbers</h2>
          <p className="mt-2 text-sm text-slate-600">Consistent outcomes through thoughtful systems and committed mentorship.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4"
              >
                <item.icon size={18} className="text-emerald-700" />
                <p className="mt-3 text-2xl font-bold text-emerald-900">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-1 text-xs text-slate-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-white p-6 shadow-xl shadow-yellow-900/5"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-yellow-600" />
              <h2 className="text-xl font-bold text-yellow-800">Top Performers Spotlight</h2>
            </div>
            <Link
              to="/toppers"
              className="inline-flex items-center gap-2 rounded-xl border border-yellow-200 bg-white px-4 py-2 text-sm font-semibold text-yellow-800 transition hover:bg-yellow-100"
            >
              Learn More <ArrowRight size={15} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-yellow-100 bg-white">
            <motion.div
              className="flex w-max gap-3 p-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {marqueeData.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="min-w-[260px] rounded-xl border border-yellow-100 bg-yellow-50/60 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-yellow-800">{item.name}</p>
                  <p className="text-xs text-slate-600">{item.score}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-900/10"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-emerald-900 md:text-3xl">What Parents & Students Say</h2>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    activeTestimonial === idx ? "bg-emerald-600" : "bg-emerald-200"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 min-h-[160px] rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-base leading-relaxed text-slate-700">“{testimonials[activeTestimonial].quote}”</p>
                <p className="mt-4 text-sm font-semibold text-emerald-900">{testimonials[activeTestimonial].name}</p>
                <p className="text-xs text-slate-500">{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
