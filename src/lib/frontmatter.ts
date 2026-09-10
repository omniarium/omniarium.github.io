// A deliberately small frontmatter parser. It only supports the flat
// "key: value" style used by our posts (title, date, excerpt) — no nested
// structures, arrays, etc. This keeps the site free of extra dependencies.

export interface Frontmatter {
  [key: string]: string
}

export function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)

  if (!match) {
    return { data: {}, content: raw }
  }

  const [, frontmatterBlock, content] = match
  const data: Frontmatter = {}

  for (const line of frontmatterBlock.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) continue

    const separatorIndex = trimmed.indexOf(':')
    if (separatorIndex === -1) continue

    const key = trimmed.slice(0, separatorIndex).trim()
    let value = trimmed.slice(separatorIndex + 1).trim()

    // Strip matching surrounding quotes, if present.
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    data[key] = value
  }

  return { data, content: content.trim() }
}
