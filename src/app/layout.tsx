import { Poppins } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "AniWeb - Oshi no Ko Edition",
  description: "Website Anime Fullstack dengan Jikan API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans bg-onkyo-bg text-onkyo-text`}
      >
        <Navbar />
        {children}
        {/* Kamu bisa tambah Footer di sini nanti */}
      </body>
    </html>
  );
}
