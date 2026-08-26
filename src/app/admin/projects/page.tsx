import { PageHeader } from "@/components/layout/PageHeader";

export default function PlaceholderPage() {
  return (
    <div>
      <PageHeader eyebrow="Administration" title="PROJECTS" />
      <div className="mt-10 panel p-8 border border-dashed border-line rounded-2xl bg-surface/10 text-center text-ink-mute">
        Module en cours de construction. Nous préparons la base de données ! 
      </div>
    </div>
  );
}