import HeadTags from "../components/Index/Head/HeadTags";
import Navbar from "../components/Index/Navbar/Navbar";
import TitleSection from "../components/Index/TitleSection/TitleSection";
import Education from "../components/Index/Education/Education";
import Experience from "../components/Index/Experience/Experience";
import Skills from "../components/Index/Skills/Skills";
import Misc from "../components/Index/Misc/Misc";
import Publications from "../components/Index/Publications/Publications";
import PatentsAndReviews from "../components/Index/PatentsAndReviews/PatentsAndReviews";

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
        <Publications />
        <PatentsAndReviews />
      </main>
    </div>
  );
}
