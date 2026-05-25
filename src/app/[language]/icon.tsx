import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
  const fontBoldBuffer = readFileSync(
    join(process.cwd(), "src/assets/fonts/proxima-nova/ProximaNova-Bold.ttf"),
  );

  return new ImageResponse(
    <div
      style={{
        width: 256,
        height: 256,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#18191b",
        borderRadius: 52,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: -40,
          left: -40,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(54,244,164,0.18) 0%, transparent 65%)",
          display: "flex",
        }}
      />

      <span
        style={{
          fontSize: 140,
          fontWeight: 700,
          color: "#36f4a4",
          fontFamily: "ProximaNova",
          lineHeight: 1,
          letterSpacing: -4,
        }}
      >
        J
      </span>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "ProximaNova",
          data: fontBoldBuffer,
          weight: 700,
        },
      ],
    },
  );
}
