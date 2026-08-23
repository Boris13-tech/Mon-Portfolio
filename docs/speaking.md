# /speaking

The Speaking page is a real speaker platform, not a bio card.

## Sections
- **SpeakerCard** — identity, positioning statement.
- **Topics** — Azure Security, Cloud Security, Zero Trust, Identity, DevSecOps, AI Security, Cloud Architecture, Microsoft Security.
- **Formats** — Conference, Meetup, Workshop, Webinar, Podcast, Panel.
- **Languages** — French, English.
- **InviteCTA** — deep-links to `/contact` (will grow into `/speaking/invite` in Phase 4).
- **Talks archive** — driven by `data/talks.ts`; empty until Boris speaks. Never invent events.

## Adding a talk
Append to `data/talks.ts`. Recording / slides URLs are optional. The page renders past + upcoming.
