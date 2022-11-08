import React from "react";
import Aos from "aos";
import Mydata from "../AllData/db.json";
import "aos/dist/aos.css";
import Styles from "../AllCss/About.module.css";
import Styles1 from "../AllCss/Home.module.css";
import Styles2 from "../AllCss/tech.module.css";
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
    <div style={{ height: "40vw", marginTop: "150px" }} data-aos="zoom-in">
      <Box className={Styles1.uppermain}>
        <h1 className={Styles.about} id="palwan" mt="50px">
          About <span className={Styles2.color}>Me</span>
        </h1>
        <Flex
          style={{ marginTop: "80px" }}
          display={{ sm: "block", md: "block", lg: "flex" }}
        >
          <Box className={Styles.Myimage}>
            <Image src={Anmolimage} w="450px" h="350px" borderRadius="30px" />
          </Box>
          <Spacer />
          <Box
            className={Styles.Myinfo}
            width={{ sm: "100%", md: "100%", lg: "70%" }}
            fontSize={{ sm: "18px", md: "18px", lg: "18px" }}
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
