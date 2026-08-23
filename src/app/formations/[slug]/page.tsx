import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { formationsData } from "@/data/formations";

// This is the key for extreme scalability: pre-rendering all these pages at build time.
export function generateStaticParams() {
  return formationsData.map((formation) => ({
    slug: formation.slug,
  }));
}

export default async function FormationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formation = formationsData.find((f) => f.slug === slug);

  if (!formation) {
    notFound();
  }

  return (
    <Container className="py-24">
      <div className="mb-4">
        <span 
          className="font-mono text-[11px] tracking-widest uppercase px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
          style={{ color: formation.color }}
        >
          {formation.category}
        </span>
      </div>
      <PageHeader 
        eyebrow="Formation & Expertise" 
        title={formation.label} 
      />
      
      <div className="prose prose-invert mt-12 max-w-2xl text-ink-dim">
        <div className="panel p-8 rounded-2xl border border-line bg-surface/30 mb-10">
          <h3 className="text-xl font-display text-gray-900 dark:text-white mb-4 mt-0">En cours de rédaction...</h3>
          <p className="mb-0 text-[15px]">
            La page détaillée pour la formation <strong>{formation.label}</strong> est actuellement en cours de préparation. 
            Je détaillerai ici le programme, les compétences clés abordées, et des retours d'expérience du terrain.
          </p>
        </div>
        
        <h2 className="text-gray-900 dark:text-white font-display">Pourquoi cette formation ?</h2>
        <p>
          L'écosystème cloud évolue vite. Que ce soit sur la partie infrastructure, sécurité ou intelligence artificielle, 
          chaque certification ou parcours de formation que je propose est basé sur des architectures que je déploie et maintiens en production.
        </p>
        
        <h2 className="text-gray-900 dark:text-white font-display">Au programme (à venir)</h2>
        <ul>
          <li>Concepts fondamentaux et architecture cible.</li>
          <li>Ateliers pratiques basés sur des cas d'usage réels (Landing Zones, DevSecOps, etc.).</li>
          <li>Bonnes pratiques de sécurité (Zero Trust, RBAC, Defender).</li>
          <li>Préparation intensive pour la certification officielle Microsoft.</li>
        </ul>
      </div>
    </Container>
  );
}
