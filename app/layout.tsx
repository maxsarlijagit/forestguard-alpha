import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForestGuard — Detect in minutes. Respond in seconds.",
  description: "Global wildfire detection and autonomous response system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
