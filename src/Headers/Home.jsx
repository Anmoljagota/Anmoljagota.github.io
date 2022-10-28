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
const { data } = alldata;
console.log(data);
const Home = () => {
  return (
    <Box h="300vw">
      <Box mt="60px">
        <Flex className={Styles.uppermain}>
          <Box className={Styles.summary}>
            Hi
            <img
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
              width="35"
            />
            , my name is
            <span className={Styles.text}>Anmol Jagota</span>
            <h1 className={Styles.profession}>Full Stack Web Developer</h1>
            <Text fontSize="17px" lineHeight="30px" marginTop="10px">
              with Technical Skills having a knowledge in Programming Language
              and Data Structure Algorithms. Knowing HTML CSS Javascript
              Bootstrap React Mongo DB Redux Chakra UI. made a some beautifull
              Projects solo and Collabrative.Always ready to learn new things.I
              mostly focused on writing a clean elegant and efficient code.I am
              constantly working to learn new things and improving my skills.
            </Text>
            <Box w="50px" h="50px">
              <Flex w="120px" gap="10px">
                {data.map((images) => (
                  <a href={images.link} target="_blank">
                    {" "}
                    <Image
                      key={images.img}
                      src={images.img}
                      h="50px"
                      w="200px"
                      borderRadius="full"
                      ml="10px"
                      mt="15px"
                    />
                  </a>
                ))}
              </Flex>
              <a
                href="https://drive.google.com/file/d/1lO7hKiBKArT46I8oqwwx89gf798ZHdq9/view?usp=sharing"
                target="_blank"
              >
                {" "}
                <Button
                  className={Styles.bg}
                  colorScheme="blue"
                  size="lg"
                  borderRadius="10px"
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
                alt="Dan Abramov"
              />
            </Center>
          </Box>
        </Flex>
      </Box>

      <About />
      <Education />
      <Techstack />
      <Projects />
      <Githubstats />
      <Contact />
    </Box>
  );
};

export default Home;
