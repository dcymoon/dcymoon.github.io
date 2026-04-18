export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  tools: string;
  overview: string;
  problem: string;
  process: string[];
  outcome: string;
  tags: string[];
  coverColor: string;
  coverImage?: string;
  hidden?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "one-creation-privacy-control",
    title: "One Creation",
    subtitle: "Privacy Control Center",
    category: "Mobile Application",
    year: "2023",
    role: "UX Designer",
    duration: "3 months",
    tools: "Figma, FigJam, Maze",
    overview:
      "One Creation is an embedded privacy company that helps businesses give users control over their personal data. I was brought in to design a privacy control center — a central hub where users could view, manage, and revoke data permissions across connected apps.",
    problem:
      "Users had no meaningful visibility into what data was being collected about them or why. The existing flow buried privacy settings four levels deep in the app, wrapped in legal language that most users couldn't parse. As a result, users either ignored their privacy settings entirely or contacted support when they felt something was wrong — neither of which served the business or the user.",
    process: [
      "Conducted 8 user interviews to map existing mental models around data privacy — most users described feeling 'watched but not informed'",
      "Ran a competitive audit of privacy UIs across iOS, Android, and GDPR-compliant apps to identify established patterns worth borrowing",
      "Mapped the full data flow with engineers to understand which permissions could realistically be surfaced to users at runtime",
      "Designed three concepts with different information densities and tested them in Maze with 24 participants — the mid-density layout performed best on comprehension tasks",
      "Iterated on toggle affordances and permission state labels (Active / Paused / Denied) through two rounds of usability testing before handoff",
    ],
    outcome:
      "The shipped control center gave users a single screen to view all active data permissions, pause collection, and download a data report. Support tickets related to data and privacy questions dropped by 40% in the first month. Users in follow-up surveys rated their sense of control over personal data 4.2/5, up from 2.1/5 before the redesign.",
    tags: ["Mobile", "Privacy", "UX Research", "iOS"],
    coverColor: "#e8e4f0",
    coverImage: "/one-creation.png",
  },
  {
    slug: "wintrust-family-app",
    title: "Wintrust Bank",
    subtitle: "Family Financial App",
    category: "Mobile Application",
    year: "2023",
    role: "UX Designer",
    duration: "4 months",
    tools: "Figma, Miro, UserTesting.com",
    overview:
      "Wintrust Bank wanted to deepen its relationship with younger customers by designing a family financial app — one that gave parents oversight while teaching children aged 8–14 real money skills through interactive tools and goal-setting.",
    problem:
      "Existing banking apps weren't built for families. Children had no safe way to interact with money digitally, and parents had no visibility into spending habits outside of handing over cash. Wintrust needed a product that served both audiences simultaneously without alienating either — a difficult dual-user design problem.",
    process: [
      "Recruited and interviewed 12 parent-child pairs to understand how families currently talk about and manage money together",
      "Facilitated co-design workshops where children drew their ideal 'money app' — surfacing unexpected priorities like earning transparency and visual savings progress",
      "Defined two distinct personas: the Oversight Parent and the Learning Child, each with their own interface layer but shared data",
      "Designed a parent dashboard for setting allowances, approving purchases, and monitoring goals alongside a child-facing interface with simplified language and progress animations",
      "Ran three rounds of usability testing with real families, adjusting reading level, iconography, and navigation depth based on observed confusion points",
      "Collaborated with Wintrust's compliance team to ensure all financial disclosures met regulatory requirements without disrupting the child experience",
    ],
    outcome:
      "The final design featured a dual-interface system: parents managed allowances and spending limits while children tracked savings goals through a progress-based interface. The prototype received strong stakeholder approval and was greenlit for development. Children in testing sessions completed savings goal setup in under 2 minutes without assistance.",
    tags: ["Mobile", "Fintech", "Education", "Family"],
    coverColor: "#e4edf0",
    coverImage: "/wintrust.png",
  },
  {
    slug: "dirt-bag-website-revamp",
    title: "Dirt Bag",
    subtitle: "E-Commerce Redesign",
    category: "Website Redesign",
    year: "2022",
    role: "UX Designer",
    duration: "6 weeks",
    tools: "Figma, Hotjar, Google Analytics",
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
    coverImage: "/dirt-bag.png",
    hidden: true,
  },
  {
    slug: "building-this-portfolio",
    title: "This Portfolio",
    subtitle: "Design + Development Case Study",
    category: "Personal Project",
    year: "2025",
    role: "Designer & Developer",
    duration: "1 week",
    tools: "Next.js, React, Tailwind CSS, GitHub Pages, Claude",
    overview:
      "I rebuilt my portfolio from scratch using React and Next.js — treating the process as both a design challenge and a learning opportunity. Rather than using a website builder, I wanted to own the full stack: from component architecture to deployment.",
    problem:
      "My previous Wix portfolio communicated design work but not technical range. In a product design landscape where engineers and designers increasingly overlap, I wanted a portfolio that showed I could think in systems, write code, and ship something independently. A template wouldn't do that — I needed to build it.",
    process: [
      "Audited the existing Wix portfolio for content gaps, visual inconsistencies, and case study depth — identified that projects lacked problem framing and measurable outcomes",
      "Researched minimal portfolio patterns used by designers who straddle engineering: studied typography-forward layouts, monochromatic palettes, and content hierarchy patterns that work for recruiter scanning behavior",
      "Chose Next.js for static site generation and GitHub Pages for deployment — the git-based workflow signals technical credibility to product teams",
      "Designed a monochromatic system with CSS custom properties for light/dark mode — no heavy theming library, just variables and next-themes for the toggle",
      "Built every component in React iteratively with Claude as a learning collaborator, focusing on understanding the reasoning behind each pattern rather than copying boilerplate",
      "Documented the entire process as a live case study within the portfolio itself — a self-referential loop that demonstrates both design thinking and follow-through",
    ],
    outcome:
      "A fully custom portfolio deployed on GitHub Pages — demonstrating design judgment, React fundamentals, and the ability to ship independently. This case study is the portfolio's proof of concept: the medium is the message.",
    tags: ["React", "Next.js", "Personal Project", "GitHub Pages"],
    coverColor: "#f0ede4",
  },
];

export const visibleCaseStudies = caseStudies.filter((cs) => !cs.hidden);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
