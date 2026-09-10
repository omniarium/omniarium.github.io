import { parseFrontmatter } from './frontmatter'
import type { Post } from './types'

// Every markdown file placed in src/content/posts is picked up automatically.
// Dropping a new .md file there is enough to make it appear on the Posts
// page and get its own route — nothing else needs to be registered.
const postModules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function slugFromPath(path: string): string {
  const filename = path.split('/').pop() ?? path
  return filename.replace(/\.md$/, '')
}

function loadPosts(): Post[] {
  const posts: Post[] = Object.entries(postModules).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      title: data.title ?? 'Untitled',
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      content,
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

const posts = loadPosts()

export function getAllPosts(): Post[] {
  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function formatDate(dateString: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
