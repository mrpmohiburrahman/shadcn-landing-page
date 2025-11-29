import { useMemo } from "react";
import { ArrowRight, Plane } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "./ui/button";

type FloatingPlane = {
  left: number;
  top: number;
  deltaX: number;
  deltaY: number;
  duration: number;
};

export const Hero = () => {
  const floatingPlanes = useMemo<FloatingPlane[]>(
    () =>
      Array.from({ length: 16 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        deltaX: Math.random() * 100 - 50,
        deltaY: Math.random() * 100 - 50,
        duration: 20 + Math.random() * 10,
      })),
    []
  );

  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden py-8 md:py-12 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-background" />

        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {floatingPlanes.map((plane, i) => (
          <motion.div
            key={i}
            className="absolute text-sky-400/60 drop-shadow-[0_0_22px_rgba(56,189,248,0.35)] dark:text-sky-200/50"
            style={{
              left: `${plane.left}%`,
              top: `${plane.top}%`,
            }}
            animate={{
              x: [0, plane.deltaX],
              y: [0, plane.deltaY],
              rotate: [0, 360],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: plane.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Plane className="h-12 w-12" />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Get Insanely Cheap Flights <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Delivered Straight to Your Telegram
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-[42rem] text-lg text-muted-foreground sm:text-xl"
        >
          Real-time flight deal alerts from hundreds of sources. Mistake fares,
          flash sales, and error fares — before they disappear.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="https://t.me/cheap_flight_deal_bot"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="group h-12 px-8 text-lg shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30" size="lg">
              Add Bot to Telegram
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          Free forever • No spam • Leave anytime
        </motion.p>
      </div>
    </section>
  );
};
