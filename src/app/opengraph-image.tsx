import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0c10", color: "#e6e8eb", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 32, opacity: 0.7 }}>{site.url.replace(/^https?:\/\//, "")}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 80, fontWeight: 600, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 36, color: "#7cc4ff" }}>{site.role}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
