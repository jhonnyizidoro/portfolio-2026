import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

import { siteUrl } from "@/constants";

import type { Language } from "@/@types/i18n";
import en from "@/messages/en.json";
import ptBr from "@/messages/pt-br.json";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ language: string }>;
};

export default async function OpengraphImage({ params }: Props) {
  const { language } = await params;
  const t = (language as Language) === "en" ? en : ptBr;
  const { ogTitle: title, ogTagline: tagline, ogEyebrow: eyebrow } = t.seo;

  const photoBuffer = readFileSync(
    join(process.cwd(), "src/components/organisms/Introduction/images/me.jpg"),
  );
  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  const fontBoldBuffer = readFileSync(
    join(process.cwd(), "src/assets/fonts/proxima-nova/ProximaNova-Bold.ttf"),
  );

  const fontSemiboldBuffer = readFileSync(
    join(
      process.cwd(),
      "src/assets/fonts/proxima-nova/ProximaNova-Semibold.ttf",
    ),
  );

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        background: "#18191b",
        position: "relative",
      }}
    >
      {/* Ambient green glow top-left */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(54,244,164,0.12) 0%, transparent 65%)",
          display: "flex",
        }}
      />

      {/* Ambient glow bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: 280,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(54,244,164,0.07) 0%, transparent 65%)",
          display: "flex",
        }}
      />

      {/* Left content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 72px",
          flex: 1,
          gap: 0,
        }}
      >
        {/* Eyebrow label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#36f4a4",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 18,
              color: "#36f4a4",
              fontFamily: "ProximaNova",
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#e8e8e8",
            fontFamily: "ProximaNova",
            lineHeight: 1.05,
            marginBottom: 16,
          }}
        >
          Jhonny Menarim
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 30,
            color: "#36f4a4",
            fontFamily: "ProximaNova",
            fontWeight: 600,
            marginBottom: 36,
          }}
        >
          {title}
        </div>

        {/* Stack tagline */}
        <div
          style={{
            fontSize: 20,
            color: "#b7b7b7",
            fontFamily: "ProximaNova",
            fontWeight: 400,
          }}
        >
          {tagline}
        </div>

        {/* Domain */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: 48,
            fontSize: 18,
            color: "#666",
            fontFamily: "ProximaNova",
          }}
        >
          {siteUrl.split("/").pop()}
        </div>
      </div>

      {/* Right — photo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 72,
          paddingLeft: 24,
        }}
      >
        <img
          src={photoSrc}
          width={320}
          height={320}
          alt="Jhonny Menarim"
          style={{
            borderRadius: "50%",
            border: "3px solid rgba(54,244,164,0.35)",
            objectFit: "cover",
          }}
        />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "ProximaNova",
          data: fontBoldBuffer,
          weight: 700,
        },
        {
          name: "ProximaNova",
          data: fontSemiboldBuffer,
          weight: 600,
        },
      ],
    },
  );
}
