import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Building, Calendar, Briefcase } from "lucide-react";
import Markdown from "react-markdown";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = await createClient();
  const { data: project } = await supabase.from("projects").select("title, description").eq("slug", params.slug).single();
  return {
    title: project?.title || "Projet introuvable",
    description: project?.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  const { data: project } = await supabase.from("projects").select("*").eq("slug", params.slug).single();

  if (!project || project.status !== "published") {
    notFound();
  }

  return (
    <Container className="py-24 max-w-4xl">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-ink-mute hover:text-[#7cc4ff] transition-colors mb-12">
        <ArrowLeft size={16} />
        Tous les projets
      </Link>

      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-medium text-ink tracking-tight mb-6">
          {project.title}
        </h1>
        
        {project.description && (
          <p className="text-xl text-ink-mute leading-relaxed max-w-3xl">
            {project.description}
          </p>
        )}
      </header>

      {/* Meta Bar */}
      <div className="flex flex-wrap gap-x-12 gap-y-6 py-6 border-y border-line mb-16">
        {project.client && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-mono tracking-widest uppercase text-ink-mute flex items-center gap-2">
              <Building size={12} /> Client
            </span>
            <span className="text-sm font-medium text-ink">{project.client}</span>
          </div>
        )}
        {project.role && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-mono tracking-widest uppercase text-ink-mute flex items-center gap-2">
              <Briefcase size={12} /> Rôle
            </span>
            <span className="text-sm font-medium text-ink">{project.role}</span>
          </div>
        )}
        {project.date && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-mono tracking-widest uppercase text-ink-mute flex items-center gap-2">
              <Calendar size={12} /> Période
            </span>
            <span className="text-sm font-medium text-ink">{project.date}</span>
          </div>
        )}
        
        <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
          <span className="text-[11px] font-mono tracking-widest uppercase text-ink-mute">Technologies</span>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag: string) => (
              <span key={tag} className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-surface/30 border border-line text-ink-mute">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.cover_image_url && (
        <div className="w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl overflow-hidden mb-16 border border-line bg-surface/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.cover_image_url} alt={project.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Content */}
      {project.content && (
        <div className="prose prose-invert prose-lg max-w-none text-ink-mute prose-headings:text-ink prose-a:text-[#7cc4ff]">
          <Markdown>{project.content}</Markdown>
        </div>
      )}

      {/* External Links */}
      {(project.link_url || project.github_url) && (
        <div className="mt-16 pt-12 border-t border-line flex flex-wrap gap-4">
          {project.link_url && (
            <a href={project.link_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-ink text-bg px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              <ExternalLink size={18} />
              Voir le projet en ligne
            </a>
          )}
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-surface/30 border border-line text-ink px-6 py-3 rounded-full font-medium hover:bg-surface/50 transition-colors">
              <Github size={18} />
              Code Source
            </a>
          )}
        </div>
      )}
    </Container>
  );
}
