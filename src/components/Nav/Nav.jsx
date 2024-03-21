import { Link, useLocation } from "react-router-dom";
import { Light } from "./NavHeader.style";

function Nav() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? null : (
        <Link to="/">
          {location.pathname === "/" ? (
            <>
              <span className="active">HOME</span>
              <Light layoutId="light" />
            </>
          ): <span>HOME</span>}
        </Link>
      )}
      <Link to="/about">
        {location.pathname === "/about"  ? (
          <>
            <span className="active">ABOUT</span>
            <Light layoutId="light" />
          </>
        ): <span>ABOUT</span>}
      </Link>
      <Link to="/projects">
        {location.pathname === "/projects" || location.pathname.startsWith("/projects/") ? (
          <>
            <span className="active">PROJECTS</span>
            <Light layoutId="light" />
          </>
        ): <span>PROJECTS</span>}
      </Link>
      <Link to="/experience">
        {location.pathname === "/experience"  ? (
          <>
            <span className="active">EXPERIENCE</span>
            <Light layoutId="light" />
          </>
        ): <span>EXPERIENCE</span>}
      </Link>
    </>
  )
}

export default Nav;