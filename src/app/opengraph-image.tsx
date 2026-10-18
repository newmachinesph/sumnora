import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Sumnora — Built for the work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const readAsset = (file: string, mime: string) =>
  readFile(join(process.cwd(), "public", "brand", file), "base64")
    .then((data) => `data:${mime};base64,${data}`)
    .catch(() => null);

const markSrc = await readAsset("sumnora-mark.png", "image/png");
const sculptureSrc = await readAsset("engineering-og.jpg", "image/jpeg");

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          color: "#171714",
          background: "#FBF7F2",
        }}
      >
        <div style={{ position: "absolute", inset: 22, display: "flex", border: "1px solid #D8D0C6" }} />
        <div style={{ position: "absolute", top: 22, bottom: 22, left: 22, width: 10, display: "flex", background: "#E34224" }} />

        <div
          style={{
            position: "absolute",
            left: 72,
            top: 58,
            width: 520,
            height: 514,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", height: 52 }}>
            {markSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img alt="" src={markSrc} width="30" height="52" style={{ width: 30, height: 52 }} />
            ) : null}
            <div style={{ display: "flex", marginLeft: 18, fontSize: 34, fontWeight: 700, letterSpacing: "-0.04em" }}>
              Sumnora
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 78,
              fontFamily: "serif",
              fontSize: 78,
              fontWeight: 400,
              lineHeight: 0.94,
              letterSpacing: "-0.055em",
            }}
          >
            <span>Built for</span>
            <span style={{ color: "#E34224" }}>the work.</span>
          </div>

          <div style={{ display: "flex", marginTop: "auto", fontSize: 19, color: "#68645E" }}>
            Sumnora · Philippines
          </div>
        </div>

        {sculptureSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt=""
            src={sculptureSrc}
            width="660"
            height="440"
            style={{
              position: "absolute",
              left: 514,
              top: 86,
              width: 660,
              height: 440,
              objectFit: "contain",
            }}
          />
        ) : (
          <svg
            width="660"
            height="440"
            viewBox="0 0 660 440"
            fill="none"
            style={{ position: "absolute", left: 514, top: 86 }}
            aria-hidden="true"
          >
            <rect x="38" y="34" width="584" height="372" rx="186" fill="#F1E9E0" />
            <path d="M122 222H258L330 151L402 289L538 222" stroke="#BEB4A8" strokeWidth="2" />
            <path d="M122 222H258L330 151L402 289L538 222" stroke="#E34224" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="122" cy="222" r="23" fill="#FBF7F2" stroke="#E34224" strokeWidth="7" />
            <circle cx="258" cy="222" r="23" fill="#FBF7F2" stroke="#E34224" strokeWidth="7" />
            <circle cx="330" cy="151" r="23" fill="#FBF7F2" stroke="#E34224" strokeWidth="7" />
            <circle cx="402" cy="289" r="23" fill="#FBF7F2" stroke="#E34224" strokeWidth="7" />
            <circle cx="538" cy="222" r="31" fill="#171714" />
            <path d="m524 222 10 10 19-23" stroke="#FBF7F2" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}

        <div
          style={{
            position: "absolute",
            right: 58,
            bottom: 48,
            display: "flex",
            fontSize: 18,
            fontWeight: 650,
            color: "#171714",
          }}
        >
          sumnora.com
        </div>
      </div>
    ),
    size,
  );
}
