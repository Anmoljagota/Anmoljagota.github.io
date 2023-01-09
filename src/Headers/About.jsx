import React from "react";
import Aos from "aos";
import Mydata from "../AllData/db.json";
import "aos/dist/aos.css";
import Styles from "../AllCss/About.module.css";
import Styles1 from "../AllCss/Home.module.css";
import Styles2 from "../AllCss/tech.module.css";
import cx from 'classnames'
import { useEffect } from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Anmolimage from "../utilits/Anmol.jpg";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  const { aboutdata } = Mydata;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={ cx(Styles1.mobileabout, Styles.laptopabout)} data-aos="zoom-in">
      <Box className={ cx(Styles1.uppermain, Styles1.mobileuppermain)}>
        <h1 className={Styles.about} id="palwan" mt="50px">
          About <span className={Styles2.color}>Me</span>
        </h1>
        <Flex
          style={{ marginTop: "80px" }}
          display={{ sm: "block", md: "flex", lg: "flex",base:"block" }}
          className={Styles1.aboutpage}
       
        >
          <Box   className={ cx(Styles.Myimage, Styles1.imagemobile)}>
            <Image className={ cx(Styles.Myimage1, Styles1.imagemobile1)} src="https://github.com/Anmoljagota/Anmoljagota.github.io/blob/master/src/utilits/anmol3-removebg-preview%20crop.jpg?raw=true" height={{ sm: "250px",lg:"350px",md:"350px",base:"200px"}}   />
          </Box>
          <Spacer />
          <Box
           className={ cx(Styles.Myinfo, Styles1.textmobile)}
            width={{ sm: "100%", md: "100%", lg: "70%" }}
            fontSize={{ sm: "12px", md: "14px", lg: "20px" }}
            textAlign={{ sm: "center", md: "center", lg: "left" }}
          >
            <Box fontSize="17px" fontWeight="600">{aboutdata[0].title}
            <TypeAnimation
          className={Styles.run}
          sequence={[
            "> ",
            2000,
            "> Coding is hard",
            500,
            "> Coding is",
            500,
            "> Coding is fun",
            2000,
            "> Coding is ",
            500,
            "> Coding is love",
            2000,
            "> ",
            1000,
            "> So ",
            500,
            "> So, ",
            1000,
            "> So, I became a Coder. ",
            2000,
            "> So, ",
            500,
            "> ",
            1000,
            "> And ",
            1000,
            "> And, ",
            1000,
            "> And, Coding became my life. ",
            3000,
            () => {
              console.log("Done typing!");
            },
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          // className={styles.typing}
        />
            </Box>
            
          </Box>
        </Flex>
        
      </Box>
    </div>
  );
};

export default About;
