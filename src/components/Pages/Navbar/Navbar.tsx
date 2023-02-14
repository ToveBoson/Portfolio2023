import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <h1 className="header__link__logo">Portfolio</h1>
      </Link>
      <ul className="header__navbar">
        <li className="header__navbar__pages">
          <Link className="header__navbar__pages__link" to="/">
            Home
          </Link>
        </li>
        <li className="header__navbar__pages">
          <Link className="header__navbar__pages__link" to="/project">
            Projects
          </Link>
        </li>
        <li className="header__navbar__pages">
          <Link className="header__navbar__pages__link" to="/about">
            About
          </Link>
        </li>
        <li className="header__navbar__pages">
          <Link className="header__navbar__pages__link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="header__navbar__hamburger">
        <FaBars size={20} style={{ color: "white" }} />
      </div>
    </div>
  );
};
