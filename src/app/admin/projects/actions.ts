"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  const supabase = await createClient();
  
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const client = formData.get("client") as string;
  const role = formData.get("role") as string;
  const date = formData.get("date") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const cover_image_url = formData.get("cover_image_url") as string;
  const link_url = formData.get("link_url") as string;
  const github_url = formData.get("github_url") as string;
  const status = formData.get("status") as string;
  
  const tagsString = formData.get("tags") as string;
  const tags = tagsString ? tagsString.split(',').map(t => t.trim()).filter(Boolean) : [];

  const { error } = await supabase.from("projects").insert({
    title,
    slug,
    client: client || null,
    role: role || null,
    date: date || null,
    description: description || null,
    content: content || null,
    cover_image_url: cover_image_url || null,
    link_url: link_url || null,
    github_url: github_url || null,
    status,
    tags
  });

  if (error) {
    console.error("Error creating project:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export async function updateProject(formData: FormData) {
  const supabase = await createClient();
  
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const client = formData.get("client") as string;
  const role = formData.get("role") as string;
  const date = formData.get("date") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const cover_image_url = formData.get("cover_image_url") as string;
  const link_url = formData.get("link_url") as string;
  const github_url = formData.get("github_url") as string;
  const status = formData.get("status") as string;

  const tagsString = formData.get("tags") as string;
  const tags = tagsString ? tagsString.split(',').map(t => t.trim()).filter(Boolean) : [];

  const { error } = await supabase.from("projects").update({
    title,
    slug,
    client: client || null,
    role: role || null,
    date: date || null,
    description: description || null,
    content: content || null,
    cover_image_url: cover_image_url || null,
    link_url: link_url || null,
    github_url: github_url || null,
    status,
    tags
  }).eq("id", id);

  if (error) {
    console.error("Error updating project:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export async function deleteProject(formData: FormData) {
  const supabase = await createClient();
  const id = formData.get("id") as string;

  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}
