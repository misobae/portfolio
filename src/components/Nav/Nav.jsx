import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? "" : <Link to="/">HOME</Link>}
      <Link to="/about">ABOUT</Link>
      <Link to="/projects">PROJECTS</Link>
      <Link to="/experience">EXPERIENCE</Link>
    </>
  )
}

export default Nav;