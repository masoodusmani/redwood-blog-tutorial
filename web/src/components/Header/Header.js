import { NavLink, routes } from '@redwoodjs/router'

const Header = () => {
  return (
    <header>
      <h1>Redwood blog</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={routes.home()}>Home</NavLink>
          </li>
          <li>
            <NavLink to={routes.about()}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
