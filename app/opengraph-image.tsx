import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Aletech - Innovative Technology Solutions"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111",
        }}
      >
        <img
          src="/images/aletch-logo.png"
          alt="Aletech Logo"
          width={600}
          height={315}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

