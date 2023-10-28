import NavScrollExample from "@/components/layouts/Navbar/Navbar";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchProvider } from "@/lib/context/SearchContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <SearchProvider>
          <NavScrollExample />
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
