import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const filters = ["All", "Campus", "Achievements", "Events", "Labs"];

const galleryImages = [
  {
    id: 1,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "Students walking in campus corridor",
    title: "Dynamic Campus Morning Energy",
  },
  {
    id: 2,
    category: "Achievements",
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
    alt: "Student holding trophy on stage",
    title: "Celebrating Board Top Performers",
  },
  {
    id: 3,
    category: "Events",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    alt: "Students participating in school event",
    title: "Annual Cultural Showcase",
  },
  {
    id: 4,
    category: "Labs",
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    alt: "Students working in science lab",
    title: "Hands-on Learning in Science Lab",
  },
  {
    id: 5,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern classroom setup",
    title: "Focused Smart Classroom Sessions",
  },
  {
    id: 6,
    category: "Achievements",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Graduation hats and success moment",
    title: "Milestones of Academic Excellence",
  },
  {
    id: 7,
    category: "Events",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    alt: "Seminar hall with students",
    title: "Motivational Seminar Series",
  },
  {
    id: 8,
    category: "Labs",
    src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
    alt: "Computer lab practice session",
    title: "Advanced Computer Lab Practice",
  },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return galleryImages;
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-6 py-16 text-white shadow-xl shadow-slate-900/25 sm:px-10"
      >
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Gallery</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
          Glimpses of life, learning, and massive success at Dynamic Campus.
        </p>
      </motion.div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/25"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-900/8"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 via-black/45 to-transparent p-4 text-white transition duration-500 group-hover:translate-y-0">
                  <p className="text-sm font-semibold leading-snug">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default GalleryPage;
