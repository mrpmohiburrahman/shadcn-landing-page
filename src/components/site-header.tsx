import Link from "next/link"
import { Send } from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Send className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">
                            FlightDeal Bot
                        </span>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center space-x-2">
                        <Link
                            href="https://t.me/cheap_flight_deal_bot"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
                                <span className="sr-only">Telegram</span>
                                <Send className="h-4 w-4" />
                            </Button>
                        </Link>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
