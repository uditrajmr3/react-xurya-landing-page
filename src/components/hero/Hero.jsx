import { ArrowUpRight, Ellipsis } from "lucide-react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      {/* Focused text on the left of hero section */}
      <div className={styles.heroMain}>
        <p className={styles.subtext}>#1 Energy provider in the world</p>

        <p className={styles.largeText}>New Energy for the Future</p>

        <div className={styles.action}>
          <button className={styles.heroBtn}>
            <span>Get in touch</span>
            <span className={styles.buttonLogoRight}>&#10138;</span>
          </button>

          <button className={styles.heroBtn}>
            <span>Our Services</span>
            <span className={styles.buttonLogoRight}>&#10138;</span>
          </button>
        </div>
      </div>

      {/* Overlay image with text on right of hero section */}
      <div className={styles.heroRight}>
        <div className={styles.overlay}>
          <img src="" alt="Overlay Image" className={styles.overlayImg} />
          <span className={styles.overlayIconTop}>
            <Ellipsis /> {/* Coming from lucid-react */}
          </span>
          <span className={styles.overlayIconBottom}>
            <ArrowUpRight /> {/* Coming from lucid-react */}
          </span>
          <span className={styles.overlayText}>
            Discover Our recent Project
          </span>
        </div>

        {/* Stats at the bottom right of hero section */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statItemTitle}>6 mil</span>
            <span className={styles.statItemSubtitle}>
              The company&apos;s annual net income
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statItemTitle}>6 mil</span>
            <span className={styles.statItemSubtitle}>
              The company&apos;s annual net income
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statItemTitle}>6 mil</span>
            <span className={styles.statItemSubtitle}>
              The company&apos;s annual net income
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// const overlayImage =
//   "https://images.unsplash.com/photo-1506888861922-6311fd190754?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2luZG1pbGx8ZW58MHx8MHx8fDA%3D";

export default Hero;
