import { Link, NavLink, routes } from '@redwoodjs/router'
import Header from '../../components/Header/Header'
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      Home
      <BlogPostsCell></BlogPostsCell>
    </BlogLayout>
  )
}

export default HomePage
