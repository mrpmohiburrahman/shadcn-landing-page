"use client"

import { Bell, DollarSign, Filter, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
    {
        title: "Instant Telegram Notifications",
        description:
            "Get alerted the second a deal drops. Speed is everything when booking mistake fares.",
        icon: Bell,
    },
    {
        title: "Deals Under $200 Round-Trip",
        description:
            "We focus on the craziest deals. Europe for $250? Japan for $350? We find them.",
        icon: DollarSign,
    },
    {
        title: "Smart Filters",
        description:
            "Set your home airport and preferred destinations. Don't get spammed with irrelevant deals.",
        icon: Filter,
    },
    {
        title: "Verified Deals Only",
        description:
            "No ghost fares. We verify every deal before sending it out to ensure it's bookable.",
        icon: ShieldCheck,
    },
]

export function FeaturesSection() {
    return (
        <section className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-12">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full border-none bg-muted/50 shadow-none transition-colors hover:bg-muted/80">
                            <CardHeader>
                                <feature.icon className="h-10 w-10 text-primary" />
                                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
