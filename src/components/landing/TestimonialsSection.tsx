const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahcreates",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Mule Run changed my content game completely. I went from posting once a week to daily, and my engagement has tripled!",
  },
  {
    name: "Marcus Johnson",
    handle: "@marcusj_dev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "The AI understands my brand voice perfectly. It's like having a creative partner that never sleeps.",
  },
  {
    name: "Elena Rodriguez",
    handle: "@elena.designs",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "From YouTube to TikTok to Instagram—one click and I'm everywhere. This is the future of content creation.",
  },
  {
    name: "David Kim",
    handle: "@davidkim.ai",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    content: "I saved 20+ hours per week on content creation. Now I focus on what matters—connecting with my audience.",
  },
  {
    name: "Aisha Patel",
    handle: "@aisha_creates",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    content: "The thumbnail generator alone is worth it. My CTR went from 3% to 12% overnight!",
  },
  {
    name: "Tom Anderson",
    handle: "@tomanderson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content: "Finally, a tool that gets creators. Simple, fast, and actually useful. 10/10 would recommend.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cream border-y-2 border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-foreground/60 uppercase tracking-wider">
            Loved by creators
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            Hi this is a section title
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 border-2 border-border card-shadow-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-highlight"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.handle}</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
