export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  overview: string;
  problem: string;
  process: string[];
  outcome: string;
  tags: string[];
  coverColor: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "one-creation-privacy-control",
    title: "One Creation",
    subtitle: "Privacy Control Center",
    category: "Mobile Application",
    year: "2023",
    overview:
      "Designed a privacy control center for an embedded privacy company, giving users transparent control over their personal data.",
    problem:
      "Users lacked visibility and control over how their personal data was being collected and shared. The existing interface was buried in settings and used legal jargon that most users couldn't parse.",
    process: [
      "Conducted user interviews to understand privacy mental models and pain points",
      "Mapped data flows to identify what information needed surfacing to users",
      "Designed an information hierarchy that prioritized user comprehension over legal compliance language",
      "Iterated on toggle patterns and permission states through usability testing",
    ],
    outcome:
      "A clear, scannable privacy dashboard that reduced support tickets related to data questions by 40% in the first month post-launch.",
    tags: ["Mobile", "Privacy", "UX Research", "iOS"],
    coverColor: "#e8e4f0",
  },
  {
    slug: "wintrust-family-app",
    title: "Wintrust Bank",
    subtitle: "Family Financial App",
    category: "Mobile Application",
    year: "2023",
    overview:
      "Designed a family app for Wintrust Bank that teaches children financial responsibility through interactive tools and parental oversight.",
    problem:
      "Children lack early exposure to real-world financial concepts. Parents wanted a safe, engaging way to teach money management without handing over a credit card.",
    process: [
      "Researched competitor apps and financial literacy frameworks for children ages 8–14",
      "Facilitated co-design sessions with parents and children to uncover needs on both sides",
      "Defined age-appropriate UX patterns that engage children without overwhelming them",
      "Built interactive prototypes and iterated through usability sessions with real families",
    ],
    outcome:
      "A dual-interface app where parents set goals and allowances while children track spending and savings through a gamified, age-appropriate interface.",
    tags: ["Mobile", "Fintech", "Education", "Family"],
    coverColor: "#e4edf0",
  },
  {
    slug: "dirt-bag-website-revamp",
    title: "Dirt Bag",
    subtitle: "E-Commerce Redesign",
    category: "Website Redesign",
    year: "2022",
    overview:
      "Redesigned a plant retailer's website and inventory system to improve product discovery and reduce friction in the purchase flow.",
    problem:
      "The existing site made it difficult for customers to browse and filter the plant catalog. High bounce rates and low conversion suggested users couldn't find what they were looking for.",
    process: [
      "Ran a heuristic evaluation and identified the top usability issues across the catalog and checkout flows",
      "Conducted card sorting to understand how customers naturally categorize plants",
      "Redesigned the information architecture and navigation to reflect user mental models",
      "Created a new product card system with improved filtering and category hierarchy",
    ],
    outcome:
      "Streamlined catalog browsing reduced time-on-task for product discovery by 35% in moderated usability testing.",
    tags: ["Web", "E-Commerce", "IA", "Redesign"],
    coverColor: "#e4f0e8",
  },
  {
    slug: "building-this-portfolio",
    title: "This Portfolio",
    subtitle: "Design + Development Case Study",
    category: "Personal Project",
    year: "2025",
    overview:
      "Rebuilt my portfolio from scratch using React and Next.js — using the process itself as an opportunity to learn modern front-end development while documenting it as a case study.",
    problem:
      "My Wix portfolio felt generic and didn't reflect my technical curiosity. I wanted a portfolio that demonstrates both design sensibility and development capability — built with tools that product teams recognize.",
    process: [
      "Audited the existing Wix portfolio for content gaps, visual inconsistencies, and missing case study depth",
      "Researched minimal portfolio patterns used by UX designers who straddle design and engineering",
      "Chose Next.js for static site generation and GitHub Pages for deployment — showing git fluency to recruiters",
      "Designed a monochromatic, typography-forward system with dark/light mode toggle",
      "Built React components iteratively with Claude as a learning collaborator, focusing on understanding the why behind each pattern",
    ],
    outcome:
      "A fully custom portfolio hosted on GitHub Pages — demonstrating both design judgment and technical initiative. The build process is documented here as a live case study.",
    tags: ["React", "Next.js", "Personal Project", "GitHub Pages"],
    coverColor: "#f0ede4",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
