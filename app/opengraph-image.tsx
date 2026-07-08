import { ImageResponse } from "next/og";

export const alt = "ANDRIANISAINA Nanga Miaramanana — Développeur Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #070b16 0%, #0f172a 60%, #111827 100%)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            M
          </div>
          <div style={{ fontSize: "26px", color: "#818cf8", fontWeight: 600 }}>DevMisaina</div>
        </div>

        <div style={{ marginTop: "40px", fontSize: "64px", fontWeight: 800, lineHeight: 1.05 }}>
          ANDRIANISAINA
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.05,
            background: "linear-gradient(135deg, #818cf8, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Nanga Miaramanana
        </div>

        <div style={{ marginTop: "32px", fontSize: "30px", color: "#94a3b8" }}>
          Développeur Full Stack Web &amp; Mobile
        </div>
        <div style={{ marginTop: "48px", display: "flex", gap: "16px", fontSize: "22px", color: "#cbd5e1" }}>
          <span style={{ padding: "8px 18px", borderRadius: "999px", border: "1px solid #1e293b" }}>Next.js</span>
          <span style={{ padding: "8px 18px", borderRadius: "999px", border: "1px solid #1e293b" }}>React</span>
          <span style={{ padding: "8px 18px", borderRadius: "999px", border: "1px solid #1e293b" }}>Laravel</span>
          <span style={{ padding: "8px 18px", borderRadius: "999px", border: "1px solid #1e293b" }}>Flutter</span>
        </div>
      </div>
    ),
    size,
  );
}
