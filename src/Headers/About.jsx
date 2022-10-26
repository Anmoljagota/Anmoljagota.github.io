import React from "react";
import Aos from "aos";
import Mydata from "../AllData/db.json";
import "aos/dist/aos.css";
import Styles from "../AllCss/About.module.css";
import Styles1 from "../AllCss/Home.module.css";
import { useEffect } from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Anmolimage from "../utilits/Anmol.jpg";
const About = () => {
  const { aboutdata } = Mydata;
  console.log("i am", aboutdata);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ height: "40vw" }} id="palwan" data-aos="zoom-in">
      <Box className={Styles1.uppermain}>
        <h1 className={Styles.about}>About Me</h1>
        <Flex style={{marginTop:"30px"}}>
          <Box className={Styles.Myimage}>
            <Image src={Anmolimage} boxSize="350px" borderRadius="full" />
          </Box>
          <Spacer />
          <Box className={Styles.Myinfo}>
            <Box className={Styles.flex}>

            {/* <h1>Hi I'm Anmol Jagota and I am</h1> */}
            {/* <ul className={Styles.movingtxt}>
              <li>
                <span>Full Stack Developer</span>
              </li>
              <li>
                <span>Problem Solver</span>
              </li>
              <li>
                <span>Quick learner</span>
              </li>
              <li>
                <span>Creative thinking</span>
              </li>
            </ul> */}
            {/* </div> */}
            </Box>
            {aboutdata[0].title}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default About;
