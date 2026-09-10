import { Link } from 'react-router-dom'
import { formatDate } from '../lib/posts'
import type { Post } from '../lib/types'

export default function PostListItem({ post }: { post: Post }) {
  return (
    <article className="post-list-item">
      <h3>
        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="post-meta">{formatDate(post.date)}</p>
      {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
    </article>
  )
}
