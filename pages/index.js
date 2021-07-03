import styles from "../styles/Home.module.css";

import HeadTags from "../components/Head/HeadTags";
import Navbar from "../components/Navbar/Navbar";
import TitleSection from "../components/TitleSection/TitleSection";

export default function Home() {
  return (
    <div>
      <HeadTags />
      <Navbar />
      <main>
        <TitleSection />
      </main>
    </div>
  );
}
