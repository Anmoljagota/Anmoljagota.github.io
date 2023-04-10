import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Stats from "./Github";
import Styles from "../AllCss/Home.module.css";
import Styles1 from "../AllCss/tech.module.css";
import Styles2 from "../AllCss/About.module.css";
import GitHubCalendar from "react-github-calendar";
import cx from "classnames";
import ReactTooltip from "react-tooltip";
const Githubstats = () => {
  return (
    <>
      <Box
        mt={{ sm: "196px", md: "196px", lg: "100px" }}
        className={Styles.github}
        data-aos="fade-up"
>
        <h1 className={Styles2.about}>
          Github <span className={Styles1.color}>stats</span>
        </h1>
        <br />
        <br />
        <br />
        <Box
          bg="gray.700"
          color="white"
          padding="20px"
          className={cx(Styles.calendarmobile, Styles.middlemainhome)}
        >
          {/* <h1>Contributers</h1> */}
          <GitHubCalendar username="Anmoljagota">
            {" "}
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </Box>

        <Box
          className={cx(Styles.statsmobile)}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
      
        >
          <Stats />
        </Box>
      </Box>
    </>
  );
};

export default Githubstats;
