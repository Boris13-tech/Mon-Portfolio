export interface CommunityEvent {
  slug: string; name: string; date: string;
  kind: "meetup" | "workshop" | "webinar" | "conference";
  location: { city?: string; country?: string; online: boolean };
  role: "attendee" | "speaker" | "organizer";
  partners?: string[];
}
export const events: CommunityEvent[] = []; // Vide tant que la communauté n'est pas lancée.
