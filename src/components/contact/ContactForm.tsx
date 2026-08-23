"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(1, "Sujet requis"),
  message: z.string().min(10, "10 caractères minimum"),
  website: z.string().max(0).optional(),
});
type Values = z.infer<typeof schema>;

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { register, handleSubmit, formState: { errors } } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    setStatus("sending");
    const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(values), headers: { "content-type": "application/json" } });
    setStatus(res.ok ? "sent" : "error");
  };

  const input = "mt-1 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", className)} noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register("website")} />
      <label className="block text-sm">Nom<input className={input} {...register("name")} />{errors.name && <span className="text-xs text-accent-security">{errors.name.message}</span>}</label>
      <label className="block text-sm">Email<input type="email" className={input} {...register("email")} />{errors.email && <span className="text-xs text-accent-security">{errors.email.message}</span>}</label>
      <label className="block text-sm">Sujet<input className={input} {...register("subject")} />{errors.subject && <span className="text-xs text-accent-security">{errors.subject.message}</span>}</label>
      <label className="block text-sm">Message<textarea rows={6} className={input} {...register("message")} />{errors.message && <span className="text-xs text-accent-security">{errors.message.message}</span>}</label>
      <button disabled={status === "sending"} className="rounded-md bg-ink px-4 py-2 text-sm text-ink-inverse disabled:opacity-60">
        {status === "sending" ? "Envoi…" : "Envoyer"}
      </button>
      {status === "sent"  && <p className="text-sm text-accent-community">Message envoyé. Merci.</p>}
      {status === "error" && <p className="text-sm text-accent-security">Une erreur est survenue. Réessaie plus tard.</p>}
    </form>
  );
}
