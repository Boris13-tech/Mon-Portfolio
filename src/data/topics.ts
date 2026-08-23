export type TopicCategory = "ai" | "azure" | "m365";
export interface Topic { slug: string; title: string; category: TopicCategory; blurb: string }

export const topics: Topic[] = [
  { slug: "az-900",            title: "AZ-900 Azure Fundamentals",      category: "azure", blurb: "Les bases d'Azure." },
  { slug: "az-104",            title: "AZ-104 Administrateur",          category: "azure", blurb: "Opérer un tenant Azure au quotidien." },
  { slug: "az-305",            title: "AZ-305 Architecte Solutions",    category: "azure", blurb: "Concevoir des solutions Azure." },
  { slug: "az-400",            title: "AZ-400 DevOps Engineer",         category: "azure", blurb: "Cycle DevOps sur Azure." },
  { slug: "az-700",            title: "AZ-700 Azure Networking",        category: "azure", blurb: "Réseau Azure en profondeur." },
  { slug: "landing-zones",     title: "Landing Zones et FinOps",        category: "azure", blurb: "Fonder un environnement Azure sain." },
  { slug: "ai-102",            title: "AI-102 AI Engineer",             category: "ai",    blurb: "Ingénierie de solutions IA sur Azure." },
  { slug: "azure-openai",      title: "Azure OpenAI et GPT",            category: "ai",    blurb: "Utiliser les modèles hébergés sur Azure." },
  { slug: "copilot-studio",    title: "Copilot Studio",                 category: "ai",    blurb: "Concevoir des copilots métiers." },
  { slug: "ia-secure",         title: "Sécuriser l'IA générative",      category: "ai",    blurb: "Design patterns de sécurité pour la GenAI." },
  { slug: "ms-102",            title: "MS-102 Enterprise Admin",        category: "m365",  blurb: "Administrer Microsoft 365." },
  { slug: "sc-100",            title: "SC-100 Cybersecurity Architect", category: "m365",  blurb: "Architecte cybersécurité Microsoft." },
  { slug: "purview",           title: "Purview et Compliance",          category: "m365",  blurb: "Gouvernance et conformité des données." },
];
