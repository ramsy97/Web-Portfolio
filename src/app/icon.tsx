import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 18,
          background: "linear-gradient(135deg, #111827 0%, #2563EB 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          borderRadius: 8,
          boxShadow: "0 2px 4px rgba(37, 99, 235, 0.2)",
        }}
      >
        RS
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
