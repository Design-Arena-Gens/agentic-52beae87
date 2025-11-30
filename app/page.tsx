'use client';

import { SceneCard } from "@/components/SceneCard";
import { motion } from "framer-motion";

const scenes = [
  {
    sceneNumber: 1,
    title: "Park Opens",
    mood: "Bright, cheerful tune as kids play in the park.",
    backdrop:
      "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(167,216,255,0.55)), radial-gradient(circle at top right, rgba(255,220,180,0.6), transparent 55%)",
    description: [
      "The park gates open as sunlight pours through the trees. Kids skip, twirl ribbons, and race paper planes while sparrows flutter overhead. A glockenspiel and hand-clap beat sparkle in the air.",
      "The narrator invites everyone to sing along, teaching the day's mission: spreading respect with smiles, steady rhythms, and dancing feet."
    ],
    lyrics: [
      "When we step outside to play, we learn new things each happy day!",
      "Clap along and you will see, how respect makes hearts feel free!",
      "R-E-S-P-E-C-T, clap your hands and sing with me!"
    ],
    action: [
      "Kids form a circle, clapping in time as colorful streamers wave overhead.",
      "Two friends act out a pantomime of greeting elders with bows and high-fives.",
      "Drum accents cue the audience to join the R-E-S-P-E-C-T spell-out."
    ],
    icon: (
      <motion.div
        className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-grass shadow"
        animate={{ rotate: [0, -3, 3, 0], transition: { repeat: Infinity, duration: 4 } }}
      >
        <span role="img" aria-label="sun">
          🌞
        </span>
        Park Daybreak
      </motion.div>
    )
  },
  {
    sceneNumber: 2,
    title: "Grandma Meena Drops Her Bag",
    mood: "Gentle surprise with a bouncy marimba rhythm.",
    backdrop:
      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(138,209,124,0.45)), radial-gradient(circle at left, rgba(250,244,196,0.7), transparent 60%)",
    description: [
      "Grandma Meena strolls by with a woven grocery bag. It slips, lands with a cushioned thump, and apples scatter like ruby marbles across the path.",
      "Ria halts mid-run, hums a two-note call-and-response, and the chorus of children glides in to lend a hand."
    ],
    lyrics: [
      "Oh no, the apples start to roll—catch them quick, that is our goal!",
      "With kind words and helping hands, respect together always stands!",
      "Lift, pick, smile so bright—share your strength and do what's right!"
    ],
    action: [
      "Ria slides on her knees to gather apples while two friends steady the bag.",
      "Another child offers Grandma Meena an arm, guiding her safely to a nearby bench.",
      "Grandma and kids finish with a joyful spin, tossing silk scarves to mimic swirling apples."
    ],
    icon: (
      <motion.div
        className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-twilight shadow"
        animate={{
          y: [0, -4, 0],
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
      >
        <span role="img" aria-label="falling apples">
          🍎
        </span>
        Helping Hands
      </motion.div>
    )
  },
  {
    sceneNumber: 3,
    title: "Grandpa Ravi's Story Bench",
    mood: "Warm acoustic strum with handpan echoes.",
    backdrop:
      "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(98,71,170,0.35)), radial-gradient(circle at bottom right, rgba(255,182,193,0.55), transparent 65%)",
    description: [
      "Grandpa Ravi sits beneath a banyan tree unfolding an old, crinkled kite map. The breeze tries to whisk it away, but the kids arrive just in time.",
      "They kneel beside him, listen intently, and echo his tales with soft harmonies while tracing the map's patterns in the air."
    ],
    lyrics: [
      "Sit and listen, hearts align—wisdom glows like lantern shine.",
      "Humble ears and patient eyes make Grandpa's stories reach the skies.",
      "R-E-S-P-E-C-T, learn from every memory!"
    ],
    action: [
      "Kids lay a picnic blanket, smoothing corners to keep the map steady.",
      "A call-and-response chant echoes Grandpa's lines, inviting the audience to repeat key words.",
      "They close with a group bow, lifting the map like a flag of respect."
    ],
    icon: (
      <motion.div
        className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-orange-600 shadow"
        animate={{
          scale: [1, 1.05, 1],
          transition: { repeat: Infinity, duration: 5, ease: "easeInOut" }
        }}
      >
        <span role="img" aria-label="sparkles">
          ✨
        </span>
        Listening Hearts
      </motion.div>
    )
  },
  {
    sceneNumber: 4,
    title: "Respect Parade Finale",
    mood: "Upbeat pop groove with claps and bloom synths.",
    backdrop:
      "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,200,124,0.4)), radial-gradient(circle at center, rgba(167,216,255,0.6), transparent 60%)",
    description: [
      "As evening paints the clouds peach and lavender, families gather for one last chorus. Lanterns drift upward, reflecting in every smiling face.",
      "The kids lead a parade around the park, weaving the lessons together into a joyful celebration that invites everyone watching."
    ],
    lyrics: [
      "Respect is love that we can show, to every elder that we know!",
      "Marching, singing, side by side—let compassion be our guide!",
      "R-E-S-P-E-C-T, keep it in our melody!"
    ],
    action: [
      "The chorus forms a figure-eight march, creating waves of color with ribbons and kites.",
      "Elders join the line, receiving paper crowns and thank-you charms from the children.",
      "The finale ends with a collective pose, hands over hearts while the audience echoes the spell-out refrain."
    ],
    icon: (
      <motion.div
        className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-pink-600 shadow"
        animate={{
          opacity: [0.8, 1, 0.8],
          transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }}
      >
        <span role="img" aria-label="music notes">
          🎶
        </span>
        Grand Finale
      </motion.div>
    )
  }
];

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 md:px-10 md:py-20 lg:py-24">
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-sky-100/70 to-grass/70 p-10 shadow-2xl ring-1 ring-white md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-slate-600 shadow">
            Respect Musical Storyboard
          </span>
          <h1 className="font-headline text-4xl font-extrabold text-twilight sm:text-5xl lg:text-6xl">
            Park Parade of Respect
          </h1>
          <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
            A web-friendly storyboard capturing the melodies, choreography, and heart of a
            children&apos;s musical teaching respect for elders. Each scene blends lyrics, action
            beats, and visual direction so your creative team can bring the park to life.
          </p>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute -top-20 right-12 h-40 w-40 rounded-full bg-white/60 blur-2xl"
          animate={{
            y: [0, 10, 0],
            transition: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl"
          animate={{
            x: [0, 8, 0],
            transition: { repeat: Infinity, duration: 5, ease: "easeInOut" }
          }}
        />
      </header>

      <section className="grid gap-12">
        {scenes.map((scene) => (
          <SceneCard key={scene.sceneNumber} {...scene} />
        ))}
      </section>

      <footer className="mb-10 rounded-3xl bg-white/80 p-8 text-center text-sm text-slate-500 shadow-md ring-1 ring-white">
        Created as a ready-to-stage concept. Pair with live instruments, playful set pieces, and a
        community cast to share the joy of respect.
      </footer>
    </main>
  );
}
`use client`;
