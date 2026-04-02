import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The IT Crowd Fan Page",
  description: "A small fan landing page for the show The IT Crowd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        {/* Synthwave Background Elements */}
        <div className="bg-synthwave">
          <div className="bg-synthwave-stars" />
          <div className="bg-synthwave-horizon" />
          <div className="bg-synthwave-grid" />
          <div className="bg-synthwave-vignette" />
        </div>

        <nav
          style={{
            backgroundColor: "#ff8800",
            borderBottom: "3px solid #cc6600",
            boxShadow: "0 3px 0px #cc6600",
          }}
          className="sticky top-0 z-50 w-full px-6 py-3"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-end gap-6">
            <Link
              href="/"
              style={{ color: "#000000", textShadow: "1px 1px 0px #cc6600" }}
              className="text-xs transition-opacity hover:opacity-70"
            >
              HOME
            </Link>
            <Link
              href="/jokes"
              style={{ color: "#000000", textShadow: "1px 1px 0px #cc6600" }}
              className="text-xs transition-opacity hover:opacity-70"
            >
              QUOTES
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
