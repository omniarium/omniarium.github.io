import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { marked } from 'marked'
import { formatDate, getPostBySlug } from '../lib/posts'

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  const html = useMemo(() => {
    if (!post) return ''
    return marked.parse(post.content, { async: false }) as string
  }, [post])

  if (!post) {
    return (
      <div className="page">
        <h1 className="page-title">Not found</h1>
        <p>That post doesn't seem to exist.</p>
        <p>
          <Link to="/posts">← back to posts</Link>
        </p>
      </div>
    )
  }

  return (
    <div className="page">
      <article className="post">
        <p className="post-back">
          <Link to="/posts">← posts</Link>
        </p>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-meta">{formatDate(post.date)}</p>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  )
}
