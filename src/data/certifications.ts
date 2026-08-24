export type CertStatus = "earned" | "in-progress" | "planned" | "needs-verification";
export type CertDomainId = "azure" | "security" | "identity" | "devops" | "ai" | "m365";

export interface CertDomain { id: CertDomainId; label: string; accent: string }

export interface Certification {
  code: string;
  title: string;
  issuer: string;
  level: string;
  status: CertStatus;
  issued_at?: string;
  expires_at?: string;
  credential_id?: string;
  badge_image_url?: string;
  verification_url?: string;
  skills: string[];
  featured: boolean;
  display_order: number;
}

export const certDomains: CertDomain[] = [
  { id: "azure",    label: "Azure",    accent: "accent-azure" },
  { id: "security", label: "Security", accent: "accent-security" },
  { id: "identity", label: "Identity", accent: "accent-identity" },
  { id: "devops",   label: "DevOps",   accent: "accent-devops" },
  { id: "ai",       label: "AI",       accent: "accent-ai" },
  { id: "m365",     label: "M365",     accent: "accent-azure" },
];

// Placeholder data matching the new rigorous schema.
// No credentials fabricated. Needs real links from Admin later.
export const certifications: Certification[] = [
  { code: "AZ-900", title: "Azure Fundamentals", issuer: "Microsoft", level: "Fundamentals", status: "needs-verification", skills: ["Cloud Concepts", "Azure Services"], featured: true, display_order: 10 },
  { code: "AZ-104", title: "Azure Administrator", issuer: "Microsoft", level: "Associate", status: "needs-verification", skills: ["Compute", "Networking", "Storage"], featured: true, display_order: 20 },
  { code: "AZ-305", title: "Azure Solutions Architect", issuer: "Microsoft", level: "Expert", status: "needs-verification", skills: ["Architecture", "Compute", "Data"], featured: true, display_order: 30 },
  { code: "AZ-400", title: "DevOps Engineer", issuer: "Microsoft", level: "Expert", status: "needs-verification", skills: ["CI/CD", "GitOps", "Containers"], featured: true, display_order: 40 },
  { code: "AZ-700", title: "Azure Networking", issuer: "Microsoft", level: "Associate", status: "needs-verification", skills: ["VNet", "ExpressRoute", "Routing"], featured: true, display_order: 50 },
  { code: "SC-100", title: "Cybersecurity Architect", issuer: "Microsoft", level: "Expert", status: "needs-verification", skills: ["Zero Trust", "Security Architecture"], featured: true, display_order: 60 },
  { code: "SC-300", title: "Identity & Access Administrator", issuer: "Microsoft", level: "Associate", status: "needs-verification", skills: ["Entra ID", "IAM", "Conditional Access"], featured: true, display_order: 70 },
  { code: "AI-103", title: "AI Engineer", issuer: "Microsoft", level: "Associate", status: "needs-verification", skills: ["Cognitive Services", "Azure OpenAI"], featured: true, display_order: 80 },
];
