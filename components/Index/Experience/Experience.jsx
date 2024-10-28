import styles from './Experience.module.css';

import WorkplaceHeading from './WorkplaceHeading/WorkplaceHeading';
import ExperienceItem from './ExperienceItem/ExperienceItem';

import CountUp from 'react-countup';

import { useRef } from 'react';
import useOnScreen from '../../../utils/useOnScreen';

const Experience = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  let experienceInYears = year - 2001;
  if (month < 6) {
    experienceInYears -= 1;
  }

  const experienceRef = useRef();
  const experienceOnScreen = useOnScreen(experienceRef, '0px');

  return (
    <div id="experience" className={`bg-accent text-accent container-padding`}>
      <div className="container-fluid">
        <div className="text-center">
          {/* <h2 className={styles["heading"]}>Experience</h2> */}
          <h3 className={styles['sub-heading']} ref={experienceRef}>
            Total Experience:{' '}
            <strong className={styles['sub-heading-bold']}>
              <CountUp
                end={experienceOnScreen ? experienceInYears : 0}
                duration={3}
              />
              + Years
            </strong>
          </h3>
        </div>
        <div className="text-center row justify-content-center">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <WorkplaceHeading name="University of Arts, London" />
            <ExperienceItem
              role="Senior Lecturer and Course Leader, Data Science and Artificial Intelligence, Creative Computing Institute"
              duration="Since June 2023"
              current
            />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <WorkplaceHeading name="SRMIST" />
            <ExperienceItem
              role="Assistant Director, International Relations Office, SRMIST"
              duration="Oct 2022 - May 2023"
            />
            <ExperienceItem
              role="Associate Professor, SRMIST"
              duration="Jan 2022 - May 2023"
            />
            <ExperienceItem
              role="Assistant Professor, SRMIST"
              duration="January 2 2003 - December 2022"
            />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <WorkplaceHeading name="Previous Experience" />
            <ExperienceItem
              role="Lecturer, Mariana Engineering College"
              duration="June 1 2002 - December 30 2002"
            />
            <ExperienceItem
              role="Lecturer, Sastha Engineering College"
              duration="June 1 2001 - May 30 2002"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
