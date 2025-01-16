import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Huilen Solis's Blog";
export const size = {
    width: 800,
    height: 400,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    // Font
    const geistSemiBold = fetch(
        new URL(
            "../../public/fonts/geist-1.3.0/statics-ttf/Geist-SemiBold.ttf",
            import.meta.url,
        ),
    ).then((res) => res.arrayBuffer());

    const geistMedium = fetch(
        new URL(
            "../../public/fonts/geist-1.3.0/statics-ttf/Geist-Medium.ttf",
            import.meta.url,
        ),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    backgroundColor: "white",
                    color: "rgb(23 23 23 / 1)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "2rem",
                    lineHeight: "0.75",
                    letterSpacing: "-0.025em",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "4rem",
                        textWrap: "balance",
                        fontWeight: 400,
                    }}
                >
                    Huilen Solis
                </h1>
                <span
                    style={{
                        fontSize: "2rem",
                        fontWeight: 300,
                    }}
                >
                    Full stack engineer
                </span>
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
                {
                    name: "Inter",
                    data: await geistMedium,
                    style: "normal",
                    weight: 300,
                },
            ],
        },
    );
}
