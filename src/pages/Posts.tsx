import PostListItem from '../components/PostListItem'
import { getAllPosts } from '../lib/posts'

export default function Posts() {
  const posts = getAllPosts()

  return (
    <div className="page">
      <h1 className="page-title">posts</h1>
      {posts.length === 0 ? (
        <p className="empty-note">Nothing has been pressed yet.</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
