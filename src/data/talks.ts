export interface Talk {
  slug: string; title: string; event: string; date: string;
  type: "conference" | "meetup" | "workshop" | "webinar" | "podcast" | "panel";
  language: "fr" | "en";
  recordingUrl?: string; slidesUrl?: string;
}
export const talks: Talk[] = []; // Ne rien inventer.
