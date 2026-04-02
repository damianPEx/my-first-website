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
        <section className="relative overflow-hidden bg-transparent">
          <div className="relative z-10 mx-auto max-w-7xl px-8 py-20 sm:px-12 sm:py-32 lg:px-16 lg:py-40">
            <div className="grid items-start gap-16 lg:grid-cols-2 pt-4">
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

              <div className="relative flex flex-col items-end pt-10 sm:pt-14">
                <div className="absolute -left-6 top-32 h-24 w-24 rounded-2xl bg-primary/10 blur-2xl z-0" />
                <div className="absolute -bottom-10 -right-6 h-28 w-28 rounded-2xl bg-secondary/10 blur-2xl z-0" />

                <Image
                  src="/it-crowd-fire.png"
                  alt="IT Crowd Fire"
                  width={691}
                  height={864}
                  className="w-[60%] h-auto z-20 drop-shadow-[0_-5px_15px_rgba(0,255,0,0.2)] block -mb-[2px] mr-4"
                />

                <div className="relative w-full rounded-2xl border border-border bg-card backdrop-blur-sm p-10 shadow-sm z-10 text-left">
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
        <section id="features" className="mx-auto max-w-7xl px-8 py-20 sm:px-12 sm:py-32 lg:px-16">
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

            <Link href="/memes">
              <Card className="shadow-sm transition-all hover:border-[#ff8800] hover:shadow-[0_0_12px_#ff8800]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Fresh meme energy</CardTitle>
                      <CardDescription>
                        A gallery of downloadable IT Crowd memes and gifs.
                        Because words aren't enough.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>


      </main>
    </div>
  );
}
