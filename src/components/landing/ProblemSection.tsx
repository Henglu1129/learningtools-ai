const problems = [
  {
    question: "Out Of Content Ideas?",
    description: "Staring at a blank screen wondering what to post next?",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=100&fit=crop",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=100&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop",
    ],
    solution: "AI generates unlimited ideas tailored to your niche",
    align: "left",
  },
  {
    question: "Creating Content Takes Forever?",
    description: "Hours spent editing for just one piece of content?",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=100&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=100&fit=crop",
    ],
    solution: "Create in minutes, not hours",
    align: "right",
  },
  {
    question: "Great Content, But No Clicks?",
    description: "Your content is amazing but nobody sees it?",
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=100&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=100&fit=crop",
    ],
    solution: "AI-optimized titles and thumbnails that get clicks",
    align: "left",
  },
  {
    question: "Posting To Just One Platform?",
    description: "Missing out on audiences across other platforms?",
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=100&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=100&fit=crop",
    ],
    solution: "One click, publish everywhere",
    align: "right",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid gap-16 md:gap-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                problem.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="font-mono text-sm text-highlight-foreground mb-2 flex items-center gap-2">
                  <span className="text-highlight px-2 py-0.5">✗✗✗</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-3">{problem.question}</h3>
                <p className="text-foreground/60 mb-4">{problem.description}</p>
                <p className="font-mono text-sm text-highlight-foreground bg-highlight inline-block px-3 py-1">
                  → {problem.solution}
                </p>
              </div>

              <div className="flex gap-3 flex-wrap justify-center">
                {problem.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative group"
                    style={{
                      transform: `rotate(${imgIndex % 2 === 0 ? "-2" : "2"}deg)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-highlight -z-10 translate-x-2 translate-y-2 rounded" />
                    <img
                      src={img}
                      alt=""
                      className="w-28 h-20 md:w-36 md:h-24 object-cover border-2 border-primary rounded transition-transform group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
