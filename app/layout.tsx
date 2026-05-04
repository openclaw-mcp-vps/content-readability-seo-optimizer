import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReadabilitySEO — Optimize Content for Humans & Search Engines",
  description: "Analyze readability scores, sentence complexity, and SEO keywords. Get real-time suggestions to improve both user experience and search rankings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ae159bde-12ad-44b7-ba67-dfa1a78bae87"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
