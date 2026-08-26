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
  
  // Nouveaux champs
  const tagsString = formData.get("tags") as string;
  const tags = tagsString ? tagsString.split(',').map(t => t.trim()).filter(Boolean) : [];
  const prerequisites = formData.get("prerequisites") as string;
  const objectives = formData.get("objectives") as string;

  const { error } = await supabase.from("formations").insert({
    title,
    slug,
    description: description || null,
    cover_image_url: cover_image_url || null,
    status,
    tags,
    prerequisites: prerequisites || null,
    objectives: objectives || null
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

  // Nouveaux champs
  const tagsString = formData.get("tags") as string;
  const tags = tagsString ? tagsString.split(',').map(t => t.trim()).filter(Boolean) : [];
  const prerequisites = formData.get("prerequisites") as string;
  const objectives = formData.get("objectives") as string;

  const { error } = await supabase.from("formations").update({
    title,
    slug,
    description: description || null,
    cover_image_url: cover_image_url || null,
    status,
    tags,
    prerequisites: prerequisites || null,
    objectives: objectives || null,
    updated_at: new Date().toISOString()
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

export async function createFormationResource(formData: FormData) {
  const supabase = await createClient();
  
  const formation_id = formData.get("formation_id") as string;
  const formation_slug = formData.get("formation_slug") as string;
  
  const title = formData.get("title") as string;
  const resource_type = formData.get("resource_type") as string;
  const url = formData.get("url") as string;
  const description = formData.get("description") as string;
  const display_order = parseInt(formData.get("display_order") as string) || 0;

  const { error } = await supabase.from("formation_resources").insert({
    formation_id,
    title,
    resource_type,
    url,
    description: description || null,
    display_order
  });

  if (error) {
    console.error("Error creating resource:", error);
    throw new Error(error.message);
  }

  revalidatePath(`/admin/formations/${formation_slug}`);
  redirect(`/admin/formations/${formation_slug}`);
}

export async function deleteFormationResource(formData: FormData) {
  const supabase = await createClient();
  const id = formData.get("id") as string;
  const formation_slug = formData.get("formation_slug") as string;

  const { error } = await supabase.from("formation_resources").delete().eq("id", id);

  if (error) {
    console.error("Error deleting resource:", error);
    throw new Error(error.message);
  }

  revalidatePath(`/admin/formations/${formation_slug}`);
}
