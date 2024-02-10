import React from "react";
import Styles from "../AllCss/Home.module.css";
import alldata from "../AllData/db.json";
import Education from "./Education";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Projects from "../Components/Projects";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import About from "./About";
import Githubstats from "../Components/Githubstats";
import Techstack from "../Components/Techstack";
import Contact from "../Components/Contact";
import cx from "classnames";
const { data } = alldata;
console.log(data);
const Home = () => {
  return (
    <>
      <Box
        mt="60px"
        className={cx(Styles.mainhome, Styles.middlemainhome)}
        height="auto"
       
      >
        <Box
          className={cx(Styles.uppermain, Styles.middleuppermain)}
          height="auto"
          display={{ sm: "block", md: "flex", lg: "flex" }}
          
        >
          <Box className={Styles.summary} height="auto">
            Hi
            <img
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
              width="35"
            />
            , my name is
            <span className={cx(Styles.text, Styles.middle)}>
              Anmol <span className={Styles.surname}>Jagota</span>
            </span>
            <h1
              className={Styles.profession}
              fontSize={{ sm: "23px", md: "15px", lg: "17px", base: "23px" }}
            >
              Full Stack Web Developer
            </h1>
            <Text
              style={{ width: "95%" }}
              fontSize={{ md: "15px", base: "16px", lg: "19px" }}
              lineHeight="30px"
              marginTop="10px"
              className={Styles.description}
            >
              with Technical Skills having a knowledge in Programming Language
              and Data Structure Algorithms. Knowing HTML CSS Javascript
              Bootstrap React Mongo DB Redux Chakra UI. made a some beautifull
              Projects solo and Collabrative.Always ready to learn new things.I
              mostly focused on writing a clean elegant and efficient code.I am
              constantly working to learn new things and improving my skills.
            </Text>
            <Box >
              <Flex w="120px" gap="10px">
                {data.map((images) => (
                  <a href={images.link} target="_blank">
                    {" "}
                    <Image
                      key={images.img}
                      src={images.img}
                      className={Styles.social}
                      height={{ md: "45px", lg: "45px", base: "45px" }}
                      borderRadius="full"
                      // ml="10px"

                      mt="15px"
                    />
                  </a>
                ))}
              </Flex>

              <a href="./Anmol-fw18_0435-Resume.pdf" download>
                {" "}
                <Button
                  className={cx(Styles.bg)}
                  colorScheme="blue"
                  borderRadius="10px"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1V1lwhU_WFZ3xEmwjbHR_qsaViqUMaAzU/view?usp=sharing",
                      "_blank",
                      "noreferrer"
                    )
                  }
                >
                  Resume
                  <ExternalLinkIcon ml="10px" />
                </Button>
              </a>
            </Box>
          </Box>
          <Spacer />
          <Box className={Styles.image}>
            <Center>
              <Image
                boxSize="100%"
                height="100%"
                src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/coder.gif"
                className={Styles.homeimage}
                alt="Dan Abramov"
              />
            </Center>
          </Box>
        </Box>
      </Box>
      <Box>
        <About />
      </Box>

      <Education />

      <Techstack />
      <Projects />
      <Githubstats />
      <Contact />
    </>
  );
};

export default Home;
