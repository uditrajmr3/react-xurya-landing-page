import styles from "./App.module.css";

import Navbar from "../navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "../hero/Hero";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <br />
        <br />
        <br />
      </BrowserRouter>
    </div>
  );
}

export default App;
