import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
export default function sitemap(): MetadataRoute.Sitemap { const routes = ['', '/projects', '/research', '/journal', '/about', '/contact', '/privacy'].map((route) => ({ url: `https://kritamlabs.com${route}`, lastModified: new Date() })); return [...routes, ...projects.map((project) => ({ url: `https://kritamlabs.com/projects/${project.slug}`, lastModified: new Date() }))] }
