import styles from "./Navbar.module.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <Logo />

      {/* Navigation Menu */}
      <ul className={styles.navMenu}>
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      {/* Actions Section */}
      <div className={styles.actions}>
        <Button type="secondary">Log in</Button>
        <Button type="primary">Get in touch</Button>
      </div>
    </nav>
  );
}

export default Navbar;
