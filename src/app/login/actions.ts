"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data: authData, error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/login?message=Identifiants invalides");
  }
  
  revalidatePath("/", "layout");
  
  if (authData.user?.email?.toLowerCase() === "legrandborisohandjaedimo@gmail.com") {
    redirect("/admin");
  } else {
    redirect("/portal");
  }
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const { error } = await supabase.auth.signUp({
    ...data,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    redirect("/login?message=Erreur lors de la création du compte: " + error.message);
  }

  redirect("/login?message=Compte créé ! Veuillez vérifier votre boîte mail pour confirmer.");
}

export async function signout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
