import { StylesProvider } from "@chakra-ui/react";
import React from "react";
import Styles1 from "../AllCss/Github.module.css";
import cx from "classnames";
import Styles from "../AllCss/Home.module.css";
import "../App.css";
const Stats = () => {
  return (
    // streak
    <div
      style={{ marginTop: "20px" }}
      className={Styles.mobileviewcalendar}
      // border="1px solid black"
    >
      <div className={cx(Styles1.calender, Styles.calenderimage)}>
        <a href="https://github.com/saurabh0413">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Anmoljagota&theme=tokyonight&count_private=true&show_icons=true" //stats
            className={Styles.mobileviewcalendar2}
          />
        </a>
        <a href="https://github.com/Anmoljagota">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Anmoljagota&theme=tokyonight"
            className={Styles.mobileviewcalendar}
          />
        </a>
      </div>

      <div
        style={{
          width: "60%",
          marginTop: "20px ",
        }}
      >
        <a href="https://github.com/Anmoljagota">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anmoljagota&theme=tokyonight"
            className={Styles.mobileviewcalendar1}
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
