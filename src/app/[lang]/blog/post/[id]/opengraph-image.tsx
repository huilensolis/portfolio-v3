import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Huilen Solis's Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params: { id },
}: {
  params: { id: string };
}) {
  // Font
  const geistSemiBold = fetch(
    new URL(
      "../../../../../../public/Geist-1.3.0/Geist-1.3.0/statics-ttf/Geist-SemiBold.ttf",
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "rgb(10 10 10 / 1)",
          color: "rgb(250 250 250 / 1)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "5rem",
            textWrap: "balance",
            width: "80%",
          }}
        >
          {id.replaceAll("%20", " ")}
        </h1>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await geistSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
