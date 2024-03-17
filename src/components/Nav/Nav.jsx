import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? "" : <Link to="/">Home</Link>}
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
    </>
  )
}

export default Nav;