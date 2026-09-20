// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Nabiha Samad",
  role: "Full-stack web developer in training",
  intro:
    "Recent BS-IT graduate, currently interning with Aurex. I like turning small ideas into working web pages, from the layout a visitor sees to the logic running behind it.",
  location: "Pakistan",
  github: "https://github.com/nabihasamad5",
  // Add your own details below and the matching buttons appear
  // in the Contact section automatically.
  email: "",
  linkedin: "",
};

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "path", label: "Path" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const now = [
  "Practising React.js and Next.js",
  "Learning PHP for server-side logic",
  "Up next: databases and API design",
];

export const about = [
  "I'm a recent graduate in BS Information Technology, and I'm now part of the Aurex Web Development Internship, where I'm growing from small practice pages into complete projects.",
  "Most of my time goes into the fundamentals: HTML, CSS and JavaScript. From there I'm stretching into PHP for backend logic and into React.js and Next.js for faster, component-based interfaces.",
  "I'd rather build a small, real project than follow another tutorial. Make something, break it, work out why.",
];

export const facts = [
  { label: "Education", value: "BS Information Technology (graduated)" },
  { label: "Program", value: "Aurex Web Development Internship" },
  { label: "Focus", value: "Full-stack web development" },
  { label: "Learning next", value: "Databases and API design" },
  { label: "Based in", value: "Pakistan" },
];

export const skills = [
  { group: "Front end", items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"] },
  { group: "Back end", items: ["PHP"] },
  { group: "Workflow", items: ["Git & GitHub"] },
  { group: "Beyond code", items: ["Computer basics", "Spoken English"] },
];

export const learningNext = ["Databases", "API design"];

export const path = [
  {
    status: "done",
    when: "Graduated",
    title: "BS in Information Technology",
    text: "The foundation in computing and programming that I'm now putting to work on real web projects.",
  },
  {
    status: "current",
    when: "In progress",
    title: "Aurex Web Development Internship",
    text: "Learning full-stack development by building: a first profile page, then a responsive portfolio, and now this React version.",
  },
  {
    status: "next",
    when: "Up next",
    title: "Databases and API design",
    text: "Connecting my front-end work to real data, so the things I build can store and serve information.",
  },
];

export const projects = [
  {
    stage: "First",
    title: "Profile page",
    text: "My first Aurex project: a semantic single-page profile with anchor navigation covering about, skills, education and experience.",
    tags: ["HTML5", "CSS"],
    href: "https://github.com/nabihasamad5/Aurex-internship-Nabiha",
  },
  {
    stage: "Then",
    title: "Responsive portfolio",
    text: "A dark developer portfolio that adapts from desktop to phone, with a collapsing mobile menu and a project grid.",
    tags: ["HTML5", "CSS", "JavaScript"],
    href: "https://github.com/nabihasamad5/Portfolio-Aurex-Internship",
  },
  {
    stage: "Now",
    title: "This portfolio, in React",
    text: "The same story rebuilt as a component-based React app, with all content in one data file and a nav that follows your scroll.",
    tags: ["React", "Vite", "CSS"],
    href: "",
  },
];
