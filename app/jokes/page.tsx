import Link from "next/link";

const jokes = [
  {
    character: "Moss",
    quote: "Have you tried turning it off and on again?",
    color: "#00ff00",
  },
  {
    character: "Roy",
    quote: "I'm sorry, are you from the past?",
    color: "#00ffff",
  },
  {
    character: "Jen",
    quote: "I'm the head of the IT department, and I need to tell you... what is a computer?",
    color: "#ff00ff",
  },
  {
    character: "Moss",
    quote: "I came here to drink milk and kick ass. And I've just finished my milk.",
    color: "#00ff00",
  },
  {
    character: "Roy",
    quote: "Did you see that ludicrous display last night?",
    color: "#00ffff",
  },
  {
    character: "Denholm",
    quote: "I'm going to have to ask you to leave the building immediately. You're being made redundant.",
    color: "#ffff00",
  },
  {
    character: "Moss",
    quote: "I'm not a man, I'm Moss.",
    color: "#00ff00",
  },
  {
    character: "Roy",
    quote: "People... people who need people.",
    color: "#00ffff",
  },
  {
    character: "Jen",
    quote: "From now on, we'll be using the internet as our main tool of communication.",
    color: "#ff00ff",
  },
  {
    character: "Moss",
    quote: "reynholm industries: where the impossible is made possible through hard work, determination, and... buying everyone expensive gifts.",
    color: "#00ff00",
  },
];

export default function JokesPage() {
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
          *** CLASSIC QUOTES ***
        </h1>
        <p className="mt-6 text-sm text-[#00aa00]">
          &gt; INSERT COIN TO CONTINUE
        </p>
        {/* Scanline decoration */}
        <div className="mx-auto mt-6 h-px w-64 bg-[#00ff00] opacity-60" />
      </div>

      {/* Jokes Grid */}
      <div className="mx-auto max-w-4xl space-y-20">
        {jokes.map((joke, i) => (
          <div
            key={i}
            className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="max-w-lg">
              {/* Character label */}
              <p
                className="mb-2 text-xs"
                style={{ color: joke.color, textShadow: `0 0 8px ${joke.color}` }}
              >
                {i % 2 === 0 ? "" : "                        "}
                {joke.character.toUpperCase()}:
              </p>

              {/* Speech bubble */}
              <div
                className="relative border-4 p-8 bg-black/50 backdrop-blur-sm"
                style={{
                  borderColor: joke.color,
                  boxShadow: `4px 4px 0px ${joke.color}, inset 0 0 20px rgba(0,0,0,0.8)`,
                }}
              >
                {/* Pixel corner decorations */}
                <span
                  className="absolute -left-1 -top-1 block h-2 w-2"
                  style={{ backgroundColor: joke.color }}
                />
                <span
                  className="absolute -right-1 -top-1 block h-2 w-2"
                  style={{ backgroundColor: joke.color }}
                />
                <span
                  className="absolute -bottom-1 -left-1 block h-2 w-2"
                  style={{ backgroundColor: joke.color }}
                />
                <span
                  className="absolute -bottom-1 -right-1 block h-2 w-2"
                  style={{ backgroundColor: joke.color }}
                />

                <p
                  className="text-sm leading-8 text-foreground"
                >
                  "{joke.quote}"
                </p>
              </div>

              {/* Speech bubble tail */}
              <div
                className={`mt-1 h-4 w-4 border-b-4 border-r-4 ${
                  i % 2 === 0 ? "ml-6" : "ml-auto mr-6"
                }`}
                style={{ borderColor: joke.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <div className="mx-auto mb-4 h-px w-64 bg-[#00ff00] opacity-60" />
        <p className="animate-pulse text-xs text-[#00aa00]">
          &gt;&gt; GAME OVER &lt;&lt;
        </p>
      </div>
    </div>
  );
}
