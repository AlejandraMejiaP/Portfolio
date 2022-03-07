import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  return (
    <div className="div__nav">
      <nav className="nav">
        <ul>
          <Link smooth to="#about">
            <li className="nav__option">Sobre mí</li>{" "}
          </Link>
          <Link smooth to="#proyects">
            <li className="nav__option">Proyectos</li>
          </Link>
          <Link smooth to="#contact">
            <li className="nav__option">Contacto</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
