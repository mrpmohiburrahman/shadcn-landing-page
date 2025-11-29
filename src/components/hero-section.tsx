"use client"

import Link from "next/link"
import { ArrowRight, Plane, TrendingDown, Users, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden py-8 md:py-12 lg:py-24">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-background" />

                {/* Animated Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
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

                {/* Floating Plane Icons */}
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-primary/10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Plane className="h-8 w-8" />
                    </motion.div>
                ))}
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center">
                {/* Pulsing Badge */}
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <div className="relative inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <motion.div
                            className="h-2 w-2 rounded-full bg-green-500"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                        <span>10,000+ travelers saving money daily</span>
                    </div>
                </motion.div> */}

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

                {/* Stats Row */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
                >
                    {[
                        { icon: Users, label: "Active Users", value: "10K+" },
                        { icon: TrendingDown, label: "Avg. Savings", value: "65%" },
                        { icon: DollarSign, label: "Total Saved", value: "$2M+" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                            className="flex flex-col items-center gap-2 rounded-lg border border-primary/10 bg-background/50 p-4 backdrop-blur-sm"
                        >
                            <stat.icon className="h-6 w-6 text-primary" />
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div> */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-8 flex flex-col gap-4 sm:flex-row"
                >
                    <Link href="https://t.me/cheap_flight_deal_bot" target="_blank" rel="noreferrer">
                        <Button size="lg" className="group h-12 px-8 text-lg shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
                            Add Bot to Telegram
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
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
    )
}
