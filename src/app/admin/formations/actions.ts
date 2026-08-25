"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createFormation(formData: FormData) {
  const supabase = await createClient();
  
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const cover_image_url = formData.get("cover_image_url") as string;
  const status = formData.get("status") as string;

  const { error } = await supabase.from("formations").insert({
    title,
    slug,
    description: description || null,
    cover_image_url: cover_image_url || null,
    status
  });

  if (error) {
    console.error("Error creating formation:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/formations");
  redirect("/admin/formations");
}

export async function updateFormation(formData: FormData) {
  const supabase = await createClient();
  
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const cover_image_url = formData.get("cover_image_url") as string;
  const status = formData.get("status") as string;

  const { error } = await supabase.from("formations").update({
    title,
    slug,
    description: description || null,
    cover_image_url: cover_image_url || null,
    status
  }).eq("id", id);

  if (error) {
    console.error("Error updating formation:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/formations");
  redirect("/admin/formations");
}

export async function deleteFormation(formData: FormData) {
  const supabase = await createClient();
  const id = formData.get("id") as string;

  const { error } = await supabase.from("formations").delete().eq("id", id);

  if (error) {
    console.error("Error deleting formation:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/formations");
}
