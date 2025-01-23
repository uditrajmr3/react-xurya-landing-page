import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/vite.svg" alt="Logo" />
      <span>Xurya</span>
    </div>
  );
}

export default Logo;
