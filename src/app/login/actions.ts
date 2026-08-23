"use server";

import { createClient } from "@/utils/supabase/server";

export async function loginAction(email: string, password: string) {
  const supabase = await createClient();
  const { data: authData, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "Erreur : " + error.message };
  }
  
  if (authData.user?.email?.toLowerCase() === "legrandborisohandjaedimo@gmail.com") {
    return { success: true, redirect: "/admin" };
  } else {
    return { success: true, redirect: "/portal" };
  }
}

export async function signupAction(email: string, password: string) {
  const supabase = await createClient();
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://scaffold-ruddy.vercel.app";
  
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return { error: "Erreur lors de la création du compte : " + error.message };
  }

  return { success: true, message: "Compte créé ! Veuillez vérifier votre boîte mail pour confirmer." };
}

export async function signout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}
