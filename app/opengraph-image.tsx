import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Nora Portal"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#0284C7", // primary color from our theme
      }}
    >
      <div style={{ fontSize: "128px", fontWeight: "bold" }}>NORA Portal</div>
      <div style={{ fontSize: "48px", marginTop: "20px", color: "#64748B" }}>Healthcare Management</div>
    </div>,
    {
      ...size,
    },
  )
}

