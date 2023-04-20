// import light from '../styles/light.module.css';
// import dark from '../styles/dark.module.css';
import { GiBookshelf } from "react-icons/gi";
import InstitutionCard from "../Components/common/InstitutionCard";
import data from "../AllData/db.json";
import styles from "../AllCss/Education.module.css";

function Education() {
  return (
    <div className={styles.education} style={{marginTop:"100px"}}>
      <div data-aos="slide-up">
        <h1>Educ</h1>
        <h1 className={styles.ao}>a</h1>
        <h1>ti</h1>
        <h1 className={styles.ao}>o</h1>
        <h1>n</h1>
        <GiBookshelf className={styles.booksIcon} />
      </div>
      <div>
        {data.education.map((item) => (
          <InstitutionCard
            name={item.title}
            img={item.img}
            address={item.palace}
            learn={item.learn}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
