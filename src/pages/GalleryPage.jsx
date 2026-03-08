import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const filters = ["All", "Campus", "Achievements", "Events"];

const galleryImages = [
  {
    id: 1,
    category: "Campus",
    src: "/school-logo.png",
    alt: "Modern campus building",
    title: "Flagship Campus Block",
  },
  {
    id: 2,
    category: "Achievements",
    src: "/school-logo.png",
    alt: "Students with medals",
    title: "National Merit Recognition",
  },
  {
    id: 3,
    category: "Events",
    src: "/school-logo.png",
    alt: "Classroom seminar session",
    title: "Interactive Seminar Day",
  },
  {
    id: 4,
    category: "Campus",
    src: "/school-logo.png",
    alt: "Students on campus lawn",
    title: "Campus Life & Collaboration",
  },
  {
    id: 5,
    category: "Events",
    src: "/school-logo.png",
    alt: "Annual event audience",
    title: "Annual Celebration Moments",
  },
  {
    id: 6,
    category: "Achievements",
    src: "/school-logo.png",
    alt: "Award ceremony stage",
    title: "Topper Felicitation Ceremony",
  },
  {
    id: 7,
    category: "Campus",
    src: "/school-logo.png",
    alt: "Academic block corridor",
    title: "Premium Learning Infrastructure",
  },
  {
    id: 8,
    category: "Events",
    src: "/school-logo.png",
    alt: "Students performing on stage",
    title: "Cultural Showcase Highlights",
  },
  {
    id: 9,
    category: "Achievements",
    src: "/school-logo.png",
    alt: "Graduation success visual",
    title: "Massive Success Milestones",
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
          Glimpses of life, learning and massive success at Dynamic Campus.
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

      <motion.div layout className="mt-8 sm:hidden">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-sm font-semibold text-slate-700">Mobile Gallery View</p>
          <p className="text-xs text-slate-500">Tap any photo to open</p>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.button
                key={`mobile-${image.id}`}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                transition={{ duration: 0.3 }}
                type="button"
                onClick={() => setSelectedImage(image.id)}
                className="group relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-md shadow-slate-900/8"
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-auto w-full object-contain transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/30 bg-white/20 p-3 text-white backdrop-blur-md">
                  <p className="text-sm font-semibold leading-snug">{image.title}</p>
                  <p className="mt-0.5 text-xs text-white/90">{image.category}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div layout className="mt-8 hidden grid-cols-2 gap-6 sm:grid md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image) => (
            <motion.button
              key={`desktop-${image.id}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              type="button"
              onClick={() => setSelectedImage(image.id)}
              aria-label={`Open ${image.title}`}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-md shadow-slate-900/8"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-[120%] rounded-2xl border border-white/30 bg-white/20 p-3 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold">{image.title}</p>
                <p className="mt-0.5 text-xs text-white/90">{image.category}</p>
              </div>
            </motion.button>
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
              className="interactive-button absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 sm:inline-flex sm:left-6"
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
              className="interactive-button absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 sm:inline-flex sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-3 px-4 sm:hidden">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handlePrev();
                }}
                className="interactive-button inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleNext();
                }}
                className="interactive-button inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPage;
