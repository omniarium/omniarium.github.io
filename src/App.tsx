import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostPage from './pages/PostPage'
import About from './pages/About'

// HashRouter is used so the site works out of the box on GitHub Pages
// (a static host) without any server-side rewrite configuration.
export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:slug" element={<PostPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
