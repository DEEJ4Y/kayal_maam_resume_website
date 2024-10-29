import styles from './MembershipItem.module.css';

const MembershipItem = ({ text, duration }) => {
  return (
    <li>
      <h5 className={styles['title']}>{text}</h5>
      {typeof duration === 'string' && <p>{duration}</p>}
      {Array.isArray(duration) &&
        duration.map((item, idx) => <p key={idx}>{item}</p>)}
    </li>
  );
};

export default MembershipItem;
