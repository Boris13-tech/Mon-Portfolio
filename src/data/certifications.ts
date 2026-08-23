export type CertStatus = "earned" | "in-progress" | "planned" | "needs-verification";
export type CertDomainId = "azure" | "security" | "identity" | "devops" | "ai" | "m365";

export interface CertDomain { id: CertDomainId; label: string; accent: string }
export interface Certification {
  code: string;
  name: string;
  domain: CertDomainId;
  status: CertStatus;
  earnedOn?: string;
  credentialUrl?: string;
  badgeImage?: string;
}

export const certDomains: CertDomain[] = [
  { id: "azure",    label: "Azure",    accent: "accent-azure" },
  { id: "security", label: "Security", accent: "accent-security" },
  { id: "identity", label: "Identity", accent: "accent-identity" },
  { id: "devops",   label: "DevOps",   accent: "accent-devops" },
  { id: "ai",       label: "AI",       accent: "accent-ai" },
  { id: "m365",     label: "M365",     accent: "accent-azure" },
];

// IMPORTANT: every certification below is "needs-verification" until Boris confirms.
// Flip to "earned" only with a credential URL as proof.
export const certifications: Certification[] = [
  { code: "AZ-900", name: "Azure Fundamentals",              domain: "azure",    status: "needs-verification" },
  { code: "AZ-104", name: "Azure Administrator",             domain: "azure",    status: "needs-verification" },
  { code: "AZ-305", name: "Azure Solutions Architect",       domain: "azure",    status: "needs-verification" },
  { code: "AZ-400", name: "Azure DevOps Engineer",           domain: "devops",   status: "needs-verification" },
  { code: "AZ-700", name: "Azure Networking",                domain: "azure",    status: "needs-verification" },
  { code: "SC-100", name: "Cybersecurity Architect",         domain: "security", status: "needs-verification" },
  { code: "SC-300", name: "Identity & Access Administrator", domain: "identity", status: "needs-verification" },
  { code: "AI-102", name: "AI Engineer",                     domain: "ai",       status: "needs-verification" },
  { code: "AI-900", name: "AI Fundamentals",                 domain: "ai",       status: "planned" },
  { code: "DP-100", name: "Machine Learning",                domain: "ai",       status: "planned" },
  { code: "DP-203", name: "Data Engineer",                   domain: "ai",       status: "planned" },
  { code: "MS-900", name: "Microsoft 365 Fundamentals",      domain: "m365",     status: "planned" },
  { code: "MS-102", name: "Microsoft 365 Enterprise Admin",  domain: "m365",     status: "planned" },
];
