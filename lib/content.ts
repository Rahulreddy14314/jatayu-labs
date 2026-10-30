import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { z } from 'zod'
import { projects, type Project } from './projects'

export const projectFrontmatterSchema = z.object({ slug: z.string(), title: z.string(), domain: z.string(), stage: z.string(), summary: z.string(), problemStatement: z.string().optional(), hypothesis: z.string().optional(), milestones: z.array(z.string()).default([]), limitations: z.array(z.string()).default([]), dependencies: z.array(z.string()).default([]), isPublished: z.boolean().default(false) })
export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>

async function readMdxDirectory(directory: string) {
  try { const files = await fs.readdir(directory); return Promise.all(files.filter((file) => file.endsWith('.mdx')).map(async (file) => matter(await fs.readFile(path.join(directory, file), 'utf8')))) } catch { return [] }
}

export async function getAllProjects(): Promise<Project[]> { return projects }
export async function getProjectBySlug(slug: string): Promise<Project | undefined> { return projects.find((project) => project.slug === slug) }
export async function getPublishedJournalEntries(projectSlug?: string) { const entries = await readMdxDirectory(path.join(process.cwd(), 'content/journal')); return entries.filter((entry) => { const data = entry.data as Record<string, unknown>; return data.isPublished === true && (!projectSlug || data.projectSlug === projectSlug) }).sort((a, b) => String(b.data.date).localeCompare(String(a.data.date))) }
