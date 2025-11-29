"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function CtaSection() {
    return (
        <section className="container py-12 md:py-24 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Stop Overpaying for Flights
                </h2>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Join the community of smart travelers who never pay full price.
                    It&apos;s free, it&apos;s fast, and it works.
                </p>
                <Link href="https://t.me/cheap_flight_deal_bot" target="_blank" rel="noreferrer">
                    <Button size="lg" className="mt-4 h-12 px-8 text-lg">
                        Start Getting Deals Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </motion.div>
        </section>
    )
}
