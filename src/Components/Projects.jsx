import { Box, Button, Flex, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import image from "../utilits/lyst.png";
import Styles from "../AllCss/tech.module.css";
import data from "../AllData/db.json";
import projectdata from "../AllData/Project.json";
const Projects = () => {
  const { project_details } = projectdata;
  console.log(project_details);
  const { techstack } = data;
  return (
    <Box>
      <h2 data-aos="zoom in">
        Projects<span className={Styles.pro}>Clone</span>
      </h2>
      {project_details.map((projectitems) => (
        <div className={Styles.projectmain}>
          <SimpleGrid
            columns={[1, 2, 2]}
            spacing="40px"
            className={Styles.grid}
            data-aos="fade-up"
          >
            <Box className={Styles.projectimg}>
              <Image src={image} w="100%" h="100%" />
            </Box>
            <Box className={Styles.projectinfo}>
              <Box className={Styles.infoinner}>
                <h1 style={{ textAlign: "center" }}>{projectitems.title}</h1>
                <Box className={Styles.data}>
                  {projectitems.description}
                  <Flex h="70px" w="100px">
                    {techstack.map((images) => (
                      <Box key={images.img}>
                        <Image src={images.img} h="100%" w="100%" />
                      </Box>
                    ))}
                  </Flex>
                </Box>

                <a href={projectitems.link} target="_blank">
                  <Button className={Styles.live}>Go to live</Button>
                </a>
                <a href={projectitems.github} target="_blank">
                  {" "}
                  <Button className={Styles.live} marginLeft="25px">
                    View code
                  </Button>
                </a>
              </Box>
            </Box>
          </SimpleGrid>
        </div>
      ))}
    </Box>
  );
};

export default Projects;
