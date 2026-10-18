import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sumnora",
    short_name: "Sumnora",
    description: "AI-native software development studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F2",
    theme_color: "#E34224",
    icons: [
      { src: "/brand/sumnora-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/sumnora-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
