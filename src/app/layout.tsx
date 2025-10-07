import type { Metadata } from "next";
import "./globals.css";
import { Aboreto, Montserrat, Major_Mono_Display, Poiret_One, Whisper } from "next/font/google";

const aboreto = Aboreto({ subsets: ["latin"], weight: "400", variable: "--font-aboreto" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const majorMono = Major_Mono_Display({ subsets: ["latin"], weight: "400", variable: "--font-majorMono" });
const poiret = Poiret_One({subsets: ["latin"], weight: "400", variable: "--font-poiret"});
const whisper = Whisper({subsets: ["latin"], weight: "400", variable: "--font-whisper"});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js, TypeScript and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${aboreto.className} ${whisper.variable} ${poiret.variable} ${majorMono.variable}`}>{children}</body>
    </html>
  );
}
