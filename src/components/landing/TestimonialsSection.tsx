import avatarAnselm from "@/assets/avatar-anselm-new.png";
import avatarJames from "@/assets/avatar-james.png";
import avatarLauren from "@/assets/avatar-lauren-new.png";
import avatarAhmed from "@/assets/avatar-ahmed.png";
import avatarClaire from "@/assets/avatar-claire.png";
import avatarMarcus from "@/assets/avatar-marcus.png";

const testimonials = [
  {
    name: "Anselm Richter",
    role: "Startup Founder",
    avatar: avatarAnselm,
    content: "As a founder, I chain General Browser Operator for competitor scans, Smart Q for trial metrics, and Mindmap Generator for planning. In one afternoon, I go from market notes to an actionable roadmap with targets. Fundraising updates feel sharper because the data and story line up.",
  },
  {
    name: "James Patterson",
    role: "Product Manager",
    avatar: avatarJames,
    content: "Mindmap Generator is my thinking canvas. I paste messy notes and links, and it structures them into editable nodes. I regroup, tag risks, and assign owners. Kickoff meetings start with a shared map, not loose docs, and projects move with clearer scope and dependencies.",
  },
  {
    name: "Lauren Brooks",
    role: "High School Teacher",
    avatar: avatarLauren,
    content: "YouTube Quick Scan turns 60‑minute lectures into clean outlines with quotes, timestamps, and key concepts. I pull the transcript, lift examples, and build slides faster. My prep dropped from an evening to under an hour, and class time goes to discussion, not scrubbing video.",
  },
  {
    name: "Ahmed Saleh",
    role: "Data Analyst",
    avatar: avatarAhmed,
    content: "Smart Q turns messy CSVs into clear visuals and findings. I drag in revenue, churn, and cohort files, then ask natural questions. It ships charts, trends, and outliers in minutes. Weekly reporting shrank from half a day to one hour, with fewer spreadsheet errors.",
  },
  {
    name: "Claire Dupont",
    role: "Med Student",
    avatar: avatarClaire,
    content: "Paper Review Agent turned my topic search into a curated reading list in minutes. It pulled recent, peer‑reviewed papers and trimmed duplicates. I went from guessing keywords to a tight stack of sources and a clean path to a literature review draft.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Graduate Student",
    avatar: avatarMarcus,
    content: "As a grad student reading 15-20 papers weekly, I used to spend hours highlighting and reformatting notes. Now I paste each paper into Knowledge-Card Agent with 'Academic style, 4 cards' and get organized key findings, methodology, and implications in minutes—ready for my thesis. My literature review went from 3 weeks to 5 days.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cream border-y-2 border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl">
            Real Workflows, Real Results
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            See how learners chain agents to go from sources to insight.
          </p>
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
                  className="w-14 h-14 rounded-full object-cover object-center border-2 border-highlight"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
