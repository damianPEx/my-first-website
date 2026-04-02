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
            <Link
              href="/memes"
              style={{ color: "#000000", textShadow: "1px 1px 0px #cc6600" }}
              className="text-xs transition-opacity hover:opacity-70"
            >
              MEMES
            </Link>
          </div>
        </nav>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        {/* Footer / Contact */}
        <footer
          id="join"
          className="border-t-2 border-[#ff8800] bg-background backdrop-blur-sm mt-auto"
        >
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Want to collaborate or share your best IT Crowd quotes?
                  Reach out—we read everything.
                </p>
              </div>

              <div className="grid w-full gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card backdrop-blur-sm p-5 shadow-sm">
                  <p className="text-xs font-medium text-muted-foreground">
                    Email
                  </p>
                  <a
                    className="mt-1 block text-sm font-medium underline underline-offset-4 break-all sm:break-words"
                    href="mailto:hello@itcrowdfans.dev"
                  >
                    hello@itcrowdfans.dev
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-card backdrop-blur-sm p-5 shadow-sm">
                  <p className="text-xs font-medium text-muted-foreground">
                    Discord
                  </p>
                  <a
                    className="mt-1 block text-sm font-medium underline underline-offset-4 break-words"
                    href="https://example.com/discord"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join the server
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2 border-t-2 border-[#ff8800] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} IT Crowd Fan Page. All laughs
                reserved.
              </p>
              <Link
                href="#features"
                className="text-sm font-medium underline underline-offset-4"
              >
                Back to features
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
