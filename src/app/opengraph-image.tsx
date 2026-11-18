import { ImageResponse } from "next/og";
import { config } from "@/data/config";

export const alt = config.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f172a",
          color: "#f8fafc",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700 }}>{config.author}</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#94a3b8" }}>
          {config.role}
        </div>
      </div>
    ),
    size
  );
}
