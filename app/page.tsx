import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Code2, Sparkles, Users } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 to-background">
          <Image
            src="/it-crowd-fire.png"
            alt="Fire Background"
            className="fixed left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-auto w-[min(691px,90vw)] max-w-none sm:w-[min(691px,78vw)] opacity-40 pointer-events-none"
            width={691}
            height={864}
            priority
          />

          <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  For fans of the show
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  The IT Crowd Fan Page
                </h1>
                <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                  Share memes, quote the classics, and find your people. Bring the
                  chaos of IT comedy into one place—no nonsense, just good jokes.
                </p>

                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg">
                    <Link href="#join">Join the Fan Club</Link>
                  </Button>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  Free, friendly, and mildly technical.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-10 -right-6 h-28 w-28 rounded-2xl bg-secondary/10 blur-2xl" />

                <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h2 className="text-lg font-medium">Today’s vibe</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    “Have you tried turning it off and on again?” but make it
                    community.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>Episode quote threads</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>Tech humor meets fandom</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>Friendly rules (mostly)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">
              What you’ll find here
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Three reasons to join in
            </h2>
            <p className="mt-3 text-muted-foreground">
              A small page with big laughs—built for browsing on any device.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/jokes">
              <Card className="shadow-sm transition-all hover:border-[#ff8800] hover:shadow-[0_0_12px_#ff8800]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Sitcom-level IT humor</CardTitle>
                      <CardDescription>
                        Share your favorite lines and moments from the show:
                        light, snappy, and always on brand.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Card className="shadow-sm">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>Community hangouts</CardTitle>
                    <CardDescription>
                      Connect with other fans. Swap memes, recommend episodes,
                      and celebrate the chaos together.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>Fresh meme energy</CardTitle>
                    <CardDescription>
                      Keep the jokes coming with weekly prompts and
                      &quot;quote of the moment&quot; posts.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer
          id="join"
          className="border-t border-border bg-background"
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
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
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

                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
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

            <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
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
      </main>
    </div>
  );
}
