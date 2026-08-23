"use server";

import { Resend } from "resend";
import { createClient } from "@/utils/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendNewsletter(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Sécurité supplémentaire : vérifier que c'est bien l'admin
  if (!user || user.email !== "boris.ohandja@gmail.com") {
    return { error: "Non autorisé" };
  }

  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;

  try {
    // Note: Avec un compte Resend gratuit (sans domaine vérifié), 
    // on ne peut envoyer qu'à l'adresse email de l'administrateur (toi).
    // Pour envoyer à tous tes abonnés, il faudra ajouter ton domaine (ex: boris.azure.com) sur Resend.
    
    const { data, error } = await resend.emails.send({
      from: "Newsletter Portfolio <onboarding@resend.dev>",
      to: ["boris.ohandja@gmail.com"], // Change this when you have a verified domain
      subject: subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #000;">${subject}</h2>
          <div style="color: #333; line-height: 1.6;">
            ${content.replace(/\n/g, '<br/>')}
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #888; font-size: 12px; text-align: center;">
            Ceci est un email envoyé depuis ton portail administrateur.
          </p>
        </div>
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err) {
    return { error: "Une erreur est survenue lors de l'envoi." };
  }
}
