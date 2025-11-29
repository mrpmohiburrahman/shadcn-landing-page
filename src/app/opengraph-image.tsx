import { ImageResponse } from "next/og"
import { readFile } from "fs/promises"
import { join } from "path"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "FlightDeal Bot - Get Insanely Cheap Flights"
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = "image/png"

// Image generation - serve static image
export default async function Image() {
    // For static image serving, we'll use Next.js static file handling
    // The actual image will be served from /public/og-image.png
    // This file ensures proper metadata is set

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f3460 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    padding: "60px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 40,
                        fontSize: 120,
                    }}
                >
                    ✈️
                </div>
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: 20,
                        background: "linear-gradient(to right, #00d4ff, #ffffff)",
                        backgroundClip: "text",
                        color: "transparent",
                        letterSpacing: "-2px",
                    }}
                >
                    FlightDeal Bot
                </div>
                <div
                    style={{
                        fontSize: 36,
                        color: "#a3a3a3",
                        textAlign: "center",
                        maxWidth: 900,
                        lineHeight: 1.4,
                    }}
                >
                    Get Insanely Cheap Flights Delivered to Telegram
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: 30,
                        marginTop: 50,
                        fontSize: 28,
                        color: "#00d4ff",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        🔔 Instant Alerts
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        💰 Under $200
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        ✅ Verified Deals
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
