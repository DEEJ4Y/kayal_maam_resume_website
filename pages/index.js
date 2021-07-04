import HeadTags from "../components/Head/HeadTags";
import Navbar from "../components/Navbar/Navbar";
import TitleSection from "../components/TitleSection/TitleSection";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Misc from "../components/Misc/Misc";

export default function Home() {
  return (
    <div>
      <HeadTags />
      <Navbar />
      <main>
        <TitleSection />
        <Education />
        <Experience />
        <Skills />
        <Misc />
      </main>
    </div>
  );
}
