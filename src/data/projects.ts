export type ProjectDomain = "devops" | "identity" | "ai";
export interface ProjectLinks {
  github?: string; article?: string; architectureDiagram?: string;
  demo?: string; presentation?: string; talk?: string;
  resources?: { label: string; url: string }[];
}
export interface Project {
  slug: string;
  title: string;
  tagline: string;
  domain: ProjectDomain;
  year: number;
  status: "shipped" | "in-progress" | "concept";
  stack: string[];
  sections: {
    problem: string;
    context: string;
    architecture: string;
    security: string;
    implementation: string;
    technologies: string;
    decisions: string;
    challenges: string;
    results: string;
    lessonsLearned: string;
  };
  links?: ProjectLinks;
}

export const projects: Project[] = [
  {
    slug: "secureflow",
    title: "SecureFlow",
    tagline: "DevSecOps Security Platform",
    domain: "devops",
    year: 2026,
    status: "in-progress",
    stack: ["GitHub Actions", "OIDC", "Azure", "Terraform", "Snyk", "Trivy", "Checkov", "OPA", "ACR", "AKS", "Defender for Containers", "Microsoft Sentinel"],
    sections: {
      problem: "Les pipelines livrent vite, mais sans garde-fous de sécurité intégrés au bon endroit.",
      context: "Contexte Azure, workloads conteneurisés, équipes plateforme peu nombreuses.",
      architecture: "GitHub Actions + OIDC pour l'accès Azure sans secret, Terraform pour l'infrastructure, gates de sécurité dans chaque étape.",
      security: "Scans SAST/SCA/IaC (Snyk, Trivy, Checkov), policies OPA, signature d'images, Defender for Containers en runtime.",
      implementation: "Templates de workflows réutilisables, modules Terraform packagés, ACR + AKS avec network policies.",
      technologies: "GitHub Actions, OIDC, Terraform, Snyk, Trivy, Checkov, OPA, Azure Container Registry, AKS, Defender for Containers, Microsoft Sentinel.",
      decisions: "OIDC plutôt que secrets long-vécus; policies-as-code avant runtime; alertes routées vers Sentinel.",
      challenges: "Équilibrer temps de build et exhaustivité des scans; formation des équipes aux policies.",
      results: "Réduction des risques de supply chain, traçabilité de bout en bout, mean-time-to-detect en baisse sur les CVE critiques.",
      lessonsLearned: "Sécurité intégrée = ergonomie pour développeurs. Un scan qui bloque sans alternative claire est ignoré."
    }
  },
  {
    slug: "zerotrust-iam",
    title: "ZeroTrust IAM",
    tagline: "Identity & Access Security Platform",
    domain: "identity",
    year: 2026,
    status: "in-progress",
    stack: ["Microsoft Entra ID", "Conditional Access", "PIM", "Entra Governance", "Intune", "Microsoft Graph", "Terraform"],
    sections: {
      problem: "Les identités et accès dérivent avec le temps, les privilèges s'accumulent, l'auditabilité s'effrite.",
      context: "Tenants Entra ID d'entreprises moyennes à grandes, workforce hybride.",
      architecture: "Baseline Conditional Access documenté; PIM sur tout accès sensible; access reviews planifiés.",
      security: "MFA-résistant au phishing, filtres de risque Entra Identity Protection, journalisation vers Sentinel.",
      implementation: "Politiques CA versionnées via Terraform + Microsoft Graph; guardrails Intune côté endpoints.",
      technologies: "Entra ID, Conditional Access, PIM, Entra Governance, Intune, Microsoft Graph, Terraform.",
      decisions: "Politiques par persona plutôt que par utilisateur; PIM par défaut sur les rôles admin.",
      challenges: "Cadre CA lisible malgré la combinatoire; adoption sans friction opérationnelle.",
      results: "Diminution des accès permanents à haut privilège; traçabilité des demandes d'élévation.",
      lessonsLearned: "Zero Trust est une pratique, pas un produit. La gouvernance des identités se maintient."
    }
  },
  {
    slug: "nexaguard-ai",
    title: "NexaGuard AI",
    tagline: "AI Security Copilot",
    domain: "ai",
    year: 2026,
    status: "concept",
    stack: ["Azure OpenAI", "RAG", "LangChain", "LlamaIndex", "Vector Database", "Microsoft Sentinel"],
    sections: {
      problem: "Les analystes SOC noient les signaux dans le bruit; le contexte manque au moment critique.",
      context: "SOC exploité sur Microsoft Sentinel, corpus de runbooks et post-mortems dispersés.",
      architecture: "RAG sur Azure OpenAI; corpus indexé (runbooks, KB, alertes historiques); connecteur Sentinel.",
      security: "Prompt-injection defense, isolation du modèle par tenant, journalisation complète des interactions.",
      implementation: "LangChain/LlamaIndex pour l'orchestration; vector store managé; garde-fous humain-dans-la-boucle.",
      technologies: "Azure OpenAI, RAG, LangChain, LlamaIndex, Vector Database, Microsoft Sentinel.",
      decisions: "Modèle assistant plutôt qu'agent autonome; réponses toujours sourcées.",
      challenges: "Hallucinations sur détails techniques; qualité du corpus source.",
      results: "En concept — pilotes prévus.",
      lessonsLearned: "La qualité de l'IA appliquée dépend de la qualité des sources qu'on lui donne."
    }
  }
];

export function getProject(slug: string) { return projects.find((p) => p.slug === slug); }
