import styles from "./Skills.module.css";
import SkillItem from "./SkillItem/SkillItem";

const Skills = () => {
  return (
    <div
      id="skills"
      className={`bg-theme text-theme ${styles["skills-container"]}`}
    >
      <div className="container-fluid">
        <h2 className={styles["heading"]}>Expertise and Skills</h2>

        <h3 className={styles["subheading"]}>Skills</h3>
        <div className="row">
          <SkillItem
            text="Internet of Things"
            imgUrl="/images/expertise/iot.jpg"
            space={2}
          />
          <SkillItem
            text="Machine Learning"
            imgUrl="/images/expertise/ml.jpg"
            space={2}
          />
        </div>

        <h2 className={styles["subheading"]}>Programming</h2>
        <div className="row">
          <SkillItem text="Java" imgUrl="/images/skills/java.png" space={4} />
          <SkillItem text="C++" imgUrl="/images/skills/cpp.jpg" space={4} />
          <SkillItem text="Python" imgUrl="/images/skills/py.jpg" space={4} />
          <SkillItem text="C" imgUrl="/images/skills/c.png" space={4} />
        </div>

        <h2 className={styles["subheading"]}>Additional Skills</h2>
        <div className={styles["additional-skills"]}>
          <ul>
            <li>Good Organizing, Coordination and Leadership skills.</li>
            <li>Inspirational Speaker and Life Coach.</li>
            <li>Good at Master/Mistress of Ceremony/Compering.</li>
            <li>Good at Proposal writing and submissions.</li>
            <li>
              Good communication skills, mentoring skills, counseling skills,
              motivational skills.
            </li>
            <li>Dynamic strategic planner, Innovative thinker.</li>
            <li>
              To some extent understands human psychology and handle
              accordingly, acquired through book reading and experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
