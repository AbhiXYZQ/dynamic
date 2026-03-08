import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const eventImageSources = [
  {
    event: "Exam Prep Event",
    folder: "exam-prep_event",
    files: [
      "WhatsApp Image 2026-03-08 at 11.42.41 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.41 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.42 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.42 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.43 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.43 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.44 AM.jpeg",
    ],
  },
  {
    event: "Farewell Event",
    folder: "farewell_event",
    files: [
      "WhatsApp Image 2026-03-08 at 11.40.23 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.40.24 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.40.25 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.40.25 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.40.26 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.40.26 AM (2).jpeg",
      "WhatsApp Image 2026-03-08 at 11.40.26 AM.jpeg",
    ],
  },
  {
    event: "Holi Event",
    folder: "holi_event",
    files: [
      "WhatsApp Image 2026-03-08 at 11.39.19 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.39.19 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.39.20 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.39.20 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.39.21 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.39.21 AM.jpeg",
    ],
  },
  {
    event: "Independence Day Event",
    folder: "independence-day_event",
    files: [
      "WhatsApp Image 2026-03-08 at 11.44.19 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.20 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.20 AM (2).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.20 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.21 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.21 AM (2).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.21 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.22 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.23 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.23 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.24 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.24 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.25 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.26 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.28 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.28 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.29 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.29 AM (2).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.29 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.30 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.44.30 AM.jpeg",
    ],
  },
  {
    event: "Sports Day Event",
    folder: "Sports-day_event",
    files: [
      "WhatsApp Image 2026-03-08 at 11.41.56 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.41.56 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.41.57 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.41.57 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.41.59 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.41.59 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.00 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.00 AM.jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.01 AM (1).jpeg",
      "WhatsApp Image 2026-03-08 at 11.42.01 AM.jpeg",
      "WhatsApp Video 2026-03-08 at 11.42.00 AM.mp4",
      "WhatsApp Video 2026-03-08 at 11.42.01 AM.mp4",
    ],
  },
];

const galleryImages = eventImageSources.flatMap((source) =>
  source.files
    .filter((file) => /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(file))
    .map((file, fileIndex) => ({
      id: `${source.folder}-${fileIndex + 1}`,
      event: source.event,
      category: "Event",
      src: encodeURI(`/images/${source.folder}/${file}`),
      alt: `${source.event} photo ${fileIndex + 1}`,
      title: `${source.event} - Photo ${fileIndex + 1}`,
    }))
);

const GalleryPage = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const groupedByEvent = useMemo(() => {
    return galleryImages.reduce((groups, image) => {
      if (!groups[image.event]) {
        groups[image.event] = [];
      }
      groups[image.event].push(image);
      return groups;
    }, {});
  }, []);

  const eventSections = useMemo(() => {
    return Object.entries(groupedByEvent).map(([event, images]) => ({ event, images }));
  }, [groupedByEvent]);

  const selectedEventImages = useMemo(() => {
    if (!selectedEvent || !groupedByEvent[selectedEvent]) return [];
    return groupedByEvent[selectedEvent];
  }, [selectedEvent, groupedByEvent]);

  const selectedIndex = selectedEventImages.findIndex((image) => image.id === selectedImage);
  const selectedImageData = selectedIndex >= 0 ? selectedEventImages[selectedIndex] : null;

  const handlePrev = () => {
    if (!selectedEventImages.length || selectedIndex < 0) return;
    const nextIndex = (selectedIndex - 1 + selectedEventImages.length) % selectedEventImages.length;
    setSelectedImage(selectedEventImages[nextIndex].id);
  };

  const handleNext = () => {
    if (!selectedEventImages.length || selectedIndex < 0) return;
    const nextIndex = (selectedIndex + 1) % selectedEventImages.length;
    setSelectedImage(selectedEventImages[nextIndex].id);
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
          Explore all major events in separate sections for easy browsing.
        </p>
      </motion.div>

      <div className="mt-8 space-y-10">
        {eventSections.map((section, sectionIndex) => (
          <motion.div
            key={section.event}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: sectionIndex * 0.04 }}
            className="rounded-3xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-900/5 sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{section.event}</h2>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 sm:text-sm">
                {section.images.length} Photos
              </span>
            </div>

            <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {section.images.map((image) => (
                  <motion.button
                    key={`gallery-${image.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -8 }}
                    transition={{ duration: 0.28 }}
                    type="button"
                    onClick={() => {
                      setSelectedEvent(section.event);
                      setSelectedImage(image.id);
                    }}
                    aria-label={`Open ${image.title}`}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm shadow-slate-900/10"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 sm:aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>

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
