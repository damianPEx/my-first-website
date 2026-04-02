import Link from "next/link";
import { Download, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const memes = [
  {
    id: 1,
    title: "Have you tried turning it off and on again?",
    type: "GIF",
    color: "#00ff00",
  },
  {
    id: 2,
    title: "The Internet in a Box",
    type: "Image",
    color: "#00ffff",
  },
  {
    id: 3,
    title: "Ludicrous Display",
    type: "GIF",
    color: "#ff00ff",
  },
  {
    id: 4,
    title: "Fire! Fire! Help me!",
    type: "Image",
    color: "#ffff00",
  },
  {
    id: 5,
    title: "A Fire... at a Sea Parks?",
    type: "GIF",
    color: "#00ff00",
  },
  {
    id: 6,
    title: "I'm disabled!",
    type: "Image",
    color: "#00ffff",
  },
];

export default function MemesPage() {
  return (
    <div className="min-h-screen px-6 py-16 sm:px-10 sm:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <Link
          href="/"
          className="mb-8 inline-block border-2 border-[#00ff00] px-6 py-3 text-sm text-[#00ff00] transition-all hover:bg-[#00ff00] hover:text-black"
        >
          &lt; BACK
        </Link>
        <h1 className="mt-8 text-3xl leading-relaxed">
          *** MEME STASH ***
        </h1>
        <p className="mt-6 text-sm text-[#00aa00]">
          &gt; SELECT YOUR WEAPON
        </p>
        {/* Scanline decoration */}
        <div className="mx-auto mt-6 h-px w-64 bg-[#00ff00] opacity-60" />
      </div>

      {/* Memes Grid */}
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="flex flex-col relative rounded-2xl border-2 bg-black/50 backdrop-blur-sm overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{
              borderColor: meme.color,
              boxShadow: `0 4px 0px ${meme.color}, inset 0 0 20px rgba(0,0,0,0.8)`,
            }}
          >
            {/* Pixel corner decorations */}
            <span
              className="absolute left-0 top-0 block h-2 w-2"
              style={{ backgroundColor: meme.color }}
            />
            <span
              className="absolute right-0 top-0 block h-2 w-2"
              style={{ backgroundColor: meme.color }}
            />

            {/* Image Placeholder */}
            <div className="aspect-video w-full bg-black/60 flex items-center justify-center border-b-2" style={{ borderColor: meme.color }}>
              <ImageIcon className="h-12 w-12 opacity-20" style={{ color: meme.color }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity backdrop-blur-[2px]">
                <span className="text-xs font-bold tracking-wider" style={{ color: meme.color, textShadow: `0 0 8px ${meme.color}` }}>
                  [ PREVIEW UNAVAILABLE ]
                </span>
              </div>
            </div>

            {/* Content & Action */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-6">
              <div>
                <p className="text-xs tracking-wider mb-2" style={{ color: meme.color }}>
                  TYPE: {meme.type}
                </p>
                <h3 className="text-[10px] sm:text-xs leading-relaxed text-foreground">
                  {meme.title}
                </h3>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full justify-between border-2 bg-transparent hover:text-black transition-all group"
                style={{ 
                  borderColor: meme.color,
                  color: meme.color
                }}
              >
                <span>DOWNLOAD FILE</span>
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="mx-auto mb-4 h-px w-64 bg-[#00ff00] opacity-60" />
        <p className="animate-pulse text-xs text-[#00aa00]">
          &gt;&gt; PRESS START TO CONTINUE &lt;&lt;
        </p>
      </div>
    </div>
  );
}
