import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
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
            <li>
              <NavLink to={routes.contact()}>Contact</NavLink>
            </li>
            <li>
              {isAuthenticated ? (
                <a href="#" onClick={logOut}>
                  Log out
                </a>
              ) : (
                <a href="#" onClick={logIn}>
                  Log in
                </a>
              )}
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
