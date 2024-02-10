import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Styles from "../AllCss/About.module.css";
import Styles1 from "../AllCss/Home.module.css";
import Styles2 from "../AllCss/tech.module.css";
import cx from "classnames";
import { useEffect } from "react";
import { Box, Image, Spacer } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" style={{ marginTop: "100px", height: "auto" }}>
      <Box
        className={cx(Styles1.uppermain, Styles1.mobileuppermain)}
        height="auto"
      >
        <h1 className={Styles.about} id="about" mt="50px">
          About <span className={Styles2.color}>Me</span>
        </h1>
        <Box style={{ marginTop: "80px" }} className={Styles.twothings}>
          <Box height="auto" className={Styles.Myimage} borderRadius="15px">
            <Image
              src="https://github.com/Anmoljagota/Anmoljagota.github.io/blob/master/src/utilits/anmol3-removebg-preview%20crop.jpg?raw=true"
              borderRadius="30px"
              className={Styles.innermyimage}
            />
          </Box>
          <Spacer />
          <Box
            className={Styles.Myinfomain}
            fontSize={{ sm: "12px", md: "14px", lg: "20px" }}
            textAlign={{ sm: "center", md: "center", lg: "left" }}
          >
            <Box fontWeight="480" className={Styles.myinformation} height="80%">
              Hi, I'm Anmol Jagota, a Full Stack Developer with a passion for
              crafting seamless web experiences. Armed with an MCA from
              Chandigarh University and specialized training in MERN stack
              development from Masai School, I bring a blend of technical
              expertise and practical experience. During my tenure at Nolan
              Edutech, I played a pivotal role as a MERN Stack Developer,
              contributing to the development and maintenance of cutting-edge
              applications. With a strong foundation in both frontend and
              backend technologies, I thrive on solving complex problems and
              delivering impactful solutions.
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
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;
