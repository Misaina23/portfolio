import { ImageResponse } from "next/og";

export const alt = "DevMisaina — Développeur Full Stack Web & Mobile";
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
          background: "linear-gradient(135deg, #181d27 0%, #11141b 100%)",
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
              background: "#ffb400",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 800,
              color: "#181d27",
            }}
          >
            DM
          </div>
          <div style={{ fontSize: "28px", color: "#ffb400", fontWeight: 700 }}>DevMisaina</div>
        </div>

        <div style={{ marginTop: "40px", fontSize: "72px", fontWeight: 800, lineHeight: 1.05, display: "flex", gap: "16px" }}>
          <span>I am</span>
          <span style={{ color: "#ffb400" }}>DevMisaina</span>
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
