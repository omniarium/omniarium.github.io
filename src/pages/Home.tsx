import { Link } from 'react-router-dom'
import PostListItem from '../components/PostListItem'
import { getAllPosts } from '../lib/posts'
import bannerImage from '../../assets/omniarium_banner.png'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5)

  return (
    <div className="page">
      <section className="intro">
        <img className="home-image" src={bannerImage} alt="" />
      </section>

      <section className="home-posts">
        <h2 className="section-heading">recent posts</h2>
        {recentPosts.length === 0 ? (
          <p className="empty-note">Nothing has been pressed yet.</p>
        ) : (
          <div className="post-list">
            {recentPosts.map((post) => (
              <PostListItem key={post.slug} post={post} />
            ))}
          </div>
        )}
        <p className="see-all">
          <Link to="/posts">see all posts →</Link>
        </p>
      </section>
    </div>
  )
}
