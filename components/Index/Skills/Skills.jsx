import styles from "./Skills.module.css";
import SkillItem from "./SkillItem/SkillItem";

import { useRef } from "react";
import useOnScreen from "../../../utils/useOnScreen";

const Skills = () => {
  const headingRef = useRef();
  const skillsHeadingRef = useRef();
  const additionalSkillsRef = useRef();

  const headingOnScreen = useOnScreen(headingRef, "0px");
  const skillsHeadingOnScreen = useOnScreen(skillsHeadingRef, "0px");
  const additionalSkillsOnScreen = useOnScreen(additionalSkillsRef, "0px");

  return (
    <div
      id="skills"
      className={`bg-theme text-theme ${styles["skills-container"]}`}
    >
      <div className="container-fluid">
        <div className="text-center">
          <h2
            className={
              headingOnScreen
                ? `${styles["heading"]} animate__animated animate__fadeInUp`
                : `${styles["heading"]} animate__animated animate__fadeOutDown`
            }
            ref={headingRef}
          >
            Expertise and Skills
          </h2>

          <h3
            className={
              skillsHeadingOnScreen
                ? `${styles["subheading"]} animate__animated animate__fadeInUp`
                : `${styles["subheading"]} animate__animated animate__fadeOutDown`
            }
            ref={skillsHeadingRef}
          >
            Skills
          </h3>
        </div>

        <div className="row">
          <SkillItem
            text="Internet of Things"
            imgUrl="/images/expertise/iot.jpg"
            space={3}
          />
          <SkillItem
            text="Machine Learning"
            imgUrl="/images/expertise/ml.jpg"
            space={3}
          />
          <SkillItem
            text="Artificial Intelligence"
            imgUrl="/images/expertise/ai.jpg"
            space={3}
          />
        </div>

        <div className="text-center">
          <h2 className={styles["subheading"]}>Programming</h2>
        </div>
        <div className="row">
          <SkillItem text="Java" imgUrl="/images/skills/java.png" space={4} />
          <SkillItem text="C++" imgUrl="/images/skills/cpp.jpg" space={4} />
          <SkillItem text="Python" imgUrl="/images/skills/py.jpg" space={4} />
          <SkillItem text="C" imgUrl="/images/skills/c.png" space={4} />
        </div>
        <div
          ref={additionalSkillsRef}
          className={
            additionalSkillsOnScreen
              ? `animate__animated animate__fadeInLeft`
              : `animate__animated animate__fadeOutRight`
          }
        >
          <h2 className={`${styles["subheading"]} px-4`}>Additional Skills</h2>
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
    </div>
  );
};

export default Skills;
