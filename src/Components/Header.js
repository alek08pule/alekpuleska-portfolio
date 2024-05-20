import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav id="desktop-nav">
        <Link to="/">
          <div className="logo">A.Puleska</div>
        </Link>
        <ul className="nav-links">
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Projects">
            <li>Projects</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <nav id="hamburger-nav">
        <Link to="/">
          <div className="logo">A.Puleska</div>
        </Link>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${mobileOpen ? "open" : ""}`}>
            <Link to="/About">
              <li onClick={handleToggleMenu}>About</li>
            </Link>
            <Link to="/Projects">
              <li onClick={handleToggleMenu}>Projects</li>
            </Link>
            <Link to="/Contact">
              <li onClick={handleToggleMenu}>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
