export const site = {
  name: "Boris Ohandja",
  role: "Cloud & Cybersecurity Architect",
  description: "Boris Ohandja — Cloud & Cybersecurity Architect. Azure, sécurité, identité, DevSecOps, IA.",
  location: "France",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://borisohandja.com",
  email: "hello@borisohandja.com",
  socials: {
    github:   "https://github.com/Boris13-tech",
    linkedin: "https://www.linkedin.com/in/boris-ohandja/",
    x: "",
  },
} as const;
