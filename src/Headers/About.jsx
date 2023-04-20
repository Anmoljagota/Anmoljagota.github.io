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
        <h1 className={Styles.about} id="palwan" mt="50px">
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
              Hi My name is <span>Anmol Jagota</span> and i am from{" "}
              <span>Nangal-dam Punjab (India)</span>. I have completed my
              graduation in <span>Bachelor of computer application</span>
              <span style={{ marginLeft: "3px", fontWeight: "480px" }}>
                from
              </span>{" "}
              <span>Himachal Pardesh University (HPU)</span>. now i joined a
              <span>Masai School</span> which offers a full time course on{" "}
              <span>Full Stack Web Developer</span>. here i got alot of
              knowledge from my instructor and one of the best thing here i
              improve my communication skills . they provide a extra activity to
              improve communication skills . I get hands-on experience in
              learning <span>frontend and backend</span> technologies.
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
