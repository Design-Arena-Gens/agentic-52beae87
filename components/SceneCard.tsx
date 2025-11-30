'use client';

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SceneCardProps = {
  sceneNumber: number;
  title: string;
  mood: string;
  backdrop: string;
  description: string[];
  lyrics: string[];
  action: string[];
  icon?: ReactNode;
};

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18
};

export function SceneCard({
  sceneNumber,
  title,
  mood,
  backdrop,
  description,
  lyrics,
  action,
  icon
}: SceneCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={spring}
      className="relative overflow-hidden rounded-3xl bg-white/70 shadow-xl ring-1 ring-white/60 backdrop-blur-md"
    >
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden
        style={{ backgroundImage: backdrop, backgroundSize: "cover" }}
      >
        <span className="sr-only">{`${title} backdrop`}</span>
      </div>
      <div className="relative grid gap-6 p-8 md:grid-cols-[auto,1fr] md:gap-10 md:p-10">
        <div className="flex flex-col items-start gap-3">
          <span className="flex items-center gap-3 rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">
            Scene {sceneNumber.toString().padStart(2, "0")}
          </span>
          <h2 className="font-headline text-3xl font-semibold text-twilight md:text-4xl">
            {title}
          </h2>
          <p className="rounded-full bg-grass/70 px-4 py-1 text-sm font-medium text-green-900 shadow">
            {mood}
          </p>
          {icon}
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-slate-700 md:text-xl">
          <div className="space-y-3">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-2xl bg-white/70 p-6 shadow-inner">
            <h3 className="font-headline text-xl font-semibold text-twilight">
              Chorus
            </h3>
            <ul className="mt-3 space-y-2">
              {lyrics.map((line, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-sm text-slate-400">♪</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/80 p-6">
            <h3 className="font-headline text-xl font-semibold text-sky-800">
              Action Beat
            </h3>
            <ul className="mt-3 space-y-2">
              {action.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-sm text-slate-400">↬</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
