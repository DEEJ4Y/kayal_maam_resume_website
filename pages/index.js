import HeadTags from "../components/Head/HeadTags";
import Navbar from "../components/Navbar/Navbar";
import TitleSection from "../components/TitleSection/TitleSection";
import Education from "../components/Education/Education";

export default function Home() {
  return (
    <div>
      <HeadTags />
      <Navbar />
      <main>
        <TitleSection />
        <Education />
      </main>
    </div>
  );
}
