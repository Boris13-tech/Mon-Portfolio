import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export async function loadMdx<T extends Record<string, unknown>>(kind: string, slug: string) {
  const file = await fs.readFile(path.join(CONTENT_DIR, kind, `${slug}.mdx`), "utf8");
  const { data, content } = matter(file);
  return { frontmatter: data as T, body: content, readingTime: readingTime(content) };
}
