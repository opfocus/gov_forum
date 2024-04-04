import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gov Forum";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "rgb(249 250 251)",
          color: "rgb(248 113 113)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Gov Forum
      </div>
    ),
    size,
  );
}
