import styles from "./PatentsAndReviews.module.css";
import patents from "../../../lib/index/patents";

import Patent from "./Patent/Patent";

import { useRef } from "react";
import useOnScreen from "../../../utils/useOnScreen";

const PatentsAndReviews = () => {
  const patentsRef = useRef();
  const reviewsRef = useRef();

  const patentsOnScreen = useOnScreen(patentsRef, "0px");
  const reviewsOnScreen = useOnScreen(patentsRef, "0px");

  return (
    <div id="patents" className="container-padding bg-accent text-accent">
      <div className="container-fluid">
        <div
          ref={patentsRef}
          className={
            patentsOnScreen ? `animate__animated animate__fadeInLeft` : ``
          }
        >
          <h2 className={`${styles["heading"]}`}>Patents</h2>
          <div>
            {patents.map(({ text, id, date }, idx) => {
              return <Patent key={idx} text={text} id={id} date={date} />;
            })}
          </div>
        </div>

        <div
          ref={reviewsRef}
          className={
            reviewsOnScreen ? `animate__animated animate__fadeInRight` : ``
          }
        >
          <h2 id="reviews" className={`${styles["review-heading"]}`}>
            Reviews
          </h2>
          <div className={styles["wrapper"]}>
            <ul>
              <li>
                Reviewer for 2 book chapters (Preliminary) for Internet of
                Things for Oxford Press (2018).
              </li>
              <li>Reviewer for 3 papers in IET Communications (2019).</li>
              <li>
                Reviewer in 12th International Conference on Computational
                Intelligence and Communication Networks (CICN 2020).
              </li>
              <li>
                Reviewer in Book series of Springer Proceedings in Mathematics
                &#38; Statistics, which is in conjunction with the Workshop on
                Complex Systems Modelling &#38; Simulation 2019 (CoSMoS 2019),
                School of Mathematical Sciences, Universiti Sains, Malaysia.
              </li>
              <li>
                Technical Reviewer in International Conference on Advanced
                Computing Technology.
              </li>
              <li>
                Technical Reviewer in International Conference on Smart and
                Secured Sustainable Cities.
              </li>
              <li>
                Technical reviewer in IEEE Sensors 2020 Conference sponsored by
                IEEE and IEEE Sensors Council.
              </li>
              <li>
                Technical reviewer for Indonesian Journal of Electrical
                Engineering and Computer Science, (IJEECS 2021).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentsAndReviews;
