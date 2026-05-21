import "./globals.css";
import site from "../content/site.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: site.brand.name,
  description: site.brand.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
          {`:root {
            --site-bg: ${site.palette.background};
            --site-fg: ${site.palette.foreground};
            --site-primary: ${site.palette.primary};
            --site-accent: ${site.palette.accent};
          }`}
        </style>
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
