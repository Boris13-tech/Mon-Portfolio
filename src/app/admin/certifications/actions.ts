"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CertStatus } from "@/data/certifications";

export async function createCertification(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== "legrandborisohandjaedimo@gmail.com") {
    throw new Error("Unauthorized");
  }

  const code = formData.get("code") as string;
  const title = formData.get("title") as string;
  const issuer = formData.get("issuer") as string;
  const level = formData.get("level") as string;
  const status = formData.get("status") as CertStatus;
  const verification_url = formData.get("verification_url") as string;
  const issued_at_raw = formData.get("issued_at") as string;
  const credential_id = formData.get("credential_id") as string;
  const display_order = parseInt(formData.get("display_order") as string) || 0;

  const { error } = await supabase.from("certifications").insert({
    code,
    title,
    issuer,
    level,
    status,
    verification_url: verification_url || null,
    issued_at: issued_at_raw || null,
    credential_id: credential_id || null,
    display_order
  });

  if (error) {
    console.error("Error creating certification:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/certifications");
  revalidatePath("/certifications");
  redirect("/admin/certifications");
}

export async function deleteCertification(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== "legrandborisohandjaedimo@gmail.com") {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase.from("certifications").delete().eq("id", id);
  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin/certifications");
  revalidatePath("/certifications");
}
