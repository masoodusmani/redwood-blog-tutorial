import { NavLink, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <NavLink to={routes.home()}>Redwood blog</NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to={routes.about()}>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
