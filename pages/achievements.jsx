import HeadTags from "../components/Index/Head/HeadTags";
import Navbar from "../components/Index/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import activiesAndAchievements from "../lib/index/activitiesAndAchievements";

const PublicationsPage = () => {
  return (
    <div>
      <HeadTags />
      <Navbar />
      <main className="container-padding bg-light text-dark mt-4">
        <div className="container-fluid">
          <h2 style={{ fontWeight: 800, marginBottom: "2rem" }}>
            Professional Activities and Achievements
          </h2>
          <ul>
            {activiesAndAchievements.map(({ text }, idx) => {
              return (
                <li key={idx}>
                  <h5>{text}</h5>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicationsPage;
