import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Years of Academic Legacy", value: 27, suffix: "+", icon: BookOpen },
  { label: "Students Mentored", value: 4200, suffix: "+", icon: Users },
  { label: "Board & Competitive Toppers", value: 380, suffix: "+", icon: Trophy },
  { label: "Expert Faculty Members", value: 65, suffix: "+", icon: GraduationCap },
];

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

const noticeItems = [
  "📢 Admissions Open for Session 2026-27",
  "🏆 Congratulations to our JEE Advanced Toppers",
  "📝 Scholarship Test on 15th March - Register Now!",
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTickerPaused, setIsTickerPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(sliderTimer);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const marqueeData = useMemo(() => [...toppers, ...toppers], []);
  const tickerText = useMemo(() => `${noticeItems.join("   |   ")}   |   `, []);

  return (
    <div className="overflow-x-hidden">
      <section className="border-y border-slate-700 bg-slate-900 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          <span className="inline-flex shrink-0 items-center rounded-full bg-red-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white animate-pulse">
            🔴 Live
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div
              onMouseEnter={() => setIsTickerPaused(true)}
              onMouseLeave={() => setIsTickerPaused(false)}
              className={`flex w-max whitespace-nowrap text-sm font-medium text-slate-100 ${
                isTickerPaused ? "[animation-play-state:paused]" : ""
              } animate-[ticker_30s_linear_infinite]`}
            >
              <span className="pr-12">{tickerText}</span>
              <span className="pr-12">{tickerText}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/15 md:h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={heroSlides[activeSlide].image}
                alt={heroSlides[activeSlide].title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 z-10 flex items-end px-5 pb-12 sm:px-8 md:items-center md:pb-0 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeSlide}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur-md">
                  Dynamic Campus, Hajipur
                </p>
                <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                  {heroSlides[activeSlide].title}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-100 md:text-base">
                  {heroSlides[activeSlide].subtitle}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/academics"
                    className="inline-flex items-center rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                  >
                    Explore Academics
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2.5 text-white backdrop-blur-md transition hover:bg-black/50 md:left-5"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2.5 text-white backdrop-blur-md transition hover:bg-black/50 md:right-5"
          >
            <ArrowRight size={18} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.title}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeSlide === idx ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
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

      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
