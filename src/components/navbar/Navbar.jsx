import styles from "./Navbar.module.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }
  function handleCTA() {
    navigate("/contact");
  }

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <Logo />

      {/* Navigation Menu */}
      <ul className={styles.navMenu}>
        <li>
          <NavLink to="app">Home</NavLink>
        </li>
        <li>
          <NavLink to="about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="features">Features</NavLink>
        </li>
        <li>
          <NavLink to="services">Services</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>

      {/* Actions Section */}
      <div className={styles.actions}>
        <Button type="secondary" onClick={handleLogin}>
          Log in
        </Button>
        <Button type="primary" onClick={handleCTA}>
          Get in touch
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
