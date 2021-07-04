import styles from "./Skills.module.css";
import SkillItem from "./SkillItem/SkillItem";

const Skills = () => {
  return (
    <div className={`bg-theme text-theme ${styles["skills-container"]}`}>
      <div className="container-fluid">
        <h1 className={styles["heading"]}>Expertise and Skills</h1>

        <h1 className={styles["subheading"]}>Skills</h1>
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

        <h1 className={styles["subheading"]}>Programming</h1>
        <div className="row">
          <SkillItem text="Java" imgUrl="/images/skills/java.png" space={4} />
          <SkillItem text="C++" imgUrl="/images/skills/cpp.jpg" space={4} />
          <SkillItem text="Python" imgUrl="/images/skills/py.jpg" space={4} />
          <SkillItem text="C" imgUrl="/images/skills/c.png" space={4} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
