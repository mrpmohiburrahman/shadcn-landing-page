import { motion } from "framer-motion";
import { Bell, Plane, Settings } from "lucide-react";

const steps = [
  {
    title: "Add Bot to Telegram",
    description: "Click the button to open our bot in Telegram. It takes 2 seconds.",
    icon: Plane,
  },
  {
    title: "Set Preferences",
    description: "Tell the bot your home airport and where you want to go (or 'Anywhere').",
    icon: Settings,
  },
  {
    title: "Get Alerts",
    description: "Sit back. We'll ping you when we find a deal that matches your criteria.",
    icon: Bell,
  },
];

export const HowItWorks = () => {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-[42rem] text-muted-foreground sm:text-xl">
          Three simple steps to start saving hundreds on your next trip.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <step.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
