import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const memes = [
  {
    id: 1,
    title: "Have you tried turning it off and on again?",
    type: "GIF",
    color: "#00ff00",
    url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F7lCGDFxR9LYA/giphy.gif",
  },
  {
    id: 2,
    title: "The Internet in a Box",
    type: "GIF",
    color: "#00ffff",
    url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SZUnyBYeU9K24/giphy.gif",
  },
  {
    id: 3,
    title: "Ludicrous Display",
    type: "GIF",
    color: "#ff00ff",
    url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7LgKUsZiSjcRO/giphy.gif",
  },
  {
    id: 4,
    title: "Fire! Fire! Help me!",
    type: "GIF",
    color: "#ffff00",
    url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13AXYxkBWawwiQ/giphy.gif",
  },
  {
    id: 5,
    title: "A Fire... at a Sea Parks?",
    type: "GIF",
    color: "#00ff00",
    url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5z0cCCGooBQUtejM4W/giphy.gif",
  },
  {
    id: 6,
    title: "I'm disabled!",
    type: "GIF",
    color: "#00ffff",
    url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueXF3bm96ZzR0OHpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v9G3NGByE9x16/giphy.gif",
  },
];

export default function MemesPage() {
  return (
    <div className="min-h-screen bg-black text-[#00ff00] font-mono px-6 py-16 sm:px-10 sm:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <Link
          href="/"
          className="mb-8 inline-block border-2 border-[#00ff00] px-6 py-3 text-sm transition-all hover:bg-[#00ff00] hover:text-black"
        >
          &lt; BACK TO BASEMENT
        </Link>
        <h1 className="mt-8 text-3xl leading-relaxed uppercase tracking-tighter">
          *** MEME STASH ***
        </h1>
        <p className="mt-6 text-sm text-[#00aa00]">
          &gt; SELECT YOUR WEAPON
        </p>
        <div className="mx-auto mt-6 h-px w-64 bg-[#00ff00] opacity-60" />
      </div>

      {/* Memes Grid */}
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="flex flex-col relative rounded-lg border-2 bg-black/50 backdrop-blur-sm overflow-hidden transition-all hover:-translate-y-1"
            style={{
              borderColor: meme.color,
              boxShadow: `0 8px 0px -4px ${meme.color}`,
            }}
          >
            {/* Image Container */}
            <div className="aspect-video w-full bg-black/60 flex items-center justify-center border-b-2 overflow-hidden" style={{ borderColor: meme.color }}>
              <img
                src={meme.url}
                alt={meme.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Content & Action */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-6">
              <div>
                <p className="text-[10px] tracking-widest mb-2 opacity-70" style={{ color: meme.color }}>
                  TYPE: {meme.type} // ID: 00{meme.id}
                </p>
                <h3 className="text-xs sm:text-sm uppercase leading-tight text-white">
                  {meme.title}
                </h3>
              </div>

              <a
                href={meme.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full justify-between border-2 bg-transparent hover:text-black transition-all group"
                  style={{
                    borderColor: meme.color,
                    color: meme.color
                  }}
                >
                  <span className="text-[10px] font-bold">DOWNLOAD_ASSET.SH</span>
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="mx-auto mb-4 h-px w-64 bg-[#00ff00] opacity-60" />
        <p className="animate-pulse text-xs text-[#00aa00]">
          &gt;&gt; CAUTION: DO NOT TYPE 'GOOGLE' INTO GOOGLE &lt;&lt;
        </p>
      </div>
    </div>
  );
}