export type ContributionKind =
  | "microsoft-learn" | "github" | "open-source" | "community-answer"
  | "article" | "workshop" | "meetup" | "webinar" | "conference" | "podcast" | "interview" | "initiative";

export interface Contribution {
  slug: string; kind: ContributionKind; title: string; date: string;
  description?: string; url?: string;
}
// Aucune contribution ajoutée par défaut. Ne remplir qu'avec des sources vérifiables.
export const contributions: Contribution[] = [];
