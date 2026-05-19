"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface Props {
  screenshots: string[];
  altPrefix: string;
}

export default function ScreenshotGallery({ screenshots, altPrefix }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (activeIndex !== null) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close]);

  if (screenshots.length === 0) {
    return <p className="mt-6 text-sm text-zinc-600">No screenshots added yet.</p>;
  }

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {screenshots.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800 cursor-zoom-in group"
          >
            <Image
              src={src}
              alt={`${altPrefix} — Screen ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[activeIndex]}
                alt={`${altPrefix} — Screen ${activeIndex + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
