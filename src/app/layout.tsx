import NavScrollExample from "@/components/layouts/Navbar/Navbar";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ani Web",
  description: "See Your Anime's on Ani Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Ani Web</title>
      </head>
      <body>
        <NavScrollExample />
        {children}
      </body>
    </html>
  );
}
