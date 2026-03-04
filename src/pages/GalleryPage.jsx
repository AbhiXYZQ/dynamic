import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const filters = ["All", "Campus", "Achievements", "Events"];

const galleryImages = [
  {
    id: 1,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern campus building",
    title: "Flagship Campus Block",
    heightClass: "h-[340px]",
  },
  {
    id: 2,
    category: "Achievements",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Students with medals",
    title: "National Merit Recognition",
    heightClass: "h-[430px]",
  },
  {
    id: 3,
    category: "Events",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Classroom seminar session",
    title: "Interactive Seminar Day",
    heightClass: "h-[300px]",
  },
  {
    id: 4,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80",
    alt: "Students on campus lawn",
    title: "Campus Life & Collaboration",
    heightClass: "h-[470px]",
  },
  {
    id: 5,
    category: "Events",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    alt: "Annual event audience",
    title: "Annual Celebration Moments",
    heightClass: "h-[360px]",
  },
  {
    id: 6,
    category: "Achievements",
    src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=1200&q=80",
    alt: "Award ceremony stage",
    title: "Topper Felicitation Ceremony",
    heightClass: "h-[420px]",
  },
  {
    id: 7,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    alt: "Academic block corridor",
    title: "Premium Learning Infrastructure",
    heightClass: "h-[320px]",
  },
  {
    id: 8,
    category: "Events",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    alt: "Students performing on stage",
    title: "Cultural Showcase Highlights",
    heightClass: "h-[450px]",
  },
  {
    id: 9,
    category: "Achievements",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Graduation success visual",
    title: "Massive Success Milestones",
    heightClass: "h-[300px]",
  },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return galleryImages;
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  const selectedIndex = filteredImages.findIndex((image) => image.id === selectedImage);
  const selectedImageData = selectedIndex >= 0 ? filteredImages[selectedIndex] : null;

  const handlePrev = () => {
    if (!filteredImages.length || selectedIndex < 0) return;
    const nextIndex = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const handleNext = () => {
    if (!filteredImages.length || selectedIndex < 0) return;
    const nextIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

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

      <motion.div layout className="mt-8 columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3 lg:columns-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group relative mb-6 cursor-pointer break-inside-avoid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md shadow-slate-900/8"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className={`overflow-hidden ${image.heightClass}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-[120%] rounded-2xl border border-white/30 bg-white/20 p-3 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold">{image.title}</p>
                <p className="mt-0.5 text-xs text-white/90">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="interactive-button absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handlePrev();
              }}
              className="interactive-button absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.86, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-black/20 shadow-2xl shadow-black/60"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-h-[80vh] w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-5 text-white">
                <p className="text-base font-semibold sm:text-lg">{selectedImageData.title}</p>
                <p className="text-xs text-white/85 sm:text-sm">{selectedImageData.category}</p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleNext();
              }}
              className="interactive-button absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPage;
